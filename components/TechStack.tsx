"use client";
import FadeUp from "./FadeUp";

const techs = [
  { name: "Kotlin", color: "#F88900", desc: "Native Android", icon: "M10 10l-10 10V0h10l-10 10h10z" },
  { name: "Jetpack Compose", color: "#4285F4", desc: "Modern UI", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
  { name: "Supabase", color: "#3ECF8E", desc: "Cloud Backend", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" },
  { name: "PostgreSQL", color: "#336791", desc: "Database", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z" },
  { name: "Deno", color: "#70FFAF", desc: "Edge Functions", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
  { name: "TypeScript", color: "#3178C6", desc: "Type Safety", icon: "M4 4h16v16H4V4zm9 10h-2v4H9v-4H7v-2h6v2zm3 4c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm1-3h-2v2h2v-2z" },
  { name: "Firebase", color: "#FFCA28", desc: "Push Notifications", icon: "M11.5 2L2 12l9.5 10L21 12 11.5 2z" },
  { name: "WorkManager", color: "#5A8DEE", desc: "Background Tasks", icon: "M12 2L2 12h3v8h14v-8h3L12 2z" },
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
    <section className="py-32 relative overflow-hidden bg-[#0a0a0a]">
      {/* Premium Divider Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              Built With Modern Technologies
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
              Enterprise-grade infrastructure designed for reliability, high performance, and rapid scalability.
            </p>
          </div>
        </FadeUp>

        {/* Tech badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center mb-20">
          {techs.map((tech, i) => (
            <FadeUp key={tech.name} delay={i * 0.1}>
              <div className="group flex flex-col p-6 rounded-2xl border border-white/10 bg-[#111] hover:bg-[#151515] hover:border-blue-500/30 transition-all duration-300 cursor-default shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style={{ color: tech.color }}>
                    <path d={tech.icon} />
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border border-white/5 bg-white/5 group-hover:border-blue-500/20 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: tech.color }}>
                    <path d={tech.icon} />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{tech.name}</span>
                <span className="text-sm text-white/40">{tech.desc}</span>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Architecture diagram */}
        <FadeUp delay={0.4}>
          <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-black/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            <div className="text-sm text-white/40 tracking-[0.2em] mb-10 text-center font-medium">SYSTEM ARCHITECTURE</div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {layers.map((layer, i) => (
                <div key={layer.label} className="relative">
                  {/* Connector line */}
                  {i < layers.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-blue-500/30 to-transparent z-10" />
                  )}
                  <div className="p-6 rounded-2xl border border-white/5 bg-white/5 h-full hover:border-blue-500/20 transition-colors">
                    <div className="text-sm text-blue-400 font-semibold mb-4">{layer.label}</div>
                    <div className="space-y-3">
                      {layer.items.map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                          <span className="text-sm text-white/60">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
