"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "A full-stack web application that...",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    link: "#",
    github: "#"
  },
  {
    title: "Project 2",
    description: "An innovative mobile app that...",
    technologies: ["React Native", "Firebase", "Redux"],
    link: "#",
    github: "#"
  },
  {
    title: "Project 3",
    description: "A cloud-based solution for...",
    technologies: ["Python", "Django", "PostgreSQL", "Docker"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Software Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of my technical work and innovations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.link && (
                    <Link
                      href={project.link}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View Project
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      className="text-gray-600 dark:text-gray-300 hover:underline"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
