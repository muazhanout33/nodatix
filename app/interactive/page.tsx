"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import InteractiveModal from "@/components/interactive/InteractiveModal";
import CrmErpProject from "@/components/interactive/CrmErpProject";

const PROJECTS = [
  {
    id: "crm-erp",
    title: "Scalary X — CRM + ERP Systems",
    description:
      "Custom CRM + ERP systems built around your business. Leads, deals, inventory, orders, invoices, and payments — one connected workflow.",
    icon: "📊",
    tags: ["CRM", "ERP", "Automation"],
  },
];

function InteractiveContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const projectParam = searchParams.get("project");

  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  useEffect(() => {
    if (projectParam) {
      const found = PROJECTS.find((p) => p.id === projectParam);
      if (found) {
        setActiveProject(found.id);
        setModalOpen(true);
      }
    }
  }, [projectParam]);

  const openProject = useCallback(
    (id: string) => {
      setActiveProject(id);
      setModalOpen(true);
      router.push(`/interactive?project=${id}`, { scroll: false });
    },
    [router]
  );

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setActiveProject(null);
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
              Click on any project card to open a live interactive experience in
              a modal overlay.
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
                onClick={() => openProject(project.id)}
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

      {/* Modal */}
      <InteractiveModal isOpen={modalOpen} onClose={closeModal}>
        {activeProject === "crm-erp" && <CrmErpProject />}
      </InteractiveModal>
    </>
  );
}

export default function InteractivePage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white">
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-gray-400">Loading...</div>
        </div>
      }>
        <InteractiveContent />
      </Suspense>
    </main>
  );
}
