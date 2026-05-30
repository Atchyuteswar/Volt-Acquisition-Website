"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import PhoneMockup from "./PhoneMockup";

const experiences = [
  { title: "Welcome to VOLT", src: "/assets/Onboarding%20%26%20login%201.jpeg" },
  { title: "Personalization", src: "/assets/Onboarding%20%26%20login%202.jpeg" },
  { title: "Goal Setting", src: "/assets/Onboarding%20%26%20login%203.jpeg" },
  { title: "Profile Setup", src: "/assets/Onboarding%20%26%20login%204.jpeg" },
  { title: "Getting Started", src: "/assets/Onboarding%20%26%20login%205.jpeg" },
  { title: "Dashboard", src: "/assets/Home%20Screen.jpeg" },
  { title: "Nutrition Log", src: "/assets/Nutrition%20tracking%201.jpeg" },
  { title: "Macro Breakdown", src: "/assets/Nutrition%20tracking%202.jpeg" },
  { title: "Hydration Tracking", src: "/assets/Water%20tracking.jpeg" },
  { title: "Aira AI Coach", src: "/assets/AI%20insights.jpeg" },
  { title: "Smart Alerts", src: "/assets/Notifications.jpeg" },
  { title: "Progress Charts", src: "/assets/Charts%20%26%20analytics%201.jpeg" },
  { title: "Weekly Analytics", src: "/assets/Charts%20%26%20analytics%202.jpeg" },
  { title: "Monthly Trends", src: "/assets/Charts%20%26%20analytics%203.jpeg" },
  { title: "Detailed Reports", src: "/assets/Charts%20%26%20analytics%204.jpeg" },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(experiences.length - 3, prev + 3));
  };


  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-[#020202]">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6"
        >
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">
              Experience VOLT
            </h2>
            <p className="text-xl text-white/50 max-w-2xl font-light">
              Designed for effortless health tracking and intelligent coaching.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 flex items-center justify-center transition-all group disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:border-white/10 disabled:cursor-not-allowed"
              aria-label="Previous images"
            >
              <svg className="w-5 h-5 text-white/50 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex >= experiences.length - 3}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 flex items-center justify-center transition-all group disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:border-white/10 disabled:cursor-not-allowed"
              aria-label="Next images"
            >
              <svg className="w-5 h-5 text-white/50 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Grid container for exactly 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-10 min-h-[600px]">
          <AnimatePresence mode="popLayout">
            {experiences.slice(currentIndex, currentIndex + 3).map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative group w-full max-w-[320px] mx-auto"
              >
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 blur-xl transition-colors duration-500 rounded-[3rem]" />
                <motion.div style={{ y: index % 2 !== 0 ? y : 0 }} className="relative">
                  <PhoneMockup imageSrc={exp.src} className="transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]" />
                </motion.div>
                <h3 className="text-center mt-8 text-white/80 font-medium tracking-wide text-sm">{exp.title}</h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
