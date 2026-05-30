import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Terminal, Layers, RefreshCw, Radio, Zap, MessageSquare, Bot, Share2, HelpCircle } from 'lucide-react';

interface SkillItem {
  name: string;
  desc: string;
  efficiency: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Workflow Automation',
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      skills: [
        { name: 'n8n Expert', desc: 'Custom JS nodes, sub-workflows, multi-trigger states', efficiency: 98 },
        { name: 'Workflow Automation', desc: 'Complex loops, multi-party routers, conditional logic', efficiency: 95 },
        { name: 'Business Process Automation', desc: 'Translating legacy checklists into autonomous digital pipelines', efficiency: 95 },
        { name: 'Lead Gen Automation', desc: 'Real-time scraper routing, trigger filters, enrichment pipelines', efficiency: 90 },
      ]
    },
    {
      title: 'AI & Cognitive Agents',
      icon: <Bot className="w-5 h-5 text-orange-400" />,
      skills: [
        { name: 'AI Agents', desc: 'Multi-agent environments, autonomous decision matrices', efficiency: 92 },
        { name: 'OpenAI / Claude', desc: 'Structured JSON output parsing, tool calling & function bindings', efficiency: 95 },
        { name: 'Prompt Engineering', desc: 'Few-shot patterns, XML structures, system prompt optimization', efficiency: 94 },
        { name: 'ChatGPT custom API', desc: 'State tracking, thread persistence, fine-tuning', efficiency: 90 },
      ]
    },
    {
      title: 'Integrations & Protocols',
      icon: <Share2 className="w-5 h-5 text-blue-400" />,
      skills: [
        { name: 'REST APIs & Webhooks', desc: 'Authentications, OAuth, webhook filters, rate limiting policies', efficiency: 96 },
        { name: 'CRM Integrations', desc: 'HubSpot, Salesforce, Pipedrive deep field mapping syncs', efficiency: 92 },
        { name: 'WhatsApp Automation', desc: 'Cloud API, Twilio, template management, chat state flows', efficiency: 94 },
        { name: 'Data Processing', desc: 'CSV parsing, regex extractions, multi-endpoint payloads', efficiency: 88 },
      ]
    },
    {
      title: 'Development Foundations',
      icon: <Terminal className="w-5 h-5 text-purple-400" />,
      skills: [
        { name: 'JavaScript / Node.js', desc: 'Advanced state functions, asynchronous requests, complex array manipulation', efficiency: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20 bg-zinc-950/20">
      
      {/* Background glow effects */}
      <div className="absolute bottom-10 left-5 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div id="skills-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-orange-400 font-mono uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
            The Toolstack
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-4">
            Technical Arsenal & Core Stack
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans mt-3 font-light">
            Engineered using the best-performing tools, languages, and AI systems in the automation sector.
          </p>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800/85 text-left flex flex-col gap-6 relative overflow-hidden group hover:border-zinc-700/65"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:scale-115 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  {cat.title}
                </h3>
              </div>

              {/* Skills list nested inside the categories */}
              <div className="flex flex-col gap-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1.5 group/skill">
                    
                    {/* Label & Number */}
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="font-sans font-semibold text-zinc-200 group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-zinc-500">{skill.efficiency}%</span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden relative border border-zinc-950">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.efficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className={`h-full rounded-full ${
                          catIdx === 0 ? 'bg-gradient-to-r from-emerald-600 to-emerald-400' :
                          catIdx === 1 ? 'bg-gradient-to-r from-orange-600 to-orange-400' :
                          catIdx === 2 ? 'bg-gradient-to-r from-blue-600 to-blue-400' :
                          'bg-gradient-to-r from-purple-600 to-purple-400'
                        }`}
                      />
                    </div>

                    {/* Meta desc */}
                    <span className="text-[10px] text-zinc-500 font-mono mt-0.5 leading-normal">
                      {skill.desc}
                    </span>

                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
