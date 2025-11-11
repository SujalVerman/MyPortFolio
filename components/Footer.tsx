"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-8 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2"
        >
          © 2025 Built with{" "}
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-red-500 inline-block"
          >
            <Heart size={18} fill="currentColor" />
          </motion.span>{" "}
          By Sujal Verman 
        </motion.p>
      </div>
    </footer>
  );
}

