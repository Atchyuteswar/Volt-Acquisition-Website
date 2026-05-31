"use client";
import { motion } from "framer-motion";
import { Lock, FileText, Code2, Film, TrendingUp, Folder, ArrowRight, ExternalLink } from "lucide-react";
import FadeUp from "./FadeUp";

export default function DataRoom() {
  const cards = [
    { 
      icon: <FileText className="w-6 h-6 text-blue-400" />, 
      title: "Executive Summary", 
      desc: "Quick overview of the platform, technology, acquisition details, and commercial opportunity." 
    },
    { 
      icon: <Code2 className="w-6 h-6 text-purple-400" />, 
      title: "Technical Documentation", 
      desc: "Architecture diagrams, infrastructure details, technology stack, and implementation information." 
    },
    { 
      icon: <Film className="w-6 h-6 text-emerald-400" />, 
      title: "Product Assets", 
      desc: "Product trailer, screenshots, acquisition deck, and branding materials." 
    },
    { 
      icon: <TrendingUp className="w-6 h-6 text-rose-400" />, 
      title: "Business Information", 
      desc: "Monetization opportunities, operational details, included assets, and growth potential." 
    },
  ];

  const floatingFiles = [
    { name: "Executive Summary.pdf", icon: <FileText className="w-4 h-4 text-blue-400" />, color: "border-blue-500/20 bg-blue-500/10", x: "-180px", y: "-160px" },
    { name: "Business Information.pdf", icon: <TrendingUp className="w-4 h-4 text-rose-400" />, color: "border-rose-500/20 bg-rose-500/10", x: "160px", y: "-120px" },
    { name: "Acquisition Deck.pdf", icon: <FileText className="w-4 h-4 text-purple-400" />, color: "border-purple-500/20 bg-purple-500/10", x: "-200px", y: "40px" },
    { name: "Product Trailer.mp4", icon: <Film className="w-4 h-4 text-emerald-400" />, color: "border-emerald-500/20 bg-emerald-500/10", x: "180px", y: "80px" },
    { name: "Technical Documentation.pdf", icon: <Code2 className="w-4 h-4 text-amber-400" />, color: "border-amber-500/20 bg-amber-500/10", x: "-40px", y: "180px" },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="data-room">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div>
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 mb-6">
                <Lock className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-xs tracking-wider font-semibold uppercase">Buyer Resources</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
                Access the VOLT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Data Room</span>
              </h2>
              <p className="text-white/50 text-lg md:text-xl font-light mb-12 max-w-xl leading-relaxed">
                Explore the complete acquisition package, including technical documentation, architecture assets, business information, product materials, and supporting resources.
              </p>
            </FadeUp>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {cards.map((card, i) => (
                <FadeUp key={i} delay={0.1 + i * 0.05}>
                  <div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* CTAs */}
            <FadeUp delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="https://drive.google.com/drive/folders/1aWycm4hv1m437TRmXihWY-LRHK5hX44u?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-full text-sm font-semibold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:-translate-y-1"
                >
                  Access Data Room
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-1"
                >
                  Contact Founder
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <p className="mt-4 text-xs text-white/30 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
                <Lock className="w-3 h-3" />
                Access is provided for evaluation purposes only.
              </p>
            </FadeUp>
          </div>

          {/* Right Column: Floating Illustration */}
          <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center">
            {/* Background folder glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
            
            {/* Central Folder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
            >
              <div className="w-32 h-32 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl flex items-center justify-center shadow-2xl relative">
                <Folder className="w-16 h-16 text-blue-400/80" fill="currentColor" strokeWidth={1} />
                {/* Decoration */}
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <Lock className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Floating Files */}
            {floatingFiles.map((file, i) => (
              <motion.div
                key={file.name}
                className="absolute z-10"
                style={{ top: '50%', left: '50%' }}
                initial={{ opacity: 0, x: "-50%", y: "-50%", scale: 0.5 }}
                whileInView={{ opacity: 1, x: `calc(-50% + ${file.x})`, y: `calc(-50% + ${file.y})`, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl hover:bg-white/[0.06] transition-colors cursor-default"
                >
                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${file.color}`}>
                    {file.icon}
                  </div>
                  <span className="text-sm font-medium text-white/90 whitespace-nowrap">{file.name}</span>
                </motion.div>
              </motion.div>
            ))}

            {/* Connection Lines (Optional decorative effect) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: -1 }}>
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" fill="none">
                {floatingFiles.map((file, i) => (
                  <line 
                    key={`line-${i}`}
                    x1="50%" 
                    y1="50%" 
                    x2={`calc(50% + ${file.x})`} 
                    y2={`calc(50% + ${file.y})`} 
                  />
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
