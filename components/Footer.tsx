"use client";

const footerLinks = {
  Services: [
    { label: "AI Automation Systems", href: "#services" },
    { label: "Lead Management", href: "#services" },
    { label: "Content Automation", href: "#services" },
    { label: "Custom AI Agents", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Benefits", href: "#benefits" },
    { label: "Book a Call", href: "#booking" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,207,255,0.2)] pt-16 pb-8 px-6 bg-[#000000]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#00cfff] flex items-center justify-center">
                <span className="text-black font-black text-sm">N</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Scala<span className="text-[#00cfff]">ryX</span>
              </span>
            </a>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xs">
              AI Automation Agency helping businesses save time, reduce errors,
              and scale using intelligent systems.
            </p>
            <div className="mt-5 flex gap-3">
              {["𝕏", "in", "📧"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-[rgba(0,207,255,0.2)] flex items-center justify-center text-gray-400 hover:border-[#00cfff]/30 hover:text-[#00cfff] transition-all duration-200 text-sm"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <div className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
                {group}
              </div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#94a3b8] text-sm hover:text-[#00cfff] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(0,207,255,0.2)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#94a3b8] text-xs">
            © {new Date().getFullYear()} ScalaryX. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00cfff] animate-pulse" />
            AI Systems Running 24/7
          </div>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#94a3b8] text-xs hover:text-gray-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
