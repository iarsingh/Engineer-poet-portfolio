'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

interface FestivalWish {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  published: boolean;
  createdAt: string;
}

export default function FestivalWishesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [wishes, setWishes] = useState<FestivalWish[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingWish, setEditingWish] = useState<FestivalWish | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: '',
    published: false
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    } else if (status === 'authenticated') {
      fetchWishes();
    }
  }, [status, router]);

  const fetchWishes = async () => {
    try {
      const response = await fetch('/api/admin/festival-wishes');
      if (!response.ok) throw new Error('Failed to fetch wishes');
      const data = await response.json();
      setWishes(data);
    } catch (error) {
      console.error('Error fetching wishes:', error);
      toast.error('Failed to load festival wishes');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/festival-wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to create wish');

      toast.success('Festival wish created successfully');
      setFormData({ title: '', content: '', imageUrl: '', published: false });
      fetchWishes();
    } catch (error) {
      console.error('Error creating wish:', error);
      toast.error('Failed to create festival wish');
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingWish) return;

    try {
      const response = await fetch(`/api/admin/festival-wishes/${editingWish.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to update wish');

      toast.success('Festival wish updated successfully');
      setEditingWish(null);
      setFormData({ title: '', content: '', imageUrl: '', published: false });
      fetchWishes();
    } catch (error) {
      console.error('Error updating wish:', error);
      toast.error('Failed to update festival wish');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this festival wish?')) return;

    try {
      const response = await fetch(`/api/admin/festival-wishes/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete wish');

      toast.success('Festival wish deleted successfully');
      fetchWishes();
    } catch (error) {
      console.error('Error deleting wish:', error);
      toast.error('Failed to delete festival wish');
    }
  };

  const startEdit = (wish: FestivalWish) => {
    setEditingWish(wish);
    setFormData({
      title: wish.title,
      content: wish.content,
      imageUrl: wish.imageUrl,
      published: wish.published
    });
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Manage Festival Wishes</h1>
          <p className="mt-2 text-gray-600">Create and manage your festival wishes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold mb-4">
              {editingWish ? 'Edit Festival Wish' : 'Create New Festival Wish'}
            </h2>
            <form onSubmit={editingWish ? handleUpdate : handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Content</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="url"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-900">Published</label>
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {editingWish ? 'Update' : 'Create'}
                </button>
                {editingWish && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingWish(null);
                      setFormData({ title: '', content: '', imageUrl: '', published: false });
                    }}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </motion.div>

          {/* List Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold mb-4">Existing Festival Wishes</h2>
            <div className="space-y-4">
              {wishes.map((wish) => (
                <div
                  key={wish.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{wish.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{wish.content}</p>
                      {wish.imageUrl && (
                        <img
                          src={wish.imageUrl}
                          alt={wish.title}
                          className="mt-2 h-20 w-20 object-cover rounded"
                        />
                      )}
                      <div className="mt-2 flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs rounded ${
                          wish.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {wish.published ? 'Published' : 'Draft'}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(wish.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => startEdit(wish)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(wish.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 