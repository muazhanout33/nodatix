"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getProjectBySlug } from "../data/projects";
import ProjectViewer from "../components/ProjectViewer";

export default function ProjectDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);
  const [viewerOpen, setViewerOpen] = useState(false);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#000000] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/interactive"
            className="text-[#0099FF] hover:underline text-sm font-medium"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#000000] text-white">
      {/* Back link */}
      <div className="pt-28 pb-4 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/interactive"
            className="text-gray-500 hover:text-[#0099FF] text-sm font-medium transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-5xl">{project.icon}</span>
              <span className="font-mono text-xs tracking-[0.16em] uppercase text-[#0099FF] font-semibold px-3 py-1 rounded-full border border-[rgba(0,153,255,0.2)] bg-[rgba(0,153,255,0.05)]">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-[rgba(0,153,255,0.06)] border border-[rgba(0,153,255,0.1)] text-[#0099FF]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Demo CTA */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <button
              onClick={() => setViewerOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#0099FF] text-black font-bold text-lg hover:bg-[#33B3FF] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(0,153,255,0.3)] cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              View Interactive Project
            </button>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#080E1A] border border-[rgba(239,68,68,0.15)] rounded-2xl p-8"
          >
            <span className="font-mono text-xs tracking-[0.16em] uppercase text-red-400 font-semibold">
              The Problem
            </span>
            <p className="mt-4 text-gray-300 leading-relaxed text-sm">
              {project.problem}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#080E1A] border border-[rgba(0,153,255,0.15)] rounded-2xl p-8"
          >
            <span className="font-mono text-xs tracking-[0.16em] uppercase text-[#0099FF] font-semibold">
              The Solution
            </span>
            <p className="mt-4 text-gray-300 leading-relaxed text-sm">
              {project.solution}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-8">
              Key <span className="text-[#0099FF]">Features</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-[#080E1A] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 hover:border-[rgba(0,153,255,0.2)] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[#0099FF] mt-0.5 text-lg">✓</span>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-8">
              Automation{" "}
              <span className="text-[#0099FF]">Workflow</span>
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              {project.workflowSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="px-4 py-2 rounded-lg bg-[rgba(0,153,255,0.08)] border border-[rgba(0,153,255,0.15)] text-sm font-medium text-[#0099FF]">
                    {step}
                  </div>
                  {i < project.workflowSteps.length - 1 && (
                    <span className="text-gray-600 text-lg">→</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8">
              Technologies{" "}
              <span className="text-[#0099FF]">& Tools</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-lg bg-[#080E1A] border border-[rgba(255,255,255,0.06)] text-sm font-medium text-gray-300 hover:border-[rgba(0,153,255,0.2)] hover:text-[#0099FF] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8">
              Key{" "}
              <span className="text-[#0099FF]">Capabilities</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0099FF] flex-shrink-0" />
                  {cap}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-[#080E1A] to-[#0D1525] border border-[rgba(0,153,255,0.15)] rounded-2xl p-10 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              Ready to see it in action?
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Open the interactive demo and explore the complete project.
            </p>
            <button
              onClick={() => setViewerOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#0099FF] text-black font-bold text-lg hover:bg-[#33B3FF] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(0,153,255,0.3)] cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Open Interactive Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Viewer Modal */}
      <AnimatePresence>
        {viewerOpen && (
          <ProjectViewer
            title={project.title}
            src={project.interactiveUrl}
            onClose={() => setViewerOpen(false)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
