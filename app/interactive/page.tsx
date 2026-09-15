"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "./data/projects";

export default function InteractivePage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs tracking-[0.16em] uppercase text-[#0099FF] font-semibold">
              Interactive Projects
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-4">
              Explore Our{" "}
              <span className="text-[#0099FF]">Interactive Demos</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Click on any project to view its case study and open the live
              interactive experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/interactive/${project.slug}`}
                  className="block text-left group"
                >
                  <div className="relative bg-[#080E1A] border border-[rgba(0,153,255,0.1)] rounded-2xl p-6 transition-all duration-300 hover:border-[rgba(0,153,255,0.3)] hover:shadow-[0_0_40px_rgba(0,153,255,0.08)] hover:-translate-y-1 h-full">
                    <div className="text-4xl mb-4">{project.icon}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#0099FF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-3 py-1 rounded-full bg-[rgba(0,153,255,0.06)] border border-[rgba(0,153,255,0.1)] text-[#0099FF]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-[#0099FF] group-hover:gap-3 transition-all">
                      View Project
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[rgba(0,153,255,0.03)] to-transparent" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
