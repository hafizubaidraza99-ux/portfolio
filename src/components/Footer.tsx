import { Cpu, Terminal, Sparkles, Navigation } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className="bg-[#09090b] border-t border-zinc-900 py-12 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none z-0" />

      <div id="footer-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Left branding */}
        <div className="flex flex-col gap-2 md:items-start items-center">
          <a 
            href="#top" 
            className="flex items-center gap-2 group font-display font-bold text-lg tracking-tight text-white hover:text-emerald-400 transition-colors"
          >
            <div className="flex justify-center items-center px-2 h-7 rounded-lg bg-zinc-900 border border-zinc-800">
              <span className="text-emerald-500 font-mono text-xs">n8n</span>
            </div>
            <span>Hafiz Ubaid Raza</span>
          </a>
          <p className="text-[11px] text-zinc-500 font-sans font-light max-w-sm">
            AI Automation Specialist, n8n Expert, and Workflow Automation Specialist building enterprise-grade integrations.
          </p>
        </div>

        {/* Middle quick metadata */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-850 text-[10px] font-mono text-zinc-400">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>Operational Integrity Standardized</span>
          </div>
          <span className="text-[10px] text-zinc-650 font-mono">
            All rights reserved &copy; {currentYear} Hafiz Ubaid Raza.
          </span>
        </div>

        {/* Right back-to-top */}
        <div>
          <a
            id="back-to-top-footer"
            href="#top"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 rounded-xl text-[10px] font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <span>Back to top index</span>
            <Navigation className="w-3 h-3 text-emerald-500 rotate-45" />
          </a>
        </div>

      </div>
    </footer>
  );
}
