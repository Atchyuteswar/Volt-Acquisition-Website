"use client";
import FadeUp from "./FadeUp";

export default function Contact() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-blue-600/8 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-400 text-xs tracking-wider">START A CONVERSATION</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black tracking-[-0.04em] text-gradient mb-4 sm:mb-6">
            Let's Talk
          </h2>
          <p className="text-white/40 text-lg mb-12 max-w-lg mx-auto">
            Interested in acquiring VOLT, exploring a strategic partnership, or licensing the platform? 
            Reach out directly.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/atchyuteswar/",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M3.5 5h-2v7h2V5zm-1-3a1.1 1.1 0 110 2.2A1.1 1.1 0 012.5 2zM6 5v7h2V8.5c0-1 .5-1.5 1.5-1.5S11 7.5 11 8.5V12h2V8c0-2-1.2-3-2.8-3-1 0-1.8.5-2.2 1.2V5H6z"/>
                  </svg>
                ),
              },
              {
                label: "Email",
                href: "mailto:yt.atchyut@gmail.com",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                    <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.3"/>
                  </svg>
                ),
              },
              {
                label: "Portfolio",
                href: "https://atchyut.vercel.app/",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3"/>
                    <path d="M2 8h12M8 2c-1.5 2-2 4-2 6s.5 4 2 6M8 2c1.5 2 2 4 2 6s-.5 4-2 6" stroke="currentColor" strokeWidth="1.3"/>
                  </svg>
                ),
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/10 hover:border-white/20 text-white/60 hover:text-white text-sm transition-all duration-200"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </FadeUp>

          <a
            href="mailto:yt.atchyut@gmail.com"
            className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-blue-500 hover:bg-blue-400 text-white rounded-full text-sm sm:text-base font-medium tracking-wide transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02]"
          >
            Start Acquisition Discussion
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </FadeUp>

        <FadeUp delay={0.35}>
          <p className="mt-8 text-white/20 text-sm">
            yt.atchyut@gmail.com · linkedin.com/in/atchyuteswar
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
