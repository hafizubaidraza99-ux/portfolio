import React from 'react';
import { 
  Mail, Phone, Github, Sparkles, ExternalLink, Briefcase, MessageSquare, ShieldCheck, ArrowRight
} from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { name: 'Fiverr Pro Profile', icon: <Briefcase className="w-5 h-5 text-emerald-400 animate-pulse" />, href: 'https://pro.fiverr.com/s/qDWB8z9', handle: 'Direct Hire or Order Gigs' },
    { name: 'GitHub', icon: <Github className="w-5 h-5 text-emerald-400" />, href: 'https://github.com/#', handle: '@ubaid-raza' },
    { name: 'Email Direct', icon: <Mail className="w-5 h-5 text-orange-400" />, href: 'mailto:hafizubaidraza99@gmail.com', handle: 'hafizubaidraza99@gmail.com' },
    { name: 'WhatsApp Direct', icon: <Phone className="w-5 h-5 text-emerald-400" />, href: 'https://wa.me/923161919759', handle: '+92 316 1919759' }
  ];

  return (
    <section id="contact" className="relative py-24 bg-zinc-950/60 scroll-mt-20">
      
      {/* Background visual light */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div id="contact-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
            The Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-4">
            Initiate Project Alignment
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans mt-3 font-light">
            Ready to completely automate your workflow pipeline? Let's connect directly to discuss your automation parameters.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block - Tech detail & social connections cards */}
          <div className="lg:col-span-12 lg:col-span-5 flex flex-col justify-between gap-8 text-left">
            
            <div className="flex flex-col gap-6">
              <h3 className="font-display font-bold text-xl text-white">
                Core Workspace Channels
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Connect directly using encrypted socials or schedule a workflow synchronization discussion. Let's trace back your business leakages together.
              </p>

              {/* Secure statement */}
              <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800/80 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="font-sans">
                  <p className="text-xs font-semibold text-white leading-tight">Data Integrity Guarantee</p>
                  <p className="text-[10px] text-zinc-500 leading-normal mt-1">
                    Your parameters, email transcripts, and company logs are completely private and processed securely through isolated pipelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Social channels catalog */}
            <div className="flex flex-col gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  id={`social-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl w-full border border-zinc-850 hover:border-zinc-700/60 bg-zinc-900/60 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-950 border border-zinc-900 rounded-lg group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-left font-sans">
                      <p className="text-[11px] font-bold text-zinc-300 group-hover:text-white transition-colors">{item.name}</p>
                      <p className="text-[10px] font-mono text-zinc-500 mt-0.5">{item.handle}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-650 group-hover:text-zinc-400 transition-colors" />
                </a>
              ))}
            </div>

          </div>

          {/* Right Block - Direct Project Alignment Portal */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800 text-left relative overflow-hidden flex flex-col justify-between min-h-[440px]">
            <div className="flex flex-col gap-6 z-10">
              {/* Telemetry Header */}
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs font-bold text-white">direct_secure_routing_initialized</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>PIPELINE_ACTIVE</span>
                </div>
              </div>

              {/* Action Headline & Body */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  Let's Automate Your Business
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                  Skip the manual forms. Reach me instantly via the secure handshakes below to spin up custom bots, multi-agent n8n pipelines, or AI database integrations.
                </p>
              </div>

              {/* High Impact Direct Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <a
                  id="direct-hire-fiverr-btn"
                  href="https://pro.fiverr.com/s/qDWB8z9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs sm:text-sm font-mono font-bold transition-all shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 group cursor-pointer"
                >
                  <Briefcase className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                  <span>HIRE ON FIVERR PRO</span>
                  <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  id="direct-chat-whatsapp-btn"
                  href="https://wa.me/923161919759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-zinc-900 border border-emerald-500/20 hover:border-emerald-500/40 text-emerald-400 text-xs sm:text-sm font-mono font-bold transition-all hover:bg-zinc-850 hover:-translate-y-0.5 group cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>CONTACT ON WHATSAPP</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-500/70 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Sandbox telemetry / logs */}
            <div className="w-full rounded-xl bg-zinc-950 border border-zinc-900 mt-8 p-4 text-left font-mono text-[10px] text-zinc-500 flex flex-col gap-2 z-10">
              <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-900/60 pb-1.5 mb-1">
                <span>REDirection_telemetry</span>
                <span className="text-[9px] text-zinc-550">v1.4.2 // live</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">● fiverr_endpoint:</span>
                <span className="text-zinc-400">https://pro.fiverr.com/s/qDWB8z9</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">● whatsapp_endpoint:</span>
                <span className="text-zinc-400">Direct instant response routing active (+92 316 1919759)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zinc-550">● ping_handshake:</span>
                <span className="text-emerald-400">0.02ms (authenticated handshake safe)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
