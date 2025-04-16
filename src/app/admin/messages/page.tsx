'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface Message {
  id: string;
  name: string;
  email: string;
  content: string;
  recipientType: string;
  language?: string;
  confidence?: number;
  read: boolean;
  createdAt: string;
}

export default function MessagesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (session) {
      fetchMessages();
      const refreshInterval = setInterval(fetchMessages, 30000);
      return () => clearInterval(refreshInterval);
    }
  }, [session]);

  const markAsRead = async (id: string) => {
    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ read: true }),
      });

      if (!response.ok) {
        throw new Error('Failed to update message');
      }

      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, read: true } : msg
      ));
    } catch (error) {
      console.error('Error updating message:', error);
    }
  };

  const deleteMessage = async (id: string) => {
    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete message');
      }

      setMessages(messages.filter(msg => msg.id !== id));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return null;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>
      <div className="grid gap-4">
        {messages.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No messages yet.</p>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 rounded-lg border ${
                message.read
                  ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                  : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {message.name}
                  </h3>
                  <a
                    href={`mailto:${message.email}`}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {message.email}
                  </a>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Recipient: {message.recipientType}
                    {message.language && (
                      <span className="ml-2">
                        Language: {message.language}
                        {message.confidence && (
                          <span className="text-xs ml-1">
                            ({Math.round(message.confidence * 100)}% confidence)
                          </span>
                        )}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {!message.read && (
                    <button
                      onClick={() => markAsRead(message.id)}
                      className="text-sm px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                    >
                      Mark as Read
                    </button>
                  )}
                  <button
                    onClick={() => deleteMessage(message.id)}
                    className="text-sm px-3 py-1 rounded-md bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
                {message.content}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {new Date(message.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 