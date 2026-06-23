"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allProjects = [
  { src: "/project1.png", alt: "Workflow 1" },
  { src: "/project2.png", alt: "Workflow 2" },
  { src: "/project3.png", alt: "Workflow 3" },
  { src: "/project4.png", alt: "Workflow 4" },
  { src: "/project5.png", alt: "Workflow 5" },
];

export default function AutomationSamples() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 40% 35% at 50% 40%, rgba(47,107,255,0.05) 0%, transparent 55%),
            radial-gradient(ellipse 35% 30% at 60% 60%, rgba(61,125,255,0.03) 0%, transparent 50%),
            linear-gradient(180deg, rgba(6,6,8,0.3) 0%, transparent 30%, transparent 70%, rgba(6,6,8,0.3) 100%)
          `,
        }}
      />
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#a855f7] to-[#7c3aed] bg-clip-text text-transparent">
             Automation 
            </span>{" "}
            Examples
          </h2>
          <p className="text-[#94a3b8] text-base max-w-xl mx-auto">
            How we transform manual processes into automated workflows
            
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden border border-[#1E3A5F] bg-[#0F1B2D] shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:border-[#2F6BFF]/40 hover:shadow-[0_0_30px_rgba(47,107,255,0.12)] hover:scale-[1.03] transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(project.src)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-3 rounded-full border border-[rgba(255,255,255,0.1)] bg-[#111111] text-white text-sm font-medium hover:bg-[#1a1a1a] hover:border-[rgba(255,255,255,0.15)] transition-all duration-300"
          >
            {showAll ? (
              <>
                Show Less <span className="ml-1">∧</span>
              </>
            ) : (
              <>
                View 2 More Workflows <span className="ml-1">∨</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src={selectedImage}
              alt="Enlarged workflow preview"
              className="relative z-10 max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
