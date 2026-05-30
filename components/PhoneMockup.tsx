"use client";

interface PhoneMockupProps {
  variant?: "dashboard" | "aira" | "nutrition" | "hydration";
  className?: string;
  imageSrc?: string;
}

const screens = {
  dashboard: (
    <g>
      {/* Status bar */}
      <rect x="10" y="10" width="180" height="8" rx="2" fill="rgba(255,255,255,0.1)"/>
      {/* Header */}
      <rect x="10" y="28" width="120" height="12" rx="3" fill="rgba(255,255,255,0.15)"/>
      <rect x="10" y="44" width="80" height="8" rx="2" fill="rgba(255,255,255,0.07)"/>
      {/* Calorie ring */}
      <circle cx="100" cy="110" r="50" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8"/>
      <circle cx="100" cy="110" r="50" fill="none" stroke="#3b82f6" strokeWidth="8" strokeDasharray="220 314" strokeLinecap="round" transform="rotate(-90 100 110)"/>
      <text x="100" y="106" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">1,840</text>
      <text x="100" y="120" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">kcal today</text>
      {/* Macro bars */}
      <rect x="10" y="175" width="180" height="40" rx="8" fill="rgba(255,255,255,0.04)"/>
      <rect x="18" y="183" width="50" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
      <rect x="18" y="183" width="32" height="4" rx="2" fill="#3b82f6"/>
      <text x="18" y="198" fill="rgba(255,255,255,0.5)" fontSize="7">Protein</text>
      <rect x="80" y="183" width="50" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
      <rect x="80" y="183" width="28" height="4" rx="2" fill="#60a5fa"/>
      <text x="80" y="198" fill="rgba(255,255,255,0.5)" fontSize="7">Carbs</text>
      <rect x="145" y="183" width="36" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
      <rect x="145" y="183" width="20" height="4" rx="2" fill="#93c5fd"/>
      <text x="145" y="198" fill="rgba(255,255,255,0.5)" fontSize="7">Fats</text>
      {/* Hydration */}
      <rect x="10" y="225" width="85" height="50" rx="8" fill="rgba(59,130,246,0.1)"/>
      <text x="18" y="240" fill="#60a5fa" fontSize="7">Hydration</text>
      <text x="18" y="256" fill="white" fontSize="14" fontWeight="bold">2.1L</text>
      <text x="18" y="268" fill="rgba(255,255,255,0.4)" fontSize="6">of 3.0L goal</text>
      {/* Aira card */}
      <rect x="105" y="225" width="85" height="50" rx="8" fill="rgba(255,255,255,0.04)"/>
      <text x="113" y="240" fill="rgba(255,255,255,0.5)" fontSize="7">Aira Coach</text>
      <text x="113" y="256" fill="white" fontSize="8">New insight</text>
      <text x="113" y="268" fill="rgba(255,255,255,0.3)" fontSize="6">available →</text>
      {/* Bottom nav */}
      <rect x="0" y="295" width="200" height="35" fill="rgba(0,0,0,0.6)"/>
      <circle cx="40" cy="312" r="4" fill="#3b82f6"/>
      <circle cx="80" cy="312" r="4" fill="rgba(255,255,255,0.2)"/>
      <circle cx="120" cy="312" r="4" fill="rgba(255,255,255,0.2)"/>
      <circle cx="160" cy="312" r="4" fill="rgba(255,255,255,0.2)"/>
    </g>
  ),
  aira: (
    <g>
      <rect x="10" y="10" width="180" height="8" rx="2" fill="rgba(255,255,255,0.1)"/>
      {/* Aira header */}
      <circle cx="30" cy="45" r="14" fill="rgba(59,130,246,0.2)"/>
      <circle cx="30" cy="45" r="8" fill="#3b82f6"/>
      <text x="50" y="42" fill="white" fontSize="10" fontWeight="bold">Aira</text>
      <text x="50" y="54" fill="rgba(255,255,255,0.4)" fontSize="7">AI Health Coach</text>
      {/* Chat bubble 1 */}
      <rect x="10" y="75" width="150" height="45" rx="8" fill="rgba(59,130,246,0.12)"/>
      <text x="18" y="90" fill="#60a5fa" fontSize="7">Good evening, Atchyut</text>
      <text x="18" y="103" fill="rgba(255,255,255,0.8)" fontSize="7">You hit 85% of your protein</text>
      <text x="18" y="113" fill="rgba(255,255,255,0.8)" fontSize="7">goal today. Try adding eggs</text>
      {/* User bubble */}
      <rect x="50" y="130" width="140" height="30" rx="8" fill="rgba(255,255,255,0.07)"/>
      <text x="58" y="143" fill="rgba(255,255,255,0.7)" fontSize="7">How's my hydration trend?</text>
      <text x="58" y="153" fill="rgba(255,255,255,0.4)" fontSize="6">You</text>
      {/* Aira response */}
      <rect x="10" y="170" width="155" height="55" rx="8" fill="rgba(59,130,246,0.12)"/>
      <text x="18" y="185" fill="#60a5fa" fontSize="7">Your 7-day trend shows</text>
      <text x="18" y="197" fill="rgba(255,255,255,0.8)" fontSize="7">consistent improvement. You</text>
      <text x="18" y="209" fill="rgba(255,255,255,0.8)" fontSize="7">averaged 2.4L vs 1.8L last</text>
      <text x="18" y="221" fill="rgba(255,255,255,0.8)" fontSize="7">week. Keep it up! 🎯</text>
      {/* Input */}
      <rect x="10" y="260" width="180" height="32" rx="16" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      <text x="22" y="280" fill="rgba(255,255,255,0.25)" fontSize="7">Ask Aira anything...</text>
      <circle cx="177" cy="276" r="8" fill="#3b82f6"/>
      <path d="M174 276L177 273L180 276M177 273V280" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
    </g>
  ),
  nutrition: (
    <g>
      <rect x="10" y="10" width="180" height="8" rx="2" fill="rgba(255,255,255,0.1)"/>
      <rect x="10" y="28" width="100" height="10" rx="3" fill="rgba(255,255,255,0.15)"/>
      {/* Search */}
      <rect x="10" y="50" width="180" height="26" rx="13" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <text x="22" y="67" fill="rgba(255,255,255,0.25)" fontSize="7">Search foods...</text>
      {/* Food items */}
      {[0,1,2,3].map((i) => (
        <g key={i}>
          <rect x="10" y={90 + i*48} width="180" height="38" rx="8" fill="rgba(255,255,255,0.04)"/>
          <circle cx="30" cy={109 + i*48} r="10" fill="rgba(59,130,246,0.2)"/>
          <rect x="48" y={98 + i*48} width="80" height="7" rx="2" fill="rgba(255,255,255,0.15)"/>
          <rect x="48" y={110 + i*48} width="55" height="5" rx="2" fill="rgba(255,255,255,0.06)"/>
          <rect x="148" y={104 + i*48} width="34" height="10" rx="5" fill="rgba(59,130,246,0.2)"/>
        </g>
      ))}
    </g>
  ),
  hydration: (
    <g>
      <rect x="10" y="10" width="180" height="8" rx="2" fill="rgba(255,255,255,0.1)"/>
      <text x="10" y="40" fill="rgba(255,255,255,0.9)" fontSize="11" fontWeight="bold">Hydration</text>
      <text x="10" y="54" fill="rgba(255,255,255,0.4)" fontSize="7">Monday, May 30</text>
      {/* Water bottle visual */}
      <rect x="70" y="70" width="60" height="110" rx="20" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5"/>
      <rect x="70" y="130" width="60" height="50" rx="0" fill="rgba(59,130,246,0.25)"/>
      <rect x="70" y="150" width="60" height="30" rx="0" fill="rgba(59,130,246,0.35)"/>
      <rect x="70" y="160" width="60" height="20" rx="20" fill="rgba(59,130,246,0.25)" style={{clipPath: "inset(0 0 0 0 round 0 0 20px 20px);"}}/>
      <text x="100" y="115" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">2.1L</text>
      <text x="100" y="128" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7">of 3.0L</text>
      {/* Quick add */}
      <text x="10" y="205" fill="rgba(255,255,255,0.5)" fontSize="7">QUICK ADD</text>
      <rect x="10" y="215" width="50" height="28" rx="8" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.3)" strokeWidth="1"/>
      <text x="35" y="233" textAnchor="middle" fill="#60a5fa" fontSize="8">250ml</text>
      <rect x="68" y="215" width="50" height="28" rx="8" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.3)" strokeWidth="1"/>
      <text x="93" y="233" textAnchor="middle" fill="#60a5fa" fontSize="8">500ml</text>
      <rect x="126" y="215" width="64" height="28" rx="8" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.3)" strokeWidth="1"/>
      <text x="158" y="233" textAnchor="middle" fill="#60a5fa" fontSize="8">Custom</text>
    </g>
  ),
};

export default function PhoneMockup({ variant = "dashboard", className = "", imageSrc }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 220 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
        {/* Phone shell */}
        <rect x="2" y="2" width="216" height="456" rx="36" fill="#0a0a0a" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
        <rect x="6" y="6" width="208" height="448" rx="33" fill="#050505"/>
        {/* Notch */}
        <rect x="76" y="8" width="68" height="20" rx="10" fill="#0a0a0a"/>
        {/* Side buttons */}
        <rect x="0" y="80" width="2" height="40" rx="1" fill="rgba(255,255,255,0.1)"/>
        <rect x="0" y="130" width="2" height="40" rx="1" fill="rgba(255,255,255,0.1)"/>
        <rect x="218" y="100" width="2" height="60" rx="1" fill="rgba(255,255,255,0.1)"/>
        {/* Screen glow */}
        <rect x="6" y="6" width="208" height="448" rx="33" fill="url(#screenGlow)" opacity="0.4"/>
        {/* Screen content */}
        <clipPath id="screenClip">
          <rect x="6" y="6" width="208" height="448" rx="33"/>
        </clipPath>
        <g clipPath="url(#screenClip)">
          <rect x="6" y="6" width="208" height="448" rx="33" fill="#080808"/>
          {imageSrc ? (
            <image x="6" y="6" width="208" height="448" href={imageSrc} preserveAspectRatio="xMidYMid slice" />
          ) : (
            <g transform="translate(10, 30)">{screens[variant]}</g>
          )}
        </g>
        <defs>
          <radialGradient id="screenGlow" cx="50%" cy="30%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.08"/>
            <stop offset="100%" stopColor="#050505" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
