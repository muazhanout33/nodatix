"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { sendToN8n } from "@/lib/n8n";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email (e.g., name@example.com)";
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) return undefined;
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length > 0 && digitsOnly.length < 8) return "Phone must be at least 8 digits";
    if (digitsOnly.length > 15) return "Phone must be no more than 15 digits";
    return undefined;
  };

  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) return "Message is required";
    if (message.trim().length < 10) return "Message must be at least 10 characters";
    return undefined;
  };

  const validateField = (field: string, value: string): string | undefined => {
    switch (field) {
      case "name":
        return validateName(value);
      case "email":
        return validateEmail(value);
      case "phone":
        return validatePhone(value);
      case "message":
        return validateMessage(value);
      default:
        return undefined;
    }
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors({ ...errors, [field]: error });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d\s\+\-\(\)]/g, "");
    setFormData({ ...formData, phone: value });
    if (touched.phone) {
      setErrors({ ...errors, phone: validatePhone(value) });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (touched[name]) {
      setErrors({ ...errors, [name]: validateField(name, value) });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, message: true });
    return !Object.values(newErrors).some((error) => error !== undefined);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setError("Please fix the errors above before submitting");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await sendToN8n({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        source: "website",
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTouched({});
      setErrors({});
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getInputClassName = (fieldName: string, baseClass: string): string => {
    const hasError = touched[fieldName] && errors[fieldName as keyof typeof errors];
    return hasError
      ? `${baseClass} border-red-500 focus:border-red-500 focus:ring-red-500/20`
      : baseClass;
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
              Have a question or want to explore what automation or marketing could do for your business?
              Drop us a message and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "scalaryx@gmail.com",
                  href: "mailto:scalaryx@gmail.com",
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
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", message: "" }); }}
                  className="mt-2 text-[#0084FF] text-sm hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("name")}
                    className={getInputClassName("name", "w-full px-4 py-3 rounded-xl bg-[#000000] border border-[rgba(0,132,255,0.2)] text-white placeholder-gray-600 focus:outline-none focus:border-[#0084FF]/50 focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200 text-sm")}
                  />
                  {touched.name && errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="scalaryx@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    className={getInputClassName("email", "w-full px-4 py-3 rounded-xl bg-[#000000] border border-[rgba(0,132,255,0.2)] text-white placeholder-gray-600 focus:outline-none focus:border-[#0084FF]/50 focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200 text-sm")}
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number <span className="text-gray-500 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 234 567 8900"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onBlur={() => handleBlur("phone")}
                    className={getInputClassName("phone", "w-full px-4 py-3 rounded-xl bg-[#000000] border border-[rgba(0,132,255,0.2)] text-white placeholder-gray-600 focus:outline-none focus:border-[#0084FF]/50 focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200 text-sm")}
                  />
                  {touched.phone && errors.phone && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your business and what you're looking to automate..."
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur("message")}
                    className={getInputClassName("message", "w-full px-4 py-3 rounded-xl bg-[#000000] border border-[rgba(0,132,255,0.2)] text-white placeholder-gray-600 focus:outline-none focus:border-[#0084FF]/50 focus:ring-1 focus:ring-[#0084FF]/20 transition-all duration-200 text-sm resize-none")}
                  />
                  {touched.message && errors.message && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                  )}
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
                  <p className="text-center text-sm text-red-500">{error}</p>
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