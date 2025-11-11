"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";

interface ContactProps {
  id: string;
}

const socialLinks = [
  { icon: Github, href: "https://github.com/SujalVerman", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sujal-verman-b91785288", label: "LinkedIn" },
  { icon: Mail, href: "mailto:sujaldev.tech@gmail.com", label: "Email" },
];

export default function Contact({ id }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Floating icons background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10 dark:opacity-5"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            animate={{
              y: [null, Math.random() * dimensions.height],
              x: [null, Math.random() * dimensions.width],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {["💻", "🚀", "⚡", "🎨", "🔧"][i % 5]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 sm:p-8 shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 text-gray-800 dark:text-gray-200 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 text-gray-800 dark:text-gray-200 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 text-gray-800 dark:text-gray-200 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 sm:p-8 shadow-lg h-full flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  Connect with me
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
                  Feel free to reach out through any of these platforms. I'm always open to discussing new projects and opportunities.
                </p>
                <div className="space-y-4 flex-1 flex flex-col justify-center">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all group w-full"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-shadow flex-shrink-0"
                      >
                        <social.icon className="text-white" size={24} />
                      </motion.div>
                      <div className="flex-1">
                        <span className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors block">
                          {social.label}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          {social.href.replace("https://", "").replace("mailto:", "")}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

