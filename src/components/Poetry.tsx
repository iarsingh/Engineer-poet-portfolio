"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Poem {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export default function Poetry() {
  const [poems, setPoems] = useState<Poem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const response = await fetch('/api/poems');
        if (!response.ok) {
          throw new Error('Failed to fetch poems');
        }
        const data = await response.json();
        setPoems(data);
      } catch (error) {
        console.error('Error fetching poems:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPoems();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="poetry" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Poetry Collection</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Where technology meets the human spirit in verse
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-8">Loading poems...</div>
        ) : poems.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No poems available at the moment.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poems.map((poem, index) => (
              <motion.div
                key={poem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      {poem.title}
                    </h3>
                  </div>
                  <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div>Created: {formatDate(poem.createdAt)}</div>
                    <div>Published: {formatDate(poem.updatedAt)}</div>
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap font-serif text-gray-600 dark:text-gray-300">
                      {poem.content}
                    </pre>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
