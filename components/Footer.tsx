export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-500 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1L10 6L6 11L2 6L6 1Z" fill="white" />
            </svg>
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
