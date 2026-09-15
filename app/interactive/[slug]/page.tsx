"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getProjectBySlug } from "../data/projects";
import ProjectViewer from "../components/ProjectViewer";

const ICONS: Record<string, React.JSX.Element> = {
  "crm-erp": (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
    </svg>
  ),
  "ai-clinic-automation": (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  "ai-research-automation": (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5m-4.25-11.396c.251.023.501.05.75.082M12 21a8.966 8.966 0 01-5.982-2.275M12 21a8.966 8.966 0 005.982-2.275M15.75 3.186a24.286 24.286 0 012.25.082m-10 0c-.251-.023-.501-.05-.75-.082m10 0c.251.023.501.05.75.082" />
    </svg>
  ),
};

export default function ProjectDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);
  const [viewerOpen, setViewerOpen] = useState(false);

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-[var(--text-secondary)] mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/interactive"
            className="text-[var(--accent)] hover:underline text-sm font-medium"
          >
            &larr; Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="pt-28 pb-4 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/interactive"
            className="text-[var(--text-muted)] hover:text-[var(--accent)] text-sm font-medium transition-colors"
          >
            &larr; Back to Projects
          </Link>
        </div>
      </div>

      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-[var(--accent)]">
                {ICONS[project.slug] || (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                  </svg>
                )}
              </div>
              <span className="font-mono text-xs tracking-[0.16em] uppercase text-[var(--accent)] font-semibold px-3 py-1 rounded-full border border-[var(--border-accent)] bg-[var(--accent)]/5">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-3xl leading-relaxed">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[var(--text-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <button
              onClick={() => setViewerOpen(true)}
              className="btn-primary px-8 py-4 text-lg"
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

      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--surface)] border border-white/[0.06] rounded-2xl p-8"
          >
            <span className="font-mono text-xs tracking-[0.16em] uppercase text-[var(--danger)] font-semibold">
              The Problem
            </span>
            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed text-sm">
              {project.problem}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[var(--surface)] border border-white/[0.06] rounded-2xl p-8"
          >
            <span className="font-mono text-xs tracking-[0.16em] uppercase text-[var(--accent)] font-semibold">
              The Solution
            </span>
            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed text-sm">
              {project.solution}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-8">
              Key <span className="text-[var(--accent)]">Features</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-[var(--surface)] border border-white/[0.06] rounded-xl p-5 hover:border-[var(--border-accent)] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--accent)] mt-0.5 text-lg">&#10003;</span>
                    <span className="text-[var(--text-secondary)] text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-8">
              Automation <span className="text-[var(--accent)]">Workflow</span>
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              {project.workflowSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-sm font-medium text-[var(--accent)]">
                    {step}
                  </div>
                  {i < project.workflowSteps.length - 1 && (
                    <span className="text-[var(--text-muted)] text-lg">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8">
              Technologies <span className="text-[var(--accent)]">&amp; Tools</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-lg bg-[var(--surface)] border border-white/[0.06] text-sm font-medium text-[var(--text-secondary)] hover:border-[var(--border-accent)] hover:text-[var(--accent)] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8">
              Key <span className="text-[var(--accent)]">Capabilities</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-[var(--text-secondary)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                  {cap}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[var(--surface)] border border-[var(--border-accent)] rounded-2xl p-10 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              Ready to see it in action?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">
              Open the interactive demo and explore the complete project.
            </p>
            <button
              onClick={() => setViewerOpen(true)}
              className="btn-primary px-8 py-4 text-lg"
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
