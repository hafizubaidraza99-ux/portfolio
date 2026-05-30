import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, PhoneCall, CreditCard, Filter, Share2, FileText, 
  ArrowUpRight, GitFork, ChevronRight, CheckCircle, AlertCircle, Sparkles, AlertTriangle
} from 'lucide-react';

interface ProjectType {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  tagline: string;
  problem: string;
  solution: string;
  technologies: string[];
  businessImpact: string;
  demoUrl: string;
  gitUrl: string;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const projectsData: ProjectType[] = [
    {
      id: 'support-agent',
      title: 'AI Customer Support Agent',
      category: 'ai',
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      tagline: 'Autonomous email triage & customer support ticket routing',
      problem: 'A fast-growing SaaS startup was drowning in support tickets, with manual response times exceeding 24 hours, leading to user churn and stressed support teams.',
      solution: 'Designed and deployed an n8n workflow connected to Zendesk and OpenAI GPT-4o. The system automatically categorizes issue sentiment, retrieves user subscription details from Stripe, matches tickets with custom FAQ knowledge chunks, drafts highly personalized replies, and alerts human operators for major bugs.',
      technologies: ['n8n', 'OpenAI API', 'Vector Database', 'Stripe API', 'Zendesk SDK', 'JavaScript'],
      businessImpact: 'Reduced average response times from 24 hours to under 3 minutes. Automated 65% of standard tier-1 tickets, resulting in a 40% reduction in support agent fatigue and a 14% increase in user retention.',
      demoUrl: '#demo',
      gitUrl: '#github'
    },
    {
      id: 'whatsapp-automation',
      title: 'WhatsApp Business Automation System',
      category: 'agents',
      icon: <PhoneCall className="w-5 h-5 text-emerald-400" />,
      tagline: 'Interactive conversational chat AI with live database lookup',
      problem: 'An e-commerce business was losing high-intent buyers because customer inquiries on WhatsApp were not answered during off-hours, leading to high drop-offs and lost revenues.',
      solution: 'Engineered a highly resilient 24/7 WhatsApp CRM bot using the n8n WhatsApp Business Cloud API and Claude-3-Haiku. The system acts as a conversational sales assistant, checks real-time product quantities in a PostgreSQL database via REST APIs, handles automated bookings, and generates secure payment links.',
      technologies: ['n8n', 'WhatsApp API', 'Claude API', 'PostgreSQL', 'REST API', 'NodeJS'],
      businessImpact: 'Generated an 18% increase in overall sales conversions. Managed over 15,000 distinct conversations monthly without downtime. Improved off-hour response rate to 100%.',
      demoUrl: '#demo',
      gitUrl: '#github'
    },
    {
      id: 'payment-sync',
      title: 'Payment Gateway Integration Automation',
      category: 'integrations',
      icon: <CreditCard className="w-5 h-5 text-orange-400" />,
      tagline: 'Multi-platform transactional syncer with live ledger logic',
      problem: 'A B2B distributor struggled with discrepancies between Stripe, PayPal, Quickbooks, and their main inventory database, causing human entry errors and audit delays.',
      solution: 'Created an Event-Driven Webhook receiver workflow in n8n. It captures live payment events from multiple processors, validates the payload, standardizes tax rates, reconciles orders in Quickbooks, updates the supply ledger in real-time, and notifies the accounts division in Slack if a transaction remains unresolved.',
      technologies: ['n8n', 'Stripe Webhooks', 'PayPal API', 'QuickBooks SDK', 'Slack Integration', 'NodeJS'],
      businessImpact: 'Bypassed 40+ hours per month of manual bookkeeping labor. Maintained a 0.00% error margin across $1.2M+ in monthly transactions. Provided instantaneous audit-ready tax alignment.',
      demoUrl: '#demo',
      gitUrl: '#github'
    },
    {
      id: 'lead-qualification',
      title: 'AI Lead Qualification Workflow',
      category: 'ai',
      icon: <Filter className="w-5 h-5 text-blue-400" />,
      tagline: 'Automated scraping, AI grading, and HubSpot direct routing',
      problem: 'Sales executives spent huge amounts of hours sorting through hundreds of low-intent inbound interest forms daily, resulting in late follow-ups on five-figure prospects.',
      solution: 'Engineered a pipeline that intercepts lead submissions via Typeform, enriches data using Apollo API and Google Maps, uses Claude to score the lead according to custom BANT criteria, draft personal custom outreach emails in Drafts, and automatically assigns qualified leads to sales reps based on geo-regions in HubSpot.',
      technologies: ['n8n', 'Apollo SDK', 'Claude API', 'HubSpot Integration', 'Typeform Webhook', 'Python'],
      businessImpact: 'Boosted high-intent lead response rate times from 12 hours to 4 minutes. Increased overall sales productivity by 35% by completely eliminating unqualified cold outreach tasks.',
      demoUrl: '#demo',
      gitUrl: '#github'
    },
    {
      id: 'social-media',
      title: 'Social Media Content Automation',
      category: 'agents',
      icon: <Share2 className="w-5 h-5 text-purple-400" />,
      tagline: 'AI content generator and auto-publisher pipeline',
      problem: 'A marketing team struggled to maintain a consistent posting frequency across LinkedIn, Twitter, and Facebook due to manual copywriting and imagery holdups.',
      solution: 'Developed an n8n workflow that queries fresh industry news via RSS, uses GPT-4o to write highly relevant drafts tailored for different social networks, schedules publication in Buffer, and formats corresponding performance visual layouts.',
      technologies: ['n8n', 'GPT-4o API', 'RSS Scrapers', 'Buffer API', 'Bannerbear API', 'Stable Diffusion'],
      businessImpact: 'Maintained a 100% consistent posting track across 3 networks with zero overhead. Drove a 130% increase in brand impressions and 45% increase in user click-through page rates.',
      demoUrl: '#demo',
      gitUrl: '#github'
    },
    {
      id: 'doc-analysis',
      title: 'Document Processing & AI Analysis System',
      category: 'integrations',
      icon: <FileText className="w-5 h-5 text-emerald-400" />,
      tagline: 'Autonomous invoice OCR, validation, and accounting sync',
      problem: 'A logistics business received hundreds of invoice PDFs in various formats weekly, requiring workers to manually input data, which led to high error rates and late fees.',
      solution: 'Designed an advanced OCR and document parser pipeline using n8n and GPT-4o-mini Vision. The workflow detects incoming PDFs from Gmail attachments, converts them to structured JSON payloads, automatically validates total math, and syncs invoice tables directly to financial ledger sheets and QuickBooks databases.',
      technologies: ['n8n', 'GPT-4o Vision', 'PDF Parser', 'Google Drive API', 'QuickBooks', 'Gmail Webhooks'],
      businessImpact: 'Cut processing invoice costs by 80%. Reduced typical document entry cycles from 6 days to 1.5 minutes. Maintained a 99.8% precision rating across complex multiphase document scans.',
      demoUrl: '#demo',
      gitUrl: '#github'
    },
  ];

  const categoriesList = [
    { name: 'All Workflows', value: 'all' },
    { name: 'AI & Agents', value: 'ai' },
    { name: 'n8n Integrations', value: 'integrations' },
    { name: 'Autonomous Systems', value: 'agents' },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="relative py-24 bg-zinc-950/60 scroll-mt-10">
      
      {/* Background lights */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div id="projects-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-blue-400 font-mono uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full">
            Project Index
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-4">
            Production-Grade Automation Deployments
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans mt-3 font-light">
            Explore absolute high-fidelity case studies of AI-powered workflows, APIs, and microservice connectors engineered to yield tangible business efficiency.
          </p>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
            {categoriesList.map((cat) => (
              <button
                key={cat.value}
                id={`project-tab-${cat.value}`}
                onClick={() => setActiveTab(cat.value)}
                className={`px-4 py-2 text-xs font-mono font-medium rounded-full border transition-all ${
                  activeTab === cat.value 
                    ? 'bg-emerald-500 text-black border-emerald-400' 
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-2xl p-6 border border-zinc-800/80 flex flex-col justify-between text-left group hover:border-zinc-700/60 transition-all focus-within:ring-2 focus-within:ring-emerald-500"
            >
              
              {/* Card Top: Icon, Category */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80 w-fit group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-zinc-900/60 border border-zinc-800 font-mono text-[9px] text-zinc-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs text-zinc-400 font-sans mt-2 mb-6 font-light">
                  {project.tagline}
                </p>

                {/* Simulated live visual dashboard wrapper per-card based on ID */}
                <div className="mb-6 rounded-xl bg-zinc-950/90 border border-zinc-900/80 p-3.5 h-[124px] overflow-hidden flex flex-col justify-between font-mono text-[9px] text-zinc-500 relative">
                  
                  {project.id === 'support-agent' && (
                    <>
                      <div className="flex justify-between border-b border-zinc-900 pb-1.5 mb-1.5">
                        <span className="text-emerald-400 font-semibold">TICKET MONITOR_</span>
                        <span className="text-zinc-600">ID: #40921</span>
                      </div>
                      <div className="flex flex-col gap-1 text-left">
                        <div className="flex items-center gap-1.5 text-zinc-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
                          <span>E-mail Incoming: "Refund request"</span>
                        </div>
                        <div className="text-zinc-500">→ Analysing sentiment... [Urgent]</div>
                        <div className="text-emerald-500">→ OpenAI GPT Drafted Refund policy response Email</div>
                      </div>
                      <div className="flex justify-between items-center text-[8px] text-zinc-600 mt-1">
                        <span>API_OK: 200</span>
                        <span>LATENCY: 1.2s</span>
                      </div>
                    </>
                  )}

                  {project.id === 'whatsapp-automation' && (
                    <>
                      <div className="flex justify-between border-b border-zinc-900 pb-1.5 mb-1.5">
                        <span className="text-emerald-400 font-semibold">WHATSAPP CLOUD API_</span>
                        <span className="text-zinc-600">LIVE CHAT</span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <div className="text-zinc-500 self-start text-[8px] bg-zinc-900 px-1.5 py-0.5 rounded">User: "Is item A in stock?"</div>
                        <div className="text-emerald-400 self-end text-[8px] bg-emerald-950/20 border border-emerald-900/50 px-1.5 py-0.5 rounded">Bot: "Let me check database..."</div>
                        <div className="text-[8px] text-emerald-500">→ SQL query: SUCCESS (12 items left)</div>
                      </div>
                    </>
                  )}

                  {project.id === 'payment-sync' && (
                    <>
                      <div className="flex justify-between border-b border-zinc-900 pb-1.5 mb-1.5">
                        <span className="text-orange-400 font-semibold">STRIPE EVENT LEDGER_</span>
                        <span className="text-zinc-600">SYNC WORKFLOW</span>
                      </div>
                      <div className="text-left flex flex-col gap-1">
                        <div className="text-zinc-400">⚡ Webhook: charge.succeeded ($450.00)</div>
                        <div className="text-zinc-500">→ Syncing QuickBooks ledger API...</div>
                        <div className="text-emerald-500">✓ Sync Completed. Invoice #12B generated.</div>
                      </div>
                    </>
                  )}

                  {project.id === 'lead-qualification' && (
                    <>
                      <div className="flex justify-between border-b border-zinc-900 pb-1.5 mb-1.5">
                        <span className="text-blue-400 font-semibold">LEAD SCORE PIPELINE_</span>
                        <span className="text-zinc-600">HUBSPOT ROUTER</span>
                      </div>
                      <div className="text-left flex flex-col gap-1">
                        <div className="text-zinc-300">🏢 Inbound: DevCorp Systems</div>
                        <div className="text-zinc-400">→ Enriching via Apollo... Tech Stack: React, n8n</div>
                        <div className="text-emerald-500">✓ Leader Qualification: High Intent (92/100)</div>
                      </div>
                    </>
                  )}

                  {project.id === 'social-media' && (
                    <>
                      <div className="flex justify-between border-b border-zinc-900 pb-1.5 mb-1.5">
                        <span className="text-purple-400 font-semibold">AUTONOMOUS WRITER_</span>
                        <span className="text-zinc-600">RSS MONITOR</span>
                      </div>
                      <div className="text-left flex flex-col gap-1">
                        <div className="text-zinc-400">📄 Industry News: "AI Agents rise..."</div>
                        <div className="text-zinc-500">→ Generating customized post text via Claude...</div>
                        <div className="text-purple-400">✓ Scheduled in Buffer queue (17:30 UTC)</div>
                      </div>
                    </>
                  )}

                  {project.id === 'doc-analysis' && (
                    <>
                      <div className="flex justify-between border-b border-zinc-900 pb-1.5 mb-1.5">
                        <span className="text-emerald-400 font-semibold">DOCUMENT PARSER_</span>
                        <span className="text-zinc-600">VISION OCR</span>
                      </div>
                      <div className="text-left flex flex-col gap-1">
                        <div className="text-zinc-400">📁 Attached: invoice_10291_Logistics.pdf</div>
                        <div className="text-zinc-500">→ Extracting amounts, taxes, terms...</div>
                        <div className="text-emerald-400">✓ Exported to Ledger table. No errors.</div>
                      </div>
                    </>
                  )}
                  
                  {/* Subtle decorative grid lines */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.02),transparent)] pointer-events-none" />
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[9px] font-mono font-medium text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-zinc-900 text-[9px] font-mono font-medium text-zinc-600">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action triggers */}
              <div className="flex items-center justify-between border-t border-zinc-900/60 pt-4 mt-auto">
                <button
                  id={`view-details-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-350 transition-colors group/btn cursor-pointer"
                >
                  <span>Read Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-2">
                  <a
                    id={`demo-link-${project.id}`}
                    href="#contact"
                    className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800/80 text-zinc-500 hover:text-white transition-colors"
                    title="Live Simulation Demo"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    id={`git-link-${project.id}`}
                    href="#contact"
                    className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800/80 text-zinc-500 hover:text-white transition-colors"
                    title="GitHub Repository"
                  >
                    <GitFork className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Full Dialog Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              id="projects-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#09090b]/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              id="projects-modal-body"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh] text-left z-10"
            >
              
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 font-mono text-[9px] text-emerald-400 uppercase tracking-widest">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-2">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  id="close-project-modal"
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-850 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>

              {/* Core Content */}
              <div className="flex flex-col gap-6">
                
                {/* Problem Statement */}
                <div className="p-4 bg-red-950/20 border border-red-900/40 rounded-xl">
                  <div className="flex items-center gap-2 mb-2 text-red-400 font-display font-bold text-xs uppercase tracking-wide">
                    <AlertTriangle className="w-4 h-4" />
                    <span>The Problem</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-4 bg-emerald-950/20 border border-emerald-900/40 rounded-xl">
                  <div className="flex items-center gap-2 mb-2 text-emerald-400 font-display font-bold text-xs uppercase tracking-wide">
                    <Sparkles className="w-4 h-4" />
                    <span>Workflow Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Business Impact */}
                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
                  <div className="flex items-center gap-2 mb-2 text-white font-display font-bold text-xs uppercase tracking-wide">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Business Impact & ROI</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {selectedProject.businessImpact}
                  </p>
                </div>

                {/* Technologies List */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">
                    Technologies Implemented
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick actions direct to contact form */}
                <div className="flex items-center gap-3 mt-4 border-t border-zinc-900/80 pt-5">
                  <a
                    id="modal-request-similar"
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-center font-semibold text-xs transition-colors"
                  >
                    Request Similar Automation
                  </a>
                  <a
                    id="modal-cta-call"
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="py-3 px-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-850 text-white text-center font-medium text-xs transition-colors"
                  >
                    Consult for Details
                  </a>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
