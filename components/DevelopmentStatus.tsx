"use client";
import { motion } from "framer-motion";

const statusItems = [
  "Android Platform Complete",
  "Backend Infrastructure Complete",
  "AI Coaching Engine Complete",
  "Cloud Automation Complete",
  "Technical Documentation Complete",
  "Acquisition Ready"
];

export default function DevelopmentStatus() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Premium Divider Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-white">
            Current Development Status
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto font-light">
            100% production ready. Built to scale from day one.
          </p>
        </motion.div>

        <div className="bg-[#111] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
          
          {/* Progress visualization */}
          <div className="mb-12">
            <div className="flex justify-between text-sm text-white/60 mb-3 font-medium tracking-wide">
              <span>Overall Completion</span>
              <span className="text-blue-400">100%</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
            {statusItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors">
                  <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" />
                  </svg>
                </div>
                <span className="text-white/80 font-medium tracking-wide text-sm group-hover:text-white transition-colors">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
