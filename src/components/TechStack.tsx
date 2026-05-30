import React from 'react';
import { motion } from 'motion/react';
import { 
  Bot, Cpu, Database, FileCode, Layers, Link, MessageSquare, Radio, 
  RefreshCw, Share2, Terminal, Workflow, Zap, Smartphone, Globe
} from 'lucide-react';

interface Tech {
  name: string;
  icon: React.ReactNode;
  category: string;
  status: string;
}

export default function TechStack() {
  const techs: Tech[] = [
    { name: 'n8n', icon: <Workflow className="w-5 h-5 text-orange-400" />, category: 'Automation Engine', status: 'Expert' },
    { name: 'OpenAI API', icon: <Bot className="w-5 h-5 text-emerald-400" />, category: 'Cognitive LLM', status: 'Advanced' },
    { name: 'Claude API', icon: <Cpu className="w-5 h-5 text-purple-400" />, category: 'Reasoning LLM', status: 'Advanced' },
    { name: 'JavaScript', icon: <Terminal className="w-5 h-5 text-yellow-400" />, category: 'Core Scripting', status: 'Expert' },
    { name: 'REST APIs', icon: <Link className="w-5 h-5 text-blue-400" />, category: 'Communication', status: 'Expert' },
    { name: 'Webhooks', icon: <Radio className="w-5 h-5 text-pink-400" />, category: 'Event Streaming', status: 'Expert' },
    { name: 'PostgreSQL', icon: <Database className="w-5 h-5 text-cyan-400" />, category: 'Data Store', status: 'Intermediate' },
    { name: 'WhatsApp API', icon: <Smartphone className="w-5 h-5 text-emerald-500" />, category: 'Client CRM', status: 'Advanced' },
    { name: 'HubSpot SDK', icon: <Layers className="w-5 h-5 text-orange-500" />, category: 'Sales Syncs', status: 'Advanced' },
    { name: 'Node.js', icon: <FileCode className="w-5 h-5 text-emerald-600" />, category: 'Runtime Env', status: 'Expert' },
    { name: 'Stripe API', icon: <Share2 className="w-5 h-5 text-indigo-400" />, category: 'Gateway Payments', status: 'Advanced' },
    { name: 'Web Scraping', icon: <Globe className="w-5 h-5 text-teal-400" />, category: 'Lead Generation', status: 'Expert' }
  ];

  return (
    <section id="tech-stack" className="relative py-20 bg-zinc-950/40 border-y border-zinc-900/50">
      
      {/* Lights */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div id="techstack-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
            Integrations
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-4">
            Unified Core Technology Stack
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans mt-3 font-light">
            An extensive toolscape chosen for industrial strength, maximum up-time, and native multi-platform compatibility.
          </p>
        </div>

        {/* Icons Showcase Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techs.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700/60 transition-all flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Glow background */}
              <div className="absolute inset-x-0 bottom-0 top-[80%] bg-gradient-to-t from-zinc-850/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Icon */}
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-850 mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md">
                {tech.icon}
              </div>

              {/* Title */}
              <span className="font-display font-bold text-xs text-white leading-tight">
                {tech.name}
              </span>

              {/* Category */}
              <span className="text-[9px] font-mono text-zinc-550 mt-1 leading-none uppercase tracking-widest">
                {tech.category}
              </span>

              {/* Status Badge */}
              <span className="mt-3.5 px-2 py-0.5 rounded-full bg-zinc-950 text-[8px] font-mono text-zinc-400 border border-zinc-850">
                {tech.status}
              </span>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
