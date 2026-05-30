import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Bot, RefreshCw, Cpu, Workflow, MessageSquare, Filter, Database, Link, ArrowRight
} from 'lucide-react';

interface ServiceType {
  title: string;
  desc: string;
  icon: React.ReactNode;
  bulletColor: string;
  features: string[];
}

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const servicesData: ServiceType[] = [
    {
      title: 'AI Agent Development',
      desc: 'Architecting fully autonomous cognitive AI agents that understand context, call custom internal APIs, and execute high-level corporate tasks.',
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      bulletColor: 'bg-emerald-500',
      features: [
        'Multi-Agent systems (LangChain/Langflow/CrewAI)',
        'GPT / Claude API system design & fine-tuning',
        'Advanced tool-calling and parameter extraction code',
        'State persistence for context-aware conversations'
      ]
    },
    {
      title: 'n8n Workflow Automation',
      desc: 'Crafting self-healing, low-latency node networks to unify your SaaS operations, utilizing robust error routing, custom JS functions, and sub-workflows.',
      icon: <Workflow className="w-5 h-5 text-orange-400" />,
      bulletColor: 'bg-orange-500',
      features: [
        'Advanced webhook event decoders & router nodes',
        'High-reliability sub-workflow chaining patterns',
        'Self-healing automation state mechanics',
        'Deployment on Docker, Cloud Run, n8n Cloud'
      ]
    },
    {
      title: 'API Integrations (REST & Webhooks)',
      desc: 'Seamlessly binding physical systems, cloud platforms, and internal legacy software with optimized endpoints, security measures, and webhook structures.',
      icon: <Link className="w-5 h-5 text-blue-400" />,
      bulletColor: 'bg-blue-500',
      features: [
        'OAuth authentication integrations & token-refresher routines',
        'Advanced microservice webhook parsers and payload standards',
        'Rate-limiting queues, back-offs, and batch workers',
        'Custom Node.js gateway and server controllers'
      ]
    },
    {
      title: 'Business Process Automation',
      desc: 'Mapping manual workforce spreadsheets and task folders to fully digital corporate pipelines, eliminating wasted overhead hours.',
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      bulletColor: 'bg-purple-500',
      features: [
        'Current workflow mapping & system leakage analysis',
        'Migration of physical checklists to autonomous workers',
        'Error logging dashboards and automated alerts',
        'Enterprise scalability audits for high-volume transactions'
      ]
    },
    {
      title: 'CRM Automation',
      desc: 'Syncing sales hubs in real-time, eliminating friction, automatic deal logging, and mapping accurate lead ownership data.',
      icon: <Database className="w-5 h-5 text-pink-400" />,
      bulletColor: 'bg-pink-500',
      features: [
        'HubSpot, Salesforce, and Pipedrive API integrations',
        'Automated deal staging triggered by webhook payments',
        'Live multi-party contact merging & profile cleanups',
        'Slack alert alerts for high-value deal pipeline adjustments'
      ]
    },
    {
      title: 'AI-Powered Customer Support',
      desc: 'Building instant, conversational self-service help stations that parse incoming customer questions, match logs, and perform safe actions.',
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      bulletColor: 'bg-emerald-400',
      features: [
        'Retrieval-Augmented Generation (RAG) vector mappings',
        'Custom Zendesk & Intercom app background agents',
        'Instant multi-channel support sync (Email, Chat, SMS)',
        'Accurate automated drafts and issue priority triage'
      ]
    },
    {
      title: 'Lead Generation Systems',
      desc: 'Deploying reliable, autonomous web crawlers, data cleaners, and lead enrichers that identify potential high-intent buyers and initiate outbound flows.',
      icon: <Filter className="w-5 h-5 text-amber-400" />,
      bulletColor: 'bg-amber-400',
      features: [
        'Apollo, Crunchbase, Lusha data-enricher syndications',
        'Instant lead qualification according to enterprise standards',
        'Dynamic hyper-personalized cold-email generation pipelines',
        'Automated calendar scheduling integrations'
      ]
    },
    {
      title: 'Data Automation Solutions',
      desc: 'Aggregating records across distinct systems to provide error-free reporting sheets, live analytical visualizers, and unified accounting outputs.',
      icon: <RefreshCw className="w-5 h-5 text-teal-400" />,
      bulletColor: 'bg-teal-400',
      features: [
        'CSV, PDF parser extractions and regex standardizers',
        'Stripe & PayPal transactional ledger syncer pipelines',
        'Google Sheets / Notion live database mirroring',
        'Automated daily executive status report notifications'
      ]
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-zinc-950/20">
      
      {/* Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div id="services-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
            Engineering Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-4">
            Intelligent Automation & Service Catalog
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans mt-3 font-light">
            Engineered systems designed to streamline workflows, eliminate manual steps, and scale operations with ironclad security.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((svc, sIdx) => {
            const isHovered = hoveredIdx === sIdx;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: sIdx * 0.05 }}
                onMouseEnter={() => setHoveredIdx(sIdx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700/60 transition-all flex flex-col justify-between text-left group/card relative overflow-hidden h-[340px]"
              >
                {/* Decorative border bottom line glow */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 ${isHovered ? 'bg-gradient-to-r from-emerald-500 to-orange-500' : 'bg-transparent'}`} />

                <div>
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-850 w-fit mb-5 group-hover/card:scale-110 transition-transform">
                    {svc.icon}
                  </div>
                  
                  <h3 className="font-display font-bold text-white text-base">
                    {svc.title}
                  </h3>
                  
                  <p className="text-[11px] text-zinc-400 font-sans mt-2.5 leading-relaxed font-light line-clamp-4">
                    {svc.desc}
                  </p>
                </div>

                {/* Popover / Overlay details on hover representing elite capability */}
                <div className={`absolute inset-x-0 bottom-0 top-[60px] bg-zinc-950/95 border-t border-zinc-850 p-6 flex flex-col justify-between transition-all duration-300 text-left ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">Service Scope</h4>
                    <ul className="flex flex-col gap-2">
                      {svc.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-[10px] text-zinc-300">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${svc.bulletColor}`} />
                          <span className="font-light leading-normal">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    id={`services-cta-${sIdx}`}
                    href="#contact"
                    className="inline-flex self-start items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-400 hover:text-emerald-350"
                  >
                    <span>Request Custom Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Floating guide text */}
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 group-hover/card:text-zinc-300 mt-4">
                  <span>Scope details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/card:translate-x-1 transition-transform" />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
