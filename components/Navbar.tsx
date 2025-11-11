"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";

interface NavbarProps {
  activeTab: string;
}

const tabs = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "skills", label: "Skills", path: "/skills" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "experience", label: "Experience", path: "/experience" },
  { id: "education", label: "Education", path: "/education" },
  { id: "certificates", label: "Certificates", path: "/certificates" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export default function Navbar({ activeTab }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 rounded-full px-4 sm:px-6 py-3 sm:py-4 shadow-lg border border-white/20 dark:border-gray-700/50">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <Link href="/image.png" className="flex items-center gap-2 flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-xl font-bold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                <Image src="/logoSV.png" alt="Sujal Verman" width={42} height={42} className="rounded-full" />
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
              {tabs.map((tab) => {
                const isActive = pathname === tab.path;
                return (
                  <Link
                    key={tab.id}
                    href={tab.path}
                    className="relative px-3 xl:px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/50 dark:border-purple-400/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className={`relative z-10 ${isActive ? "text-blue-600 dark:text-purple-400 font-semibold" : "text-gray-700 dark:text-gray-300"}`}>
                      {tab.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors flex-shrink-0"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden mt-3 flex flex-wrap gap-2 justify-center">
            {tabs.map((tab) => {
              const isActive = pathname === tab.path;
              return (
                <Link
                  key={tab.id}
                  href={tab.path}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

