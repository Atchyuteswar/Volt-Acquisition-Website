"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
            <img src="/assets/volt_mascot.png" alt="Volt Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold tracking-widest text-sm text-white">VOLT</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Product","Technology","Market","Acquisition"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs text-white/50 hover:text-white tracking-wider transition-colors duration-200">
              {item}
            </a>
          ))}
        </div>
        <a
          href="mailto:yt.atchyut@gmail.com"
          className="text-xs bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-full tracking-wider transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
        >
          Contact Founder
        </a>
      </div>
    </motion.nav>
  );
}
