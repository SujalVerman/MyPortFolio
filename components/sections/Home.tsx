"use client";

import { motion } from "framer-motion";
import { Download, Code, Terminal, Zap, Database, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface HomeProps {
  id: string;
}

const techIcons = [
  { icon: Code, label: "React", delay: 0 },
  { icon: Terminal, label: "Node.js", delay: 0.2 },
  { icon: Database, label: "MongoDB", delay: 0.4 },
  { icon: Globe, label: "Next.js", delay: 0.6 },
  { icon: Zap, label: "TypeScript", delay: 0.8 },
];


export default function Home({ id }: HomeProps) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 animate-gradient" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 dark:bg-purple-400/30 rounded-full"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            animate={{
              y: [null, Math.random() * dimensions.height],
              x: [null, Math.random() * dimensions.width],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full lg:w-auto text-center lg:text-left lg:max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-4"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4"
              >
                👋 Welcome to my Portfolio
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Hi, I'm{" "}
              </span>
              <motion.span
                animate={{ 
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent block sm:inline"
              >
                Sujal Verman
              </motion.span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-300"
            >
              Full Stack Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 lg:mb-8 leading-relaxed"
            >
              Building scalable web apps using Next.js, TypeScript, and Node.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  View Projects
                </motion.button>
              </Link>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/NewResume.pdf"
                download
                className="px-6 sm:px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-700"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Animated elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
            className="relative w-full lg:w-auto flex-shrink-0 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Main floating code icon */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-50" />
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center shadow-2xl">
                  <Image src="/sujal.png" alt="Sujal Verman" width={350} height={350} className="rounded-md" />
                </div>
              </motion.div>

              {/* Floating tech icons around the main icon */}
              {techIcons.map((tech, index) => {
                const angle = (index * 360) / techIcons.length;
                const radius = 140;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + tech.delay, duration: 0.5 }}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: tech.delay,
                      }}
                      className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                    >
                      <tech.icon 
                        size={24} 
                        className="text-blue-600 dark:text-purple-400 group-hover:scale-110 transition-transform" 
                      />
                    </motion.div>
                  </motion.div>
                );
              })}

              

              {/* Rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-blue-500/20 dark:border-purple-500/20 rounded-full"
                style={{ width: "110%", height: "110%", top: "-5%", left: "-5%" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-purple-500/20 dark:border-blue-500/20 rounded-full"
                style={{ width: "120%", height: "120%", top: "-10%", left: "-10%" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

