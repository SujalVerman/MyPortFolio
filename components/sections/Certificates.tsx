"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Download, X, Award, Calendar, Building2 } from "lucide-react";

interface CertificateProps {
  id: string;
}

interface Certificate {
  id: string;
  name: string;
  organization: string;
  issueDate: string;
  image: string;
  credentialLink?: string;
  badge?: "Verified" | "Bootcamp" | "Cloud";
}

const certificates: Certificate[] = [
  {
    id: "1",
    name: "Python Essentials 2",
    organization: "Cisco Networking Academy",
    issueDate: "Nov 2025",
    image: "/py-2.png", 
    credentialLink: "",
    badge: "Verified",
  },
  {
    id: "2",
    name: "Python Essentials 1",
    organization: "Cisco Networking Academy",
    issueDate: "Oct 2025",
    image: "/py-1.png",
    credentialLink: "",
    badge: "Verified",
  },
  {
    id: "3",
    name: "JavaScript Bootcamp",
    organization: "LetsUpgrade",
    issueDate: "Aug 2024",
    image: "/Js_Lu.png",
    credentialLink: "",
    badge: "Bootcamp",
  },
  {
    id: "4",
    name: "Postman API Fundamentals Student Expert",
    organization: "Postman",
    issueDate: "Sep 2024",
    image: "/postman_certificate2.jpg",
    credentialLink: "",
    badge: "Verified",
  },
  {
    id: "5",
    name: "AI Builders Lab Bootcamp",
    organization: "Google for Developers",
    issueDate: "2024",
    image: "/Ai_builder.png",
    credentialLink: "",
    badge: "Bootcamp",
  },
  {
    id: "6",
    name: "Learning Full Stack React",
    organization: "Infosys Springboard",
    issueDate: "May 2025",
    image: "/Infosis_react.png",
    credentialLink: "",
    badge: "Verified",
  },
  {
    id: "7",
    name: "Solution Challenge",
    organization: "Infosys Springboard",
    issueDate: "Sep 2025",
    image: "/solution.png",
    credentialLink: "",
    badge: "Bootcamp",
  },
];

const badgeColors = {
  Verified: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  Bootcamp: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  Cloud: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
};

export default function Certificates({ id }: CertificateProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a]"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certificates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements in technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="h-full bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 backdrop-blur-sm overflow-hidden">
                {/* Badge */}
                {certificate.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeColors[certificate.badge]}`}
                    >
                      {certificate.badge}
                    </span>
                  </div>
                )}

                {/* Certificate Image */}
                <div className="relative mb-4 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 aspect-video">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <img
                      src={certificate.image}
                      alt={certificate.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='20' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3ECertificate%3C/text%3E%3C/svg%3E";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>

                {/* Certificate Info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 line-clamp-2">
                      {certificate.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <Building2 size={16} />
                      <span className="line-clamp-1">{certificate.organization}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                      <Calendar size={16} />
                      <span>{certificate.issueDate}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCertificate(certificate)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Award size={16} />
                      View Details
                    </motion.button>
                    {certificate.credentialLink && (
                      <motion.a
                        href={certificate.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative">
                {/* Close Button */}
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <X size={24} className="text-gray-800 dark:text-gray-200" />
                </motion.button>

                {/* Certificate Image */}
                <div className="w-full aspect-video bg-gray-100 dark:bg-gray-900">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect fill='%23e5e7eb' width='800' height='600'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='40' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3ECertificate%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>

                {/* Certificate Details */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {selectedCertificate.name}
                      </h3>
                      <div className="flex items-center gap-2 text-lg text-gray-600 dark:text-gray-400 mb-2">
                        <Building2 size={20} />
                        <span>{selectedCertificate.organization}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500">
                        <Calendar size={18} />
                        <span>Issued {selectedCertificate.issueDate}</span>
                      </div>
                    </div>
                    {selectedCertificate.badge && (
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${badgeColors[selectedCertificate.badge]}`}
                      >
                        {selectedCertificate.badge}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {selectedCertificate.credentialLink && (
                      <motion.a
                        href={selectedCertificate.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={20} />
                        View Credential
                      </motion.a>
                    )}
                    <motion.a
                      href={selectedCertificate.image}
                      download
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      <Download size={20} />
                      Download
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

