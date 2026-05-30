"use client";
import FadeUp from "./FadeUp";

const included = [
  { label: "Complete Android Codebase", desc: "Kotlin + Jetpack Compose, production-ready" },
  { label: "AI Coaching Infrastructure", desc: "Aira engine, edge functions, automation workflows" },
  { label: "Cloud Backend", desc: "Supabase, PostgreSQL, RLS policies, auth systems" },
  { label: "Technical Documentation", desc: "Architecture diagrams, API configs, deployment guides" },
  { label: "Branding Assets", desc: "Logos, materials, acquisition documentation" },
  { label: "Deployment Configurations", desc: "Operational workflows, notification infrastructure" },
  { label: "Notification Systems", desc: "Firebase FCM, pg_cron, WorkManager pipelines" },
  { label: "Acquisition Deck", desc: "Full pitch materials and strategic documentation" },
];

const partners = [
  { label: "HealthTech Startups", desc: "Accelerate product development with a production-ready AI health platform" },
  { label: "Fitness & Wellness Brands", desc: "Add a branded digital experience to strengthen customer engagement" },
  { label: "SaaS & Tech Companies", desc: "Expand into health-focused software verticals via acquisition" },
  { label: "Investors & Studios", desc: "Modern software asset with multiple commercialization pathways" },
];

export default function Acquisition() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="acquisition">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-blue-500/6 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <FadeUp>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-400 text-xs tracking-wider">ACQUISITION OPPORTUNITY</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] text-gradient mb-4">
              Available for Acquisition
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto mb-8">
              VOLT is a fully developed AI-powered health platform available for acquisition, 
              licensing, or strategic partnerships.
            </p>
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-full text-sm font-semibold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:-translate-y-1"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Acquisition Deck
            </a>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* What's included */}
          <FadeUp delay={0.1}>
            <div className="p-8 rounded-2xl border border-white/6 bg-white/[0.02] h-full">
              <div className="text-xs text-white/30 tracking-widest mb-6">WHAT'S INCLUDED</div>
              <div className="space-y-4">
                {included.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{item.label}</div>
                      <div className="text-xs text-white/35 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Ideal partners */}
          <FadeUp delay={0.2}>
            <div className="p-8 rounded-2xl border border-white/6 bg-white/[0.02] h-full">
              <div className="text-xs text-white/30 tracking-widest mb-6">IDEAL ACQUISITION PARTNERS</div>
              <div className="space-y-4">
                {partners.map((p, i) => (
                  <div key={p.label} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-blue-500/15 transition-colors duration-200">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs text-blue-400/60 font-mono">0{i+1}</span>
                      <span className="text-sm font-medium text-white">{p.label}</span>
                    </div>
                    <p className="text-xs text-white/40 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Why acquire highlight */}
        <FadeUp delay={0.3}>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Production Ready", desc: "Deploy, scale, or commercialize immediately — no further development required." },
              { title: "AI Infrastructure", desc: "Aira AI coaching engine fully integrated with serverless architecture and automation." },
              { title: "Fast Market Entry", desc: "Bypass months of development, UI/UX design, testing, and architecture planning." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-blue-500/12 bg-blue-500/[0.04]">
                <div className="text-base font-semibold text-white mb-2">{item.title}</div>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
