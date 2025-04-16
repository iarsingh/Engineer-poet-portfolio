"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A unique blend of technical expertise and creative expression
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Engineering Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">The Engineer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              As a software engineer, I specialize in building robust and scalable applications.
              My technical expertise includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Full-stack web development</li>
              <li>Cloud architecture and deployment</li>
              <li>API design and implementation</li>
              <li>Database optimization</li>
              <li>Test-driven development</li>
            </ul>
          </motion.div>

          {/* Poetry Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">The Poet</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Through poetry, I explore the human experience and emotions.
              My poetic journey encompasses:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Contemporary poetry</li>
              <li>Spoken word performances</li>
              <li>Poetry workshops and readings</li>
              <li>Literary publications</li>
              <li>Creative writing mentorship</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
