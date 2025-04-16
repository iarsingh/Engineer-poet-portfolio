"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-48 h-48 mx-auto mb-8"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse" />
      <div className="relative w-full h-full p-1">
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
          <Image
            src="https://ui-avatars.com/api/?name=Akhilesh+Singh&background=6366f1&color=fff&size=200"
            alt="Akhilesh Singh"
            width={192}
            height={192}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
} 