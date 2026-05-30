import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, Award, Zap, Code, Star } from 'lucide-react';

interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  badge: string;
  desc: string;
  achievements: string[];
  icon: React.ReactNode;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      year: '2024 - Present',
      role: 'Senior AI Automation Engineer',
      company: 'Enterprise Agentic Labs (Contract)',
      badge: 'Current Role',
      desc: 'Architecting fully autonomous multi-agent environments and high-velocity workflows for mid-market and enterprise operations.',
      achievements: [
        'Built a multi-agent diagnostic bot routing 2,000+ support prompts daily with 94% customer resolution scoring.',
        'Migrated antiquated legacy sheets into a centralized n8n engine, saving 120 operational staff hours weekly.',
        'Coached executive boards on workflow lifecycle optimization, leading to a 30% reduction in workflow design overhead.'
      ],
      icon: <Zap className="w-4 h-4 text-emerald-400" />
    },
    {
      year: '2022 - 2024',
      role: 'Lead Workflow Architect & n8n Developer',
      company: 'Aura Growth Agency',
      badge: 'Integration Specialist',
      desc: 'Lead development of core marketing integrations, lead qualification modules and e-commerce customer CRM syncs.',
      achievements: [
        'Integrated custom n8n webhooks with major CRM tools, leading to $2.4M in processed inbound pipelines.',
        'Engineered a WhatsApp Sales Bot using Claude-3-Haiku API, resulting in an 18% increase on overall store conversions.',
        'Developed custom private Node.js modules for n8n to ingest protected web API endpoints.'
      ],
      icon: <Award className="w-4 h-4 text-orange-400" />
    },
    {
      year: '2020 - 2022',
      role: 'API Integration Specialist & JavaScript Developer',
      company: 'Logistics Logic Inc.',
      badge: 'Mid-Senior Specialist',
      desc: 'Developed robust internal API middleware, webhook parsers, and custom client interfaces.',
      achievements: [
        'Managed payment reconciliations via direct Stripe-to-Quickbook APIs, lowering human auditing errors to 0%.',
        'Built headless browser scraping automation systems triggering daily lead rosters with Apollo metadata validation.',
        'Enhanced database transaction execution speed by 40% via optimal Async Node.js query structures.'
      ],
      icon: <Code className="w-4 h-4 text-blue-400" />
    }
  ];

  return (
    <section id="timeline" className="relative py-24 bg-zinc-950/40">
      
      {/* Background lights */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div id="experience-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-orange-400 font-mono uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full">
            The Track record
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-4">
            Professional Track Record & Milestones
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans mt-3 font-light">
            Years of building scalable, reliable, and secure automation frameworks for fast-growing companies.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="relative max-w-3xl mx-auto">
          
          {/* Vertical central glowing line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-emerald-500/30 via-orange-500/20 to-transparent -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-emerald-500/30 via-orange-500/20 to-transparent md:hidden" />

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* Visual Circle Node Placement on line */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                  {exp.icon}
                </div>

                {/* Left side spacer on Desktop (or right side depending on index) */}
                <div className="w-full md:w-1/2" />

                {/* Timeline Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={`p-6 sm:p-8 rounded-2xl glass-panel border border-zinc-800/80 hover:border-zinc-700/60 transition-all text-left group ${
                    idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    
                    {/* Time & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                      <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-500">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.year}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-mono font-medium text-emerald-400 uppercase tracking-wider">
                        {exp.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-white text-base">
                      {exp.role}
                    </h3>
                    <p className="text-[11px] font-mono text-zinc-400 mt-0.5 mb-4 group-hover:text-emerald-400 transition-colors">
                      {exp.company}
                    </p>

                    <p className="text-xs text-zinc-400 leading-relaxed font-light mb-5">
                      {exp.desc}
                    </p>

                    {/* Achievements List */}
                    <div>
                      <h4 className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-2.5">Key Deliverables</h4>
                      <ul className="flex flex-col gap-2">
                        {exp.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                            <span className="text-emerald-500 text-[10px] select-none mt-0.5">✓</span>
                            <span className="font-light leading-normal text-[11px]">{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
