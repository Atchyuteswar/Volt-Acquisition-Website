"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeUp from "./FadeUp";
import PhoneMockup from "./PhoneMockup";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
        <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 3v5l3 3" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="2" fill="#3b82f6"/>
      </svg>
    ),
    title: "Nutrition Intelligence",
    description: "Track calories, protein, carbohydrates, and fats in real time with detailed macro breakdowns and personalized goal tracking.",
    variant: "nutrition" as const,
    imageSrc: "/assets/Nutrition%20tracking%202.jpeg",
    tag: "Core Feature",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
        <path d="M10 3c0 0-4 4-4 8a4 4 0 008 0c0-4-4-8-4-8z" stroke="#3b82f6" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7 13s1 2 3 2 3-2 3-2" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Hydration Monitoring",
    description: "Intelligent water intake tracking with automated reminders and progress visualization to maintain optimal hydration daily.",
    variant: "hydration" as const,
    imageSrc: "/assets/Onboarding%20&%20login%202.jpeg",
    tag: "Smart Tracking",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#3b82f6" strokeWidth="1.5"/>
        <path d="M7 8s.5-2 3-2 3 2 3 2" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M7 12s1 2 3 2 3-2 3-2" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="8" cy="10" r="1" fill="#3b82f6"/>
        <circle cx="12" cy="10" r="1" fill="#3b82f6"/>
      </svg>
    ),
    title: "Aira AI Coach",
    description: "Autonomous AI coaching engine that analyzes behavior daily, generates personalized recommendations, and initiates proactive conversations.",
    variant: "aira" as const,
    imageSrc: "/assets/AI%20insights.jpeg",
    tag: "AI Engine",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
        <path d="M4 4h12v8H4V4z" stroke="#3b82f6" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7 16h6M10 12v4" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="8" cy="8" r="1" fill="#3b82f6"/>
        <circle cx="12" cy="8" r="1" fill="#3b82f6"/>
      </svg>
    ),
    title: "Intelligent Engagement",
    description: "Multi-layered notification engine combining cloud intelligence and local automation for timely coaching and engagement prompts.",
    variant: "dashboard" as const,
    imageSrc: "/assets/Notifications.jpeg",
    tag: "Automation",
  },
];

export default function Features() {
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % features.length);
  const prev = () => setActive((p) => (p - 1 + features.length) % features.length);

  return (
    <section className="py-32 relative" id="product">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="text-white/50 text-xs tracking-wider">PLATFORM FEATURES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-[-0.03em] text-gradient mb-4">
              Product Showcase
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Four core pillars engineered for the next generation of AI-powered health platforms.
            </p>
          </div>
        </FadeUp>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="group relative p-8 md:p-12 rounded-[2rem] border border-white/6 bg-white/[0.02] hover:border-blue-500/20 transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-10 md:gap-16 items-center">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 group-hover:from-blue-500/5 group-hover:to-blue-500/10 transition-all duration-700 rounded-[2rem]" />

                {/* Phone preview */}
                <div className="shrink-0 w-48 md:w-56 relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2">
                  <PhoneMockup variant={features[active].variant} imageSrc={features[active].imageSrc} />
                </div>

                {/* Content */}
                <div className="relative flex-1 z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      {features[active].icon}
                    </div>
                    <span className="text-xs font-semibold tracking-wide text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full bg-blue-500/10">
                      {features[active].tag}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{features[active].title}</h3>
                  <p className="text-base md:text-lg text-white/50 leading-relaxed mb-10">{features[active].description}</p>
                  
                  {/* Slider controls inline */}
                  <div className="flex items-center gap-6">
                    <button onClick={prev} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-white active:scale-95">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="flex gap-3">
                      {features.map((_, i) => (
                        <button 
                          key={i} 
                          onClick={() => setActive(i)}
                          className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? 'bg-blue-500 w-8' : 'bg-white/20 hover:bg-white/40 w-2.5'}`} 
                        />
                      ))}
                    </div>
                    <button onClick={next} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-white active:scale-95">
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
