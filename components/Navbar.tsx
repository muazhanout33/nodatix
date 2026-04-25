"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookCallButton } from "./BookCallButton";

const navLinks = [
  { href: "#problems", label: "Problems" },
  { href: "#services", label: "Services" },
  { href: "#benefits", label: "Benefits" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
<motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#000000]/90 backdrop-blur-xl border-b border-[rgba(0,132,255,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">  
          <img src="/logo.jpg.jpeg" alt="ScalaryX" className="h-10 sm:h-12 w-auto" />
          <span className="text-xl sm:text-3xl font-bold">
            <span className="text-white">Scalary</span><span className="text-[#0084FF]">X</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <BookCallButton className="px-5 py-2.5 rounded-lg bg-[#0084FF] text-black text-sm font-semibold hover:bg-[#0066cc] transition-all duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer" />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#000000] border-t border-[rgba(0,132,255,0.2)] overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-300 hover:text-[#0084FF] transition-colors py-2 text-lg"
                >
                  {link.label}
                </a>
              ))}
              <div 
                onClick={() => setMenuOpen(false)}
                className="mt-2"
              >
                <BookCallButton 
                  className="px-5 py-2.5 rounded-lg bg-[#0084FF] text-black text-sm font-semibold text-center cursor-pointer" 
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}