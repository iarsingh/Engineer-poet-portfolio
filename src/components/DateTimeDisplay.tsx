"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const festivals = [
  { date: '01-01', name: 'New Year', wish: 'Happy New Year!' },
  { date: '12-25', name: 'Christmas', wish: 'Merry Christmas!' },
  { date: '10-24', name: 'Diwali', wish: 'Happy Diwali!' },
  { date: '08-15', name: 'Independence Day', wish: 'Happy Independence Day!' },
  { date: '01-26', name: 'Republic Day', wish: 'Happy Republic Day!' },
  { date: '09-05', name: 'Teachers Day', wish: 'Happy Teachers Day!' },
  { date: '11-14', name: 'Children\'s Day', wish: 'Happy Children\'s Day!' },
  { date: '08-29', name: 'Raksha Bandhan', wish: 'Happy Raksha Bandhan!' },
  // Add more festivals as needed
];

export default function DateTimeDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [festivalWish, setFestivalWish] = useState<string | null>(null);

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Check for festival
    const today = new Date();
    const currentDate = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    
    const festival = festivals.find(f => f.date === currentDate);
    if (festival) {
      setFestivalWish(festival.wish);
    } else {
      setFestivalWish(null);
    }

    return () => clearInterval(timer);
  }, []);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className="flex items-center space-x-4 text-sm">
      <div className="hidden lg:flex items-center space-x-2">
        <span className="text-gray-600 dark:text-gray-400">
          {days[currentTime.getDay()]},
        </span>
        <span className="text-gray-600 dark:text-gray-400">
          {months[currentTime.getMonth()]} {currentTime.getDate()}, {currentTime.getFullYear()}
        </span>
      </div>
      <div className="text-gray-600 dark:text-gray-400">
        {currentTime.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          second: '2-digit',
          hour12: true 
        })}
      </div>
      {festivalWish && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden lg:block text-sm font-medium text-purple-600 dark:text-purple-400"
        >
          {festivalWish}
        </motion.div>
      )}
    </div>
  );
} 