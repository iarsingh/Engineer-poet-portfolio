"use client";

import About from '../components/About';
import Projects from '../components/Projects';
import Poetry from '../components/Poetry';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Resume from '../components/Resume';
import ProfileImage from '../components/ProfileImage';
import { useView } from '@/context/ViewContext';

export default function Home() {
  const { view } = useView();

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ProfileImage />
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Akhilesh Singh
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {view === 'engineer' 
              ? "DevOps Engineer by day, Poet by night. Bridging the gap between technology and creativity."
              : "Poet by night, DevOps Engineer by day. Exploring the intersection of technology and human expression."}
          </p>
        </div>
      </section>

      {/* Conditional Sections */}
      {view === 'engineer' ? (
        <>
          <Resume />
          <About />
          <Projects />
          <Contact />
        </>
      ) : (
        <>
          <Poetry />
          <About />
          <Contact />
        </>
      )}
      
      <Footer />
    </main>
  );
}
