import { Menu, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <motion.a
          href="/"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-red-600 to-red-900 shadow-lg shadow-red-900/30 grid place-items-center">
            <span className="text-white font-black">AD</span>
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-wider uppercase">Auto Detail</p>
            <p className="text-xs text-white/60">Premium Care • Pro Finish</p>
          </div>
        </motion.a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {[
            { href: "#services", label: "Services" },
            { href: "#process", label: "Process" },
            { href: "#pricing", label: "Pricing" },
            { href: "#gallery", label: "Gallery" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-800 px-5 py-2 text-white font-medium shadow-lg shadow-red-900/30 hover:from-red-500 hover:to-red-700 transition-colors"
          >
            <PhoneCall size={18} /> Book Now
          </a>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/80">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
