"use client";
import { motion } from "framer-motion";

export default function ProductDemo() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Premium Divider Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
            Watch VOLT in Action
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-light">
            A seamless experience integrating Dashboard insights, Aira intelligence, and Hydration tracking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.15)] ring-2 ring-white/10 group w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] mx-auto bg-[#0a0a0a]"
        >
          {/* Video Player */}
          <video 
            className="w-full h-auto opacity-90 transition-opacity duration-500 group-hover:opacity-100"
            controls
            playsInline
            poster="/assets/Home%20Screen.jpeg"
          >
            <source src="/assets/Demo%20Video/Volt-Demo-Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[2rem]" />
        </motion.div>
      </div>
    </section>
  );
}
