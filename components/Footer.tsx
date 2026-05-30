export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
            <img src="/assets/volt_mascot.png" alt="Volt Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold tracking-widest text-xs text-white">VOLT</span>
          <span className="text-white/20 text-xs ml-2">AI-Powered Health Intelligence Platform</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:yt.atchyut@gmail.com" className="text-xs text-white/30 hover:text-white/60 transition-colors">Contact</a>
          <a href="https://www.linkedin.com/in/atchyuteswar/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white/60 transition-colors">LinkedIn</a>
          <a href="https://atchyut.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white/60 transition-colors">Portfolio</a>
        </div>
        <p className="text-xs text-white/20">© 2024 VOLT. All rights reserved.</p>
      </div>
    </footer>
  );
}
