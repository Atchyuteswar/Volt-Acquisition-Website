"use client";
import { motion } from "framer-motion";

export default function AcquisitionCTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-[#020202]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Premium Divider Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-16 h-16 mx-auto mb-8 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 tracking-tight text-white leading-tight">
            Ready to Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Health-Tech Vision?</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto font-light mb-10 sm:mb-12">
            Acquire a fully developed AI-powered health platform and bring your product to market faster. 
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:yt.atchyut@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-full text-sm font-semibold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-1"
            >
              Start Acquisition Discussion
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="/assets/Volt%20Pitch%20Presentation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-1"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Deck
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
