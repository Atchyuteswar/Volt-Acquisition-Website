"use client";
import FadeUp from "./FadeUp";

const techs = [
  { name: "Kotlin", color: "#F88900", desc: "Native Android" },
  { name: "Jetpack Compose", color: "#4285F4", desc: "Modern UI" },
  { name: "Supabase", color: "#3ECF8E", desc: "Cloud Backend" },
  { name: "PostgreSQL", color: "#336791", desc: "Database" },
  { name: "Deno", color: "#70FFAF", desc: "Edge Functions" },
  { name: "TypeScript", color: "#3178C6", desc: "Type Safety" },
  { name: "Firebase", color: "#FFCA28", desc: "Push Notifications" },
  { name: "WorkManager", color: "#5A8DEE", desc: "Background Tasks" },
];

const layers = [
  {
    label: "Native Android Layer",
    items: ["VOLT Android App", "Jetpack Compose UI", "WorkManager"],
    color: "blue",
  },
  {
    label: "AI Orchestration",
    items: ["Aira AI Engine", "Deno Edge Functions", "Behavioral Analysis"],
    color: "indigo",
  },
  {
    label: "Cloud Infrastructure",
    items: ["Supabase Backend", "PostgreSQL DB", "pg_cron Automation"],
    color: "sky",
  },
  {
    label: "Engagement Systems",
    items: ["Firebase Messaging", "User Engagement Loop", "Push Notifications"],
    color: "cyan",
  },
];

export default function TechStack() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/6 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <FadeUp>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="text-white/50 text-xs tracking-wider">TECHNICAL FOUNDATION</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-[-0.03em] text-gradient mb-4">
              Built for Scale
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Modern technology stack engineered for reliability, performance, and future extensibility.
            </p>
          </div>
        </FadeUp>

        {/* Architecture diagram */}
        <FadeUp delay={0.1}>
          <div className="mb-16 p-8 rounded-2xl border border-white/6 bg-white/[0.02]">
            <div className="text-xs text-white/30 tracking-widest mb-8 text-center">SYSTEM ARCHITECTURE</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {layers.map((layer, i) => (
                <div key={layer.label} className="relative">
                  {/* Connector line */}
                  {i < layers.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-blue-500/30 to-transparent z-10" />
                  )}
                  <div className="p-4 rounded-xl border border-blue-500/12 bg-blue-500/[0.04] h-full">
                    <div className="text-xs text-blue-400/70 tracking-wide mb-3">{layer.label}</div>
                    <div className="space-y-2">
                      {layer.items.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-blue-400/40" />
                          <span className="text-xs text-white/50">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Flow arrow */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/20">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-blue-500/30" />
              <span>Data flows from device → AI → Cloud → Engagement</span>
              <div className="w-16 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
            </div>
          </div>
        </FadeUp>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-3 justify-center">
          {techs.map((tech, i) => (
            <FadeUp key={tech.name} delay={i * 0.06}>
              <div className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-white/8 bg-white/[0.03] hover:border-white/15 transition-all duration-200 cursor-default">
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: tech.color }} />
                <span className="text-sm font-medium text-white/80">{tech.name}</span>
                <span className="text-xs text-white/25 border-l border-white/10 pl-3">{tech.desc}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
