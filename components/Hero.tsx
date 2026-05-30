"use client";
import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-pattern" id="product">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 lg:pt-32 pb-16 lg:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 mb-8 shadow-[0_0_20px_rgba(59,130,246,0.15)] relative overflow-hidden group cursor-default"
            >
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                <span className="text-blue-300 font-medium text-xs tracking-[0.2em] uppercase">Available for Acquisition</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,12vw,9rem)] font-black tracking-[-0.04em] leading-none mb-6"
            >
              <span className="text-gradient">VOLT</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-xl text-white/60 font-light tracking-wide mb-4"
            >
              AI-Powered Health Intelligence Platform
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-base text-white/40 leading-relaxed max-w-lg mb-10"
            >
              An AI-native health and nutrition platform featuring autonomous coaching, 
              intelligent engagement systems, and scalable cloud infrastructure — 
              ready for acquisition, licensing, or strategic partnership.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <a
                href="#"
                className="group w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-full text-sm font-medium tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Acquisition Deck
              </a>
              <a
                href="#aira"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/20 text-white/70 hover:text-white rounded-full text-sm font-medium tracking-wide transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="currentColor"/>
                </svg>
                Meet Aira AI
              </a>
              <a
                href="mailto:yt.atchyut@gmail.com"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/20 text-white/70 hover:text-white rounded-full text-sm font-medium tracking-wide transition-all duration-200"
              >
                Contact Founder
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex flex-wrap gap-6 sm:gap-8 mt-12 sm:mt-14 pt-8 sm:pt-10 border-t border-white/6"
            >
              {[
                { value: "$650B+", label: "Total Market" },
                { value: "AI-Native", label: "Architecture" },
                { value: "100%", label: "Production Ready" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-white/40 tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full scale-75 translate-y-8" />
              <div className="relative float w-56 sm:w-64 md:w-72">
                <PhoneMockup variant="dashboard" imageSrc="/assets/Home%20Screen.jpeg" />
              </div>
              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="hidden sm:block absolute -left-16 top-16 bg-[#0e0e0e] border border-white/8 rounded-xl px-4 py-3 backdrop-blur-sm"
              >
                <div className="text-xs text-white/40 mb-1">Protein Today</div>
                <div className="text-white font-semibold">142g <span className="text-blue-400 text-xs">↑ 12%</span></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="hidden sm:block absolute -right-12 bottom-32 bg-[#0e0e0e] border border-blue-500/20 rounded-xl px-4 py-3 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                  <span className="text-xs text-blue-400 font-medium">Aira</span>
                </div>
                <div className="text-xs text-white/60 max-w-[140px]">Great hydration progress today!</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 py-3 ticker-wrap">
        <div className="ticker-inner text-xs text-white/20 tracking-widest">
          {Array(4).fill("VOLT · AI HEALTH INTELLIGENCE · AUTONOMOUS COACHING · AVAILABLE FOR ACQUISITION · ").join("")}
        </div>
      </div>
    </section>
  );
}
