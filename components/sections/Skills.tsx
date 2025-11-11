"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Database, RefreshCcw } from "lucide-react";
import { useRef } from "react";


interface AboutProps {
  id: string;
}
// use devicon
const skillCategories = {
  Frontend: [
    { name: "Next.js", icon: <i className="devicon-nextjs-original-wordmark"></i> },
    { name: "React.js", icon: <i className="devicon-react-original colored"></i> },
    { name: "TypeScript", icon: <i className="devicon-typescript-original colored"></i> },
    { name: "Tailwind CSS", icon: <i className="devicon-tailwindcss-original colored"></i> },
    { name: "ShadCN UI", icon: <i className="devicon-materialui-plain"></i> }
  ],
  Backend: [
    { name: "Node.js", icon: <i className="devicon-nodejs-plain colored"></i> },
    { name: "Express.js", icon: <i className="devicon-express-original colored"></i> },
    { name: "MongoDB", icon: <i className="devicon-mongodb-plain colored"></i> },
    { name: "Mongoose", icon: <Database className="text-green-400 w-6 h-6" /> },
  ],
  Tools: [
    { name: "Git", icon: <i className="devicon-git-plain colored"></i> },
  { name: "REST API", icon: <i className="devicon-fastapi-plain colored"></i> },
  { name: "Agile", icon: <RefreshCcw className="text-blue-400 w-6 h-6" /> },
  { name: "SQL", icon: <i className="devicon-mysql-plain colored"></i> },
  ],
};

export default function Skills({ id }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen py-24 px-4 bg-white dark:bg-[#0a0a0a]"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                {category}
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.1, delay: categoryIndex * 0.01 + index * 0.01 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <span className="text-3xl group-hover:scale-125 transition-transform">
                      {skill.icon}
                    </span>
                    <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors">
                      {skill.name}
                    </span>
                    <motion.div
                      className="ml-auto w-2 h-2 rounded-full bg-blue-500 dark:bg-purple-500 opacity-0 group-hover:opacity-100"
                      animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

