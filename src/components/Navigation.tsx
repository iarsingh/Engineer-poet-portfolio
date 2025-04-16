"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useView } from '@/context/ViewContext';
import DateTimeDisplay from './DateTimeDisplay';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { view, toggleView } = useView();

  // Different nav items for each view
  const engineerNavItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const poetNavItems = [
    { href: '#about', label: 'About' },
    { href: '#poetry', label: 'Poetry' },
    { href: '#contact', label: 'Contact' },
  ];

  const navItems = view === 'engineer' ? engineerNavItems : poetNavItems;

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <DateTimeDisplay />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {/* ViewToggle in header */}
            <div className="ml-6">
              <button
                onClick={toggleView}
                className="relative inline-flex h-8 w-32 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 p-1 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Toggle between Profession and Passion view"
              >
                <motion.div
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={false}
                  animate={{
                    x: view === 'engineer' ? '0%' : '100%',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
                <div className="relative z-10 flex w-full">
                  <span className={`flex-1 text-center text-xs font-medium transition-colors duration-200 ${view === 'engineer' ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                    Profession
                  </span>
                  <span className={`flex-1 text-center text-xs font-medium transition-colors duration-200 ${view === 'poet' ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                    Passion
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile ViewToggle */}
            <div className="px-3 py-2">
              <button
                onClick={toggleView}
                className="relative inline-flex w-full h-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 p-1 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Toggle between Profession and Passion view"
              >
                <motion.div
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={false}
                  animate={{
                    x: view === 'engineer' ? '0%' : '100%',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
                <div className="relative z-10 flex w-full">
                  <span className={`flex-1 text-center text-xs font-medium transition-colors duration-200 ${view === 'engineer' ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                    Profession
                  </span>
                  <span className={`flex-1 text-center text-xs font-medium transition-colors duration-200 ${view === 'poet' ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                    Passion
                  </span>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
