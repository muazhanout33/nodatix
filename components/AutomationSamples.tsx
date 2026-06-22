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
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section className="py-20 px-6 bg-[#08090d]">
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
                className="group relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] bg-[#111111] hover:border-[rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300"
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
    </section>
  );
}
