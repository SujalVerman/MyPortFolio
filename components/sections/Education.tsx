"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

interface EducationProps {
  id: string;
}

export default function Education({ id }: EducationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen py-24 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-start gap-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
              className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl"
            >
              <GraduationCap className="text-white" size={40} />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                Sagar Institute of Science and Technology
              </h3>
              <p className="text-lg font-semibold text-blue-600 dark:text-purple-400 mb-2">
                B.Tech in Computer Science & Engineering
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">2023 – 2027</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Pursuing a Bachelor's degree in Computer Science & Engineering, focusing on software
                development, algorithms, and modern web technologies. Actively applying theoretical
                knowledge to real-world projects and building a strong foundation in full-stack development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

