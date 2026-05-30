"use client";
import FadeUp from "./FadeUp";

const cards = [
  {
    number: "01",
    title: "Autonomous AI Coaching",
    description: "Aira analyzes user nutrition and hydration patterns daily, generating personalized coaching insights and proactive recommendations without requiring user prompts.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#3b82f6" strokeWidth="1.5"/>
        <path d="M8 10s1-2 4-2 4 2 4 2M8 15s1.5 2 4 2 4-2 4-2" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="9.5" cy="12.5" r="1.2" fill="#3b82f6"/>
        <circle cx="14.5" cy="12.5" r="1.2" fill="#3b82f6"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Cloud-Native Intelligence",
    description: "AI processing runs entirely through serverless edge functions and automated workflows, ensuring reliability, scalability, and minimal device dependency.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 15a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a4 4 0 010 8H6z" stroke="#3b82f6" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 12v5M10 15l2 2 2-2" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Premium Mobile Experience",
    description: "Built natively with Kotlin and Jetpack Compose, VOLT delivers fluid animations, adaptive themes, and modern Android design principles.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="7" y="2" width="10" height="20" rx="3" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="12" cy="18" r="1" fill="#3b82f6"/>
        <path d="M10 5h4" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Multi-Modal Tracking",
    description: "Users log health data through barcode scanning, voice input, and manual entry — a frictionless experience that drives long-term engagement.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="#3b82f6" strokeWidth="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="#3b82f6" strokeWidth="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="#3b82f6" strokeWidth="1.5"/>
        <path d="M14 17.5h7M17.5 14v7" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function WhyDifferent() {
  return (
    <section className="py-32 relative" id="technology">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="text-white/50 text-xs tracking-wider">DIFFERENTIATION</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-[-0.03em] text-gradient mb-4">
              Why VOLT Is Different
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Not just another health tracker — a fully realized AI intelligence platform.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <FadeUp key={c.number} delay={i * 0.1}>
              <div className="group relative p-8 rounded-2xl border border-white/6 bg-white/[0.02] hover:border-blue-500/20 transition-all duration-300 overflow-hidden h-full">
                {/* Subtle glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-4 translate-y-4" />
                
                <div className="flex items-start justify-between mb-6 relative">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    {c.icon}
                  </div>
                  <span className="text-5xl font-black text-white/5 group-hover:text-white/8 transition-colors duration-300 leading-none">
                    {c.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 relative">{c.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed relative">{c.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
