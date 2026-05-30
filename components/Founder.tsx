"use client";
import FadeUp from "./FadeUp";

export default function Founder() {
  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-12">
            <span className="text-white/50 text-xs tracking-wider">THE FOUNDER</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="relative inline-block mb-8">
            {/* Avatar */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-[2rem] bg-gradient-to-br from-blue-500/30 to-blue-800/30 border border-blue-500/30 flex items-center justify-center mx-auto overflow-hidden">
              <img src="/assets/image-atchyut.jpg" alt="Atchyuteswar Gottumukkala" className="w-full h-full object-cover" />
            </div>
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-[2rem] border border-blue-500/20 animate-ping" style={{ animationDuration: "3s" }} />
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="text-sm font-medium text-white/50 mb-2 uppercase tracking-[0.2em]">Built End-to-End By</div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
            Atchyuteswar Gottumukkala
          </h2>
          <p className="text-blue-400 font-medium mb-8 text-lg">Founder & Product Engineer</p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Built VOLT end-to-end — from the initial product strategy and user experience design, 
            to the core Android application, AI architecture, and scalable cloud infrastructure. 
            A solo builder with deep expertise across the entire modern technical stack.
          </p>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {["Android Engineering", "AI Systems", "Cloud Architecture", "Product Strategy", "User Experience Design"].map((skill) => (
              <span key={skill} className="px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 transition-colors text-sm text-white/70 font-medium">
                {skill}
              </span>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <blockquote className="text-xl text-white/60 leading-relaxed italic max-w-2xl mx-auto border-l-2 border-blue-500/40 pl-6 text-left">
            "What began as a vision to make health tracking smarter evolved into a fully developed 
            AI-powered wellness platform. Today, VOLT stands ready for its next chapter."
          </blockquote>
        </FadeUp>
      </div>
    </section>
  );
}
