"use client";
import FadeUp from "./FadeUp";

export default function Market() {
  return (
    <section className="py-32 relative overflow-hidden" id="market">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="text-white/50 text-xs tracking-wider">MARKET OPPORTUNITY</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-[-0.03em] text-gradient mb-4">
              Where Markets Converge
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              VOLT sits at the intersection of three of the fastest-growing categories in consumer technology.
            </p>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Venn diagram */}
          <FadeUp delay={0.1}>
            <div className="relative flex items-center justify-center h-80">
              <svg viewBox="0 0 400 320" className="w-full max-w-md" fill="none">
                {/* Digital Health circle */}
                <circle cx="160" cy="120" r="110" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.2)" strokeWidth="1"/>
                {/* AI circle */}
                <circle cx="240" cy="120" r="110" fill="rgba(96,165,250,0.06)" stroke="rgba(96,165,250,0.2)" strokeWidth="1"/>
                {/* Subscription SaaS circle */}
                <circle cx="200" cy="195" r="110" fill="rgba(147,197,253,0.04)" stroke="rgba(147,197,253,0.15)" strokeWidth="1"/>

                {/* Labels */}
                <text x="100" y="80" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11" fontWeight="600">Digital</text>
                <text x="100" y="94" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11" fontWeight="600">Health</text>
                <text x="100" y="112" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9">$95B+ SAM</text>

                <text x="300" y="80" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11" fontWeight="600">Artificial</text>
                <text x="300" y="94" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11" fontWeight="600">Intelligence</text>
                <text x="300" y="112" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9">Fastest growing</text>

                <text x="200" y="290" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11" fontWeight="600">Subscription SaaS</text>
                <text x="200" y="305" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9">Recurring revenue</text>

                {/* Center — VOLT */}
                <circle cx="200" cy="158" r="32" fill="rgba(59,130,246,0.2)" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5"/>
                <text x="200" y="154" textAnchor="middle" fill="white" fontSize="13" fontWeight="900">VOLT</text>
                <text x="200" y="167" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7">$12B+ SOM</text>
              </svg>
            </div>
          </FadeUp>

          {/* Market stats */}
          <FadeUp delay={0.2}>
            <div className="space-y-5">
              {[
                {
                  label: "TAM",
                  value: "$650B+",
                  desc: "Global digital health and wellness industry including fitness, nutrition, preventative healthcare, and consumer health technology.",
                  color: "blue",
                },
                {
                  label: "SAM",
                  value: "$95B+",
                  desc: "Mobile health applications, nutrition platforms, wellness tracking software, and AI-powered health engagement solutions.",
                  color: "sky",
                },
                {
                  label: "SOM",
                  value: "$12B+",
                  desc: "Consumer nutrition coaching, hydration monitoring, AI wellness assistants, and subscription-based health optimization platforms.",
                  color: "cyan",
                },
              ].map((m) => (
                <div key={m.label} className="flex gap-5 p-5 rounded-xl border border-white/6 bg-white/[0.02]">
                  <div>
                    <div className="text-xs text-white/30 tracking-widest mb-1">{m.label}</div>
                    <div className="text-3xl font-black text-gradient-blue">{m.value}</div>
                  </div>
                  <div className="border-l border-white/6 pl-5 flex items-center">
                    <p className="text-sm text-white/40 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Bottom statement */}
        <FadeUp delay={0.3}>
          <div className="mt-16 p-8 rounded-2xl border border-blue-500/15 bg-blue-500/[0.04] text-center">
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
              VOLT combines AI-powered coaching, health intelligence, and subscription-ready infrastructure to capitalize on 
              one of the fastest-growing categories in consumer technology.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
