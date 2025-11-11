"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Zap, Users } from "lucide-react";
import Image from "next/image";

interface AboutProps {
  id: string;
}

const values = [
  { icon: Code2, title: "Clean Code", description: "Writing maintainable and efficient code" },
  { icon: Zap, title: "Scalable Design", description: "Building architectures that grow" },
  { icon: Users, title: "Agile Collaboration", description: "Working seamlessly in teams" },
];

export default function About({ id }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-full w-full py-24 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:col-span-6 left-12 relative "
          >
            <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Hi, I’m Sujal — I turn ideas into fast, scalable web apps.
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I specialize in building clean, performant interfaces with{" "}
                <span className="font-semibold text-blue-600 dark:text-purple-400">Next.js</span> and{" "}
                <span className="font-semibold text-blue-600 dark:text-purple-400">TypeScript</span>, backed by robust APIs on{" "}
                <span className="font-semibold text-blue-600 dark:text-purple-400">Node.js</span>. Recently at{" "}
                <span className="font-semibold">Mfilterit</span> and{" "}
                <span className="font-semibold">Appsi Studio</span>, I worked on data-rich UIs, real-time experiences, and component systems that scale.
              </p>

              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-purple-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Product-focused engineering: thoughtful UX, predictable state, accessible components.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-purple-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Data-driven UIs: React Query, REST integrations, and smooth, resilient loading states.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-purple-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Systemized styling: Tailwind + component patterns for speed and consistency.
                  </span>
                </li>
              </ul>

              {/* Quick stats */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-gray-50 dark:bg-gray-900 p-4 text-center shadow-sm border border-gray-200 dark:border-gray-800">
                  <p className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">20+</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Projects</p>
                </div>
                <div className="rounded-xl bg-gray-50 dark:bg-gray-900 p-4 text-center shadow-sm border border-gray-200 dark:border-gray-800">
                  <p className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">10+</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Tech Stack</p>
                </div>
                <div className="rounded-xl bg-gray-50 dark:bg-gray-900 p-4 text-center shadow-sm border border-gray-200 dark:border-gray-800">
                  <p className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">2</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Internships</p>
                </div>
              </div>

              {/* Skill chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Next.js","React","TypeScript","Node.js","Express","MongoDB","Tailwind","Framer Motion","React Query","ShadCN UI"
                ].map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.05 * i }}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-purple-900/30 text-blue-700 dark:text-purple-300 border border-blue-200/60 dark:border-purple-800/60"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="/projects"
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all text-center"
                >
                  View Projects
                </a>
                <a
                  href="/NewResume.pdf"
                  download
                  className="px-5 py-2.5 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 font-semibold shadow-sm hover:shadow-lg transition-all text-center"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:col-span-6"
          >
            <div className="relative w-full max-w-[520px] mx-auto -right-12">
              {/* Decorative blobs */}
              <motion.div
                className="absolute -top-8 -left-8 h-40 w-40 rounded-full blur-3xl bg-blue-500/30 dark:bg-blue-700/30"
                animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-10 -right-6 h-48 w-48 rounded-full blur-3xl bg-purple-500/30 dark:bg-purple-700/30"
                animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
                transition={{ duration: 7, repeat: Infinity }}
              />

              {/* Layered, tilted cards */}
              <motion.div
                className="absolute inset-0 -rotate-3 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl shadow-xl"
                whileHover={{ rotate: -4 }}
              />
              <motion.div
                className="relative rotate-3 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-900/70 backdrop-blur-xl shadow-2xl"
                whileHover={{ rotate: 2 }}
              >
                <Image
                  src="/about.png"
                  alt="Sujal Verman"
                  width={520}
                  height={640}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3 flex-wrap justify-center"
              >
                {["Next.js","TypeScript","Node.js","MongoDB"].map((b) => (
                  <span
                    key={b}
                    className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-800 dark:text-gray-200"
                  >
                    {b}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Impact highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/50 backdrop-blur-xl p-6 shadow-lg"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <Code2 className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Shipping with quality</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Strong code reviews, meaningful tests, and maintainable abstractions.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                <Zap className="text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Performance minded</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Snappy UIs with progressive loading, memoization, and lazy boundaries.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                <Users className="text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Team-first</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Clear communication, reliable delivery, and collaborative problem solving.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.01 + index * 0.01 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <value.icon className="w-12 h-12 text-blue-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

