import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, Sparkles, CheckCircle2, RefreshCw, Send, Database, Code, Globe } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = '', duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * (end - startValue) + startValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Auto cycling floating workflow simulation steps to demonstrate agent activity
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: 150, suffix: '+', label: 'AI Workflows Built' },
    { value: 280, suffix: '+', label: 'Automations Delivered' },
    { value: 450, suffix: '+', label: 'APIs Integrated' },
    { value: 5000, suffix: '+ Hours', label: 'Business Credit / Hours Saved' },
  ];

  return (
    <section id="hero-section" className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden flex flex-col justify-center min-h-screen">
      
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div id="hero-container" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Elite Badge */}
            <motion.div
              id="hero-badge"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono font-medium text-emerald-400"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>Available for Enterprise Solutions</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-headline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]"
            >
              Building AI Agents, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-orange-400">
                Automations & Workflows
              </span> <br className="hidden sm:inline" />
              That Save Time & Scale
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              id="hero-subheadline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-400 font-sans max-w-xl font-light"
            >
              AI Automation Specialist <span className="text-zinc-600">|</span> n8n Expert <span className="text-zinc-600">|</span> JavaScript Developer <span className="text-zinc-600">|</span> API Integration Engineer
            </motion.p>

            {/* Call to actions */}
            <motion.div
              id="hero-ctas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mt-2"
            >
              <a
                id="hero-cta-projects"
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-0.5"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                id="hero-cta-fiverr"
                href="https://pro.fiverr.com/s/qDWB8z9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-950/40 hover:bg-emerald-900/40 text-emerald-400 hover:text-emerald-300 text-xs font-bold border border-emerald-500/30 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:-translate-y-0.5"
              >
                <span>Hire on Fiverr Pro</span>
                <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              </a>
              <a
                id="hero-cta-contact"
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-white text-xs font-semibold border border-zinc-800 hover:border-zinc-700 transition-all hover:-translate-y-0.5"
              >
                <span>Book Call Pipeline</span>
              </a>
            </motion.div>

            {/* Quick Proof of standard compliance */}
            <motion.div
              id="hero-compliance"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-5 mt-4"
            >
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Production-ready code</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>Official Partner Standards</span>
              </div>
            </motion.div>

          </div>

          {/* Right Floating AI Workflow Node graphic (interactive simulator preview) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              id="hero-workflow-illustration"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full max-w-[420px] aspect-square rounded-2xl glass-panel p-6 border border-zinc-800Relative shadow-2xl overflow-hidden self-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-orange-500/5 pointer-events-none" />
              
              {/* Header inside illustration */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs text-zinc-400">n8n_agent_broker.json</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-500">ACTIVE</span>
                </div>
              </div>

              {/* Dynamic canvas of connected nodes inside mockup */}
              <div className="relative h-[240px] flex flex-col justify-between py-2">
                
                {/* SVG Connecting Lines for live flow */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  {/* Webhook to AI Router */}
                  <path d="M 50 40 L 180 80" stroke="#374151" strokeWidth="1.5" fill="none" />
                  <path d="M 50 190 L 180 140" stroke="#374151" strokeWidth="1.5" fill="none" />
                  <path d="M 180 80 L 320 40" stroke="#374151" strokeWidth="1.5" fill="none" />
                  <path d="M 180 140 L 320 190" stroke="#374151" strokeWidth="1.5" fill="none" />
                  
                  {/* Moving signal elements */}
                  {activeStep === 0 && (
                    <circle r="4" fill="#ff6c37" className="shadow-lg">
                      <animateMotion dur="2.8s" repeatCount="indefinite" path="M 50 40 L 180 80" />
                    </circle>
                  )}
                  {activeStep === 1 && (
                    <circle r="4" fill="#10b981">
                      <animateMotion dur="2.8s" repeatCount="indefinite" path="M 180 80 L 320 40" />
                    </circle>
                  )}
                  {activeStep === 2 && (
                    <circle r="4" fill="#3b82f6">
                      <animateMotion dur="2.8s" repeatCount="indefinite" path="M 50 190 L 180 140" />
                    </circle>
                  )}
                  {activeStep === 3 && (
                    <circle r="4" fill="#a855f7">
                      <animateMotion dur="2.8s" repeatCount="indefinite" path="M 180 140 L 320 190" />
                    </circle>
                  )}
                </svg>

                {/* Node Row 1 */}
                <div className="flex justify-between items-center z-10">
                  {/* Trigger Node */}
                  <div className={`p-3 rounded-lg border flex items-center gap-2 shadow-md transition-all duration-300 ${activeStep === 0 ? 'bg-orange-950/20 border-orange-500/50 scale-105' : 'bg-zinc-900/90 border-zinc-800'}`}>
                    <RefreshCw className={`w-4 h-4 ${activeStep === 0 ? 'text-orange-500 animate-spin' : 'text-zinc-500'}`} />
                    <div className="text-left">
                      <p className="text-[10px] font-mono font-medium text-zinc-300">HTTP Trigger</p>
                      <p className="text-[8px] text-zinc-500 font-mono">Webhook</p>
                    </div>
                  </div>

                  {/* AI Agent Node */}
                  <div className={`p-3 rounded-lg border flex items-center gap-2 shadow-md transition-all duration-300 ${activeStep === 1 ? 'bg-emerald-950/20 border-emerald-500/50 scale-105' : 'bg-zinc-900/90 border-zinc-800'}`}>
                    <Sparkles className={`w-4 h-4 ${activeStep === 1 ? 'text-emerald-400 rotate-12' : 'text-zinc-500'}`} />
                    <div className="text-left">
                      <p className="text-[10px] font-mono font-medium text-zinc-300">OpenAI Agent</p>
                      <p className="text-[8px] text-zinc-500 font-mono">GPT-4o Vision</p>
                    </div>
                  </div>
                </div>

                {/* Node Row 2 - Center */}
                <div className="flex justify-center items-center z-10 my-4">
                  <div className="px-4 py-2 bg-zinc-900 border border-zinc-700/60 rounded-full flex items-center gap-2 shadow-lg">
                    <Database className="w-3.5 h-3.5 text-zinc-400" />
                    <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest">Router Channel</span>
                  </div>
                </div>

                {/* Node Row 3 */}
                <div className="flex justify-between items-center z-10">
                  {/* Database Node */}
                  <div className={`p-3 rounded-lg border flex items-center gap-2 shadow-md transition-all duration-300 ${activeStep === 2 ? 'bg-blue-950/20 border-blue-500/50 scale-105' : 'bg-zinc-900/90 border-zinc-800'}`}>
                    <Code className="w-4 h-4 text-blue-400" />
                    <div className="text-left">
                      <p className="text-[10px] font-mono font-medium text-zinc-300">JS Code Parser</p>
                      <p className="text-[8px] text-zinc-500 font-mono">Process JSON</p>
                    </div>
                  </div>

                  {/* Integration Output */}
                  <div className={`p-3 rounded-lg border flex items-center gap-2 shadow-md transition-all duration-300 ${activeStep === 3 ? 'bg-purple-950/20 border-purple-500/50 scale-105' : 'bg-zinc-900/90 border-zinc-800'}`}>
                    <Send className="w-4 h-4 text-purple-400" />
                    <div className="text-left">
                      <p className="text-[10px] font-mono font-medium text-zinc-300">CRM Integration</p>
                      <p className="text-[8px] text-zinc-500 font-mono">Sync Leads</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Status / Output Display inside card */}
              <div className="bg-zinc-950/80 rounded-lg p-3 border border-zinc-800/80 font-mono text-[9px] text-zinc-400 text-left">
                <span className="text-emerald-500">ubraza@agent-console:~$</span>{' '}
                {activeStep === 0 && 'Webhook trigger processed successfully.'}
                {activeStep === 1 && 'Invoking AI analysis engine... GPT Prompt evaluated.'}
                {activeStep === 2 && 'Custom JS node executed: 10 lines parsed safely.'}
                {activeStep === 3 && 'Sync Complete: Lead updated in HubSpot. Action code 200.'}
              </div>

            </motion.div>
          </div>

        </div>

        {/* Statistics Board */}
        <div id="hero-stats" className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 md:mt-24 border-t border-zinc-900/80 pt-10">
          {stats.map((stat) => (
            <div id={`stat-item-${stat.label.replace(/\s+/g, '-').toLowerCase()}`} key={stat.label} className="text-left">
              <span className="block font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </span>
              <span className="block text-xs text-zinc-500 mt-1 font-sans uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
