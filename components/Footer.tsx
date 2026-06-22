"use client";

const footerLinks = {
  Services: [
    { label: "AI Automation Systems", href: "#services" },
    { label: "Lead Management", href: "#services" },
    { label: "Content Automation", href: "#services" },
    { label: "Custom AI Agents", href: "#services" },
  ],
  servicesmarketing: [
     { label: "Digital Marketing Strategy", href: "#services" },
    { label: "Paid Ads & Lead Generation", href: "#services" },
     { label: "Conversion Optimization Funnels", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Benefits", href: "#benefits" },
    { label: "Book a Call", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,132,255,0.2)] pt-16 pb-8 px-6 bg-[#000000]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
           <a href="#" className="flex items-center gap-2 mb-4"> 
  
  <img 
    src="/Gemini_Generated_Image_vtug5ovtug5ovtug-removebg-preview (1).png" 
    alt="ScalaryX Logo"
    className="h-10 w-auto object-contain"
    style={{ height: "60px", width: "auto", objectFit: "contain" }}
  />

  <span className="text-white font-bold text-xl tracking-tight">
    Scalary<span className="text-[#0084FF]">X</span>
  </span>

</a>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xs">
              AI Automation & Marketing Agency helping businesses save time, reduce errors,
               and scale faster with intelligent systems and high-performance marketing.
            </p>
            <div className="mt-5 flex gap-3">
              {["𝕏", "in", "📧"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-[rgba(0,132,255,0.2)] flex items-center justify-center text-gray-400 hover:border-[#00cfff]/30 hover:text-[#0084FF] transition-all duration-200 text-sm"
                >
                  {icon}
                </a>
              ))}

              {/* Instagram */}
              <a
                href="https://www.instagram.com/scalary_x?igsh=MWJ4eDJ6bWNsZWdhdw=="
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-9 h-9 rounded-xl bg-[#1a1a2e] border border-[rgba(255,255,255,0.08)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-transparent hover:shadow-[0_0_20px_rgba(131,58,180,0.4)]"
              >
                <svg
                  className="w-[18px] h-[18px] transition-all duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#feda75" />
                      <stop offset="25%" stopColor="#fa7e1e" />
                      <stop offset="50%" stopColor="#d62976" />
                      <stop offset="75%" stopColor="#962fbf" />
                      <stop offset="100%" stopColor="#4f5bd5" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="url(#ig-gradient)"
                    strokeWidth="2"
                    className="transition-all duration-300 group-hover:stroke-[2.5]"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="url(#ig-gradient)"
                    strokeWidth="2"
                    className="transition-all duration-300 group-hover:r-[5.5]"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.5"
                    fill="url(#ig-gradient)"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1Lf3Sf82Qh/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-9 h-9 rounded-xl bg-[#1a1a2e] border border-[rgba(255,255,255,0.08)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-transparent hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]"
              >
                <svg
                  className="w-[18px] h-[18px] fill-[#94a3b8] transition-all duration-300 group-hover:fill-[#1877f2]"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
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
                      className="text-[#94a3b8] text-sm hover:text-[#0084FF] transition-colors duration-200"
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
        <div className="border-t border-[rgba(0,132,255,0.2)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#94a3b8] text-xs">
            © {new Date().getFullYear()} ScalaryX. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF] animate-pulse" />
            AI Systems Running 24/7
          </div>
          <div className="flex gap-5">
            <a
              href="/privacy-policy"
              className="text-[#94a3b8] text-xs hover:text-gray-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-[#94a3b8] text-xs hover:text-gray-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
