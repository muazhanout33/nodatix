"use client";

import { useState, useEffect, useCallback, Suspense, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
  {
    id: "crm-erp",
    title: "Scalary X — CRM + ERP Systems",
    description:
      "Custom CRM + ERP systems built around your business. Leads, deals, inventory, orders, invoices, and payments — one connected workflow.",
    icon: "📊",
    tags: ["CRM", "ERP", "Automation"],
    src: "/interactive/projects/crm-erp/index.html",
  },
  {
    id: "ai-clinic-automation",
    title: "AI-Powered Clinic Automation System",
    description:
      "AI-driven clinic automation: patient intake, appointment booking, CRM, follow-up, and multi-channel communication — fully automated.",
    icon: "🏥",
    tags: ["AI", "Clinic", "Healthcare"],
    src: "/interactive/projects/ai-clinic-automation/index.html",
  },
  {
    id: "ai-research-automation",
    title: "AI Research Automation System",
    description:
      "Automate research workflows: video processing, PDF analysis, web research, and organized document generation — all in one AI pipeline.",
    icon: "🔬",
    tags: ["AI", "Research", "Automation"],
    src: "/interactive/projects/ai-research-automation/index.html",
  },
];

function ProjectViewer({
  project,
  onClose,
}: {
  project: (typeof PROJECTS)[number];
  onClose: () => void;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(12px)",
        padding: "16px",
      }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1400px",
          height: "calc(100vh - 32px)",
          maxHeight: "calc(100dvh - 32px)",
          borderRadius: "16px",
          overflow: "hidden",
          background: "#000",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 16px",
            background: "rgba(10,15,26,0.95)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#e0e0e0",
              letterSpacing: "0.02em",
            }}
          >
            {project.title}
          </span>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              color: "#aaa",
              fontSize: 18,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.15s, color 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              e.currentTarget.style.color = "#aaa";
            }}
          >
            ✕
          </button>
        </div>

        {/* iframe fills remaining space */}
        <iframe
          ref={iframeRef}
          src={project.src}
          title={project.title}
          style={{
            flex: 1,
            width: "100%",
            border: "none",
            background: "#fff",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

function InteractiveContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const projectParam = searchParams.get("project");

  const [viewerProject, setViewerProject] = useState<
    (typeof PROJECTS)[number] | null
  >(null);

  useEffect(() => {
    if (projectParam) {
      const found = PROJECTS.find((p) => p.id === projectParam);
      if (found) setViewerProject(found);
    }
  }, [projectParam]);

  const openProject = useCallback(
    (project: (typeof PROJECTS)[number]) => {
      setViewerProject(project);
      router.push(`/interactive?project=${project.id}`, { scroll: false });
    },
    [router]
  );

  const closeViewer = useCallback(() => {
    setViewerProject(null);
    router.push("/interactive", { scroll: false });
  }, [router]);

  return (
    <>
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
              Click on any project card to open a live interactive experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.button
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => openProject(project)}
                className="text-left group cursor-pointer"
              >
                <div className="relative bg-[#080E1A] border border-[rgba(0,153,255,0.1)] rounded-2xl p-6 transition-all duration-300 hover:border-[rgba(0,153,255,0.3)] hover:shadow-[0_0_40px_rgba(0,153,255,0.08)] hover:-translate-y-1">
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#0099FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-[rgba(0,153,255,0.06)] border border-[rgba(0,153,255,0.1)] text-[#0099FF]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[rgba(0,153,255,0.03)] to-transparent" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Viewer Modal */}
      <AnimatePresence>
        {viewerProject && (
          <ProjectViewer project={viewerProject} onClose={closeViewer} />
        )}
      </AnimatePresence>
    </>
  );
}

export default function InteractivePage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-gray-400">Loading...</div>
          </div>
        }
      >
        <InteractiveContent />
      </Suspense>
    </main>
  );
}
