"use client";

import { useView } from '@/context/ViewContext';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function ViewToggle() {
  const { view, toggleView } = useView();
  const pathname = usePathname();

  // Only show on the home page
  if (pathname !== '/') {
    return null;
  }

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
      <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg p-2 rounded-l-2xl">
        <button
          onClick={toggleView}
          className="relative flex flex-col items-center w-28 focus:outline-none"
          aria-label="Toggle between Profession and Passion view"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-l-xl"
            initial={false}
            animate={{
              y: view === 'engineer' ? 0 : '50%',
              height: '50%',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
          <div className="relative flex flex-col items-stretch w-full">
            <div className="relative group py-3 px-4 flex items-center justify-center">
              <span className={`text-sm font-medium transition-colors duration-200 ${view === 'engineer' ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                Profession
              </span>
            </div>
            <div className="relative group py-3 px-4 flex items-center justify-center">
              <span className={`text-sm font-medium transition-colors duration-200 ${view === 'poet' ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                Passion
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
} 