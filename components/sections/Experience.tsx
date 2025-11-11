"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar, Code2, Zap, Users } from "lucide-react";

interface ExperienceProps {
  id: string;
}

const experiences = [
  {
    company: "Mfilterit",
    position: "Software Intern",
    period: "Aug 2025 – Present",
    location: "Bengaluru, Karnataka",
    description: "A company specializing in data intelligence and monitoring solutions",
    achievements: [
      "Developed a social media monitoring application using Next.js, TypeScript, React Query, and ShadCN UI",
      "Integrated RESTful APIs with React Query for efficient data fetching, caching, and synchronization",
      "Designed responsive UI components ensuring accessibility and consistency",
    ],
    technologies: ["Next.js", "TypeScript", "React Query", "ShadCN UI", "REST APIs"],
    isCurrent: true,
  },
  {
    company: "Appsi Studio",
    position: "Frontend Developer Intern",
    period: "Feb 2025 – Jul 2025",
    location: "Patna, Bihar",
    description: "A digital agency focused on web and mobile applications",
    achievements: [
      "Built responsive UIs with React.js, Tailwind CSS, and Figma",
      "Created onboarding flows, animated sliders, and mobile landing pages",
      "Contributed to a no-code website builder enabling effortless website creation",
    ],
    technologies: ["React.js", "Tailwind CSS", "Figma", "JavaScript"],
    isCurrent: false,
  },
];

export default function Experience({ id }: ExperienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building scalable solutions and delivering impactful results
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.01, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4 flex-1">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex-shrink-0"
                    >
                      <Briefcase className="text-white" size={28} />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200">
                          {exp.position}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-purple-400 mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="text-blue-600 dark:text-purple-400" size={20} />
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Key Achievements
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-blue-500 dark:text-purple-400 mt-1.5 flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="text-blue-600 dark:text-purple-400" size={20} />
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Technologies Used
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + idx * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1.5 bg-blue-100 dark:bg-purple-900/30 text-blue-700 dark:text-purple-300 rounded-lg text-sm font-medium shadow-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

