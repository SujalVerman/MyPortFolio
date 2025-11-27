"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Award, Sparkles } from "lucide-react";

interface AchievementProps {
  id: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  images: string[];
  year: string;
}

const achievements: Achievement[] = [
  {
    id: "1",
    year: "Jul 2025 - Aug 2025",
    title: "KIbotix Achievement",
    description: "Successfully developed and deployed FincoveBot, an advanced AI Voice Assistant designed to revolutionize financial task management. This innovative project showcases expertise in Python, Flask, and cutting-edge AI integration. The application leverages natural language processing to understand user queries and provide intelligent financial assistance, making complex financial operations more accessible. Through this project, I demonstrated proficiency in building scalable backend systems, implementing secure API endpoints, and creating seamless user experiences. The deployment process involved containerization, cloud infrastructure management, and continuous integration practices. This achievement represents a significant milestone in combining artificial intelligence with practical financial solutions, highlighting my ability to transform innovative ideas into production-ready applications that deliver real value to users.",
    images: ["/ibotix.jpeg"],
  },
  {
    id: "2",
    year: "April 2025 - Oct 2025",
    title: "Google Developer Student Clubs (GDSC)",
    description: "As an active member and dedicated contributor to Google Developer Student Clubs, I played a pivotal role in organizing and participating in numerous tech events, workshops, and collaborative projects. Throughout my tenure, I contributed to building innovative solutions that addressed real-world challenges while fostering a vibrant community of passionate developers. My involvement included leading technical workshops on modern web development, mentoring fellow students in their coding journeys, and collaborating on open-source projects that made a meaningful impact. I actively participated in hackathons, solution challenges, and community-building initiatives that brought together developers from diverse backgrounds. This experience not only enhanced my technical skills but also developed my leadership abilities, public speaking confidence, and collaborative problem-solving capabilities. The GDSC community provided an invaluable platform for networking, learning cutting-edge technologies, and contributing to the broader developer ecosystem.",
    images: ["/gdsc1.jpeg", "/gdsc2.jpeg", "/gdsc3.jpeg", "/gdsc4.jpeg"],
  },
  {
    id: "3",
    year: "Dec 2023 - Jan 2024",
    title: "Aadhaar Project Expo - 1st Place Winner",
    description: "Secured the prestigious 1st place position in the Aadhaar Project Expo organized by Sagar Institute of Science and Technology by developing a comprehensive web application with seamless API integration. This remarkable achievement demonstrates exceptional expertise in full-stack development, RESTful API design, and creating innovative solutions that address real-world problems. The project involved building a robust web application that integrated with Aadhaar's authentication system, implementing secure data handling protocols, and ensuring compliance with privacy regulations. Through meticulous planning, innovative problem-solving, and technical excellence, I delivered a solution that impressed judges and showcased the potential of modern web technologies in solving complex identity verification challenges. This victory not only validated my technical skills but also highlighted my ability to work under pressure, meet strict deadlines, and deliver production-quality applications. The recognition from industry experts and academic faculty served as a significant milestone in my development journey, inspiring continued innovation and excellence in software engineering.",
    images: ["/adhhaar1.jpeg", "/adhhar2.jpeg"],
  },
];

export default function Achievement({ id }: AchievementProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-purple-950/20 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="inline-block mb-4"
          >
            <Award className="w-12 h-12 text-blue-600 dark:text-purple-400 mx-auto" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Notable accomplishments and milestones in my journey
          </p>
        </motion.div>

        <div className="space-y-12 lg:space-y-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Timeline connector for visual flow */}
              {index < achievements.length - 1 && (
                <div className="hidden lg:block absolute left-8 top-full w-0.5 h-12 bg-gradient-to-b from-blue-400 to-purple-400 opacity-30"></div>
              )}

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-200/50 dark:border-gray-700/50 relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 rounded-3xl"></div>
                
                {/* Achievement badge for 1st place */}
                {achievement.title.includes("1st Place") && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: "spring" }}
                    className="absolute top-6 right-6 z-10"
                  >
                    <div className="relative">
                      <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
                      <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl"></div>
                    </div>
                  </motion.div>
                )}

                <div className="relative z-10">
                  {/* Year Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                    className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200 dark:border-purple-700"
                  >
                    <Calendar className="w-4 h-4 text-blue-600 dark:text-purple-400" />
                    <span className="text-sm font-semibold text-blue-700 dark:text-purple-300">
                      {achievement.year}
                    </span>
                  </motion.div>

                  {/* Achievement Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-purple-400 dark:group-hover:to-pink-400 bg-clip-text text-transparent transition-all duration-300"
                  >
                    {achievement.title}
                  </motion.h3>

                  {/* Achievement Images */}
                  <div className={`mb-6 grid gap-4 ${
                    achievement.images.length === 1 
                      ? "grid-cols-1" 
                      : achievement.images.length === 2 
                      ? "grid-cols-1 md:grid-cols-2" 
                      : achievement.images.length === 3
                      ? "grid-cols-1 md:grid-cols-3"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                  }`}>
                    {achievement.images.map((image, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + imgIndex * 0.1 }}
                        className="relative rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 aspect-video shadow-lg group/image"
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full"
                        >
                          <img
                            src={image}
                            alt={`${achievement.title} - Image ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='20' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EAchievement%3C/text%3E%3C/svg%3E";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 ring-2 ring-blue-500/0 group-hover/image:ring-blue-500/50 transition-all duration-300 rounded-xl"></div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Achievement Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="space-y-4"
                  >
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

