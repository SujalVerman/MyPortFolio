"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectsProps {
  id: string;
} 

const projects = [
  {
    title: "StudyBuddy",
    description: "AI-driven study assistant that helps students organize their learning materials and provides intelligent study recommendations.",
    techStack: ["Next.js", "Node.js", "OpenAI API", "Tailwind CSS", "MongoDB", "TypeScript"],
    github: "https://github.com",
    live: "https://studybuddy.com",
  },
  {
    title: "FixFrame AI",
    description: "AI-powered wireframe builder that transforms rough sketches into professional UI designs using machine learning.",
    techStack: ["Next.js", "Node.js", "Express", "MongoDB", "TypeScript"],
    github: "https://github.com",
    live: "https://fixframe.ai",
  },
  {
    title: "HugWithBurger",
    description: "Interactive food ordering website with real-time order tracking, payment integration, and personalized recommendations.",
    techStack: ["HTML", "CSS", "JavaScript", "MongoDB", "Node.js", "Express"],
    github: "https://github.com",
    live: "https://hugwithburger.com",
  },
];

export default function Projects({ id }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen py-24 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-purple-900/30 text-blue-700 dark:text-purple-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    <ExternalLink size={18} />
                    View Project
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github size={18} />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

