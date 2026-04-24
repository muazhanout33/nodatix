"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { sendToN8n } from "@/lib/n8n";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await sendToN8n({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        source: "website",
      });
      setSubmitted(true);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[#0084FF] opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs text-[#0084FF] font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-[#0084FF]/20 bg-[#0084FF]/5">
              Contact
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
              Let&apos;s Start{" "}
              <span className="gradient-text">Building</span>{" "}
              Together
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Have a question or want to explore what automation could do for your business?
              Drop us a message and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "hello@scalaryx.com",
                  href: "mailto:hello@scalaryx.com",
                },
                {
                  icon: "💬",
                  label: "Response Time",
                  value: "Within 24 hours",
                  href: null,
                },
                {
                  icon: "🌍",
                  label: "Available",
                  value: "Worldwide · Remote",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0084FF]/10 flex items-center justify-center text-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white hover:text-[#0084FF] transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="gradient-border rounded-2xl bg-gradient-to-br from-[#FF6B1A]/20 via-[#0a0a0a] to-[#0a0a0a] p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 gap-4 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#0084FF]/10 flex items-center justify-center text-3xl">
                  ✅
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }); }}
                  className="mt-2 text-[#0084FF] text-sm hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#000000] border border-[rgba(0,132,255,0.2)] text-white placeholder-gray-600 focus:outline-none focus:border-[#0084FF]/50 focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#000000] border border-[rgba(0,132,255,0.2)] text-white placeholder-gray-600 focus:outline-none focus:border-[#0084FF]/50 focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your business and what you're looking to automate..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#000000] border border-[rgba(0,132,255,0.2)] text-white placeholder-gray-600 focus:outline-none focus:border-[#0084FF]/50 focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200 text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 rounded-xl bg-[#0084FF] text-black font-bold text-sm hover:bg-[#0066cc] transition-all duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ boxShadow: "0 0 25px rgba(0,132,255,0.2)" }}
                >
                  {isLoading ? "Sending..." : "Send Message →"}
                </button>
                {error && (
                  <p className="text-center text-xs text-red-500">{error}</p>
                )}
                <p className="text-center text-xs text-gray-600">
                  We&apos;ll respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
