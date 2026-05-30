import { motion } from 'motion/react';
import { ShieldCheck, Target, Zap, Award, Briefcase, FileCode } from 'lucide-react';

export default function About() {
  const profileImage = '/src/assets/images/portfolio_avatar_1780124366493.png';

  const capabilities = [
    {
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      title: 'Workflow Engineering',
      desc: 'Architecting ultra-reliable, lightning-fast pipelines in n8n, Make, and code that seamlessly interconnect multiple platforms.'
    },
    {
      icon: <Target className="w-5 h-5 text-orange-400" />,
      title: 'AI Agent Architecture',
      desc: 'Developing specialized AI agents using OpenAI, Claude, LangChain, and advanced prompt engineering to automate decision-making.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
      title: 'Business Optimization',
      desc: 'Analyzing legacy operations to replace tedious manual tasks with highly robust autonomous solutions, saving thousands of hours.'
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-zinc-950/40 border-y border-zinc-900/50">
      <div id="about-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">
            The Engineer
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-4">
            Optimizing Business Operations with Intelligent Autonomy
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans mt-3 font-light">
            I bridges the gap between complex AI capabilities and real-world business productivity.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block - Image & Highlight */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              id="about-portrait-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group"
            >
              <img
                id="about-portrait"
                src={profileImage}
                alt="Hafiz Ubaid Raza"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out py-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
              
              {/* Overlapping small info badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-left">
                <p className="text-xs font-semibold text-white">Hafiz Ubaid Raza</p>
                <p className="text-[10px] text-zinc-400 font-mono mt-0.5">AI Automation Architect & Lead Dev</p>
              </div>
            </motion.div>

            {/* Micro details row */}
            <div className="flex gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-mono text-zinc-400">5+ Years Dev Exp</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-mono text-zinc-400">n8n Expert</span>
              </div>
            </div>
          </div>

          {/* Right Block - Description & Focus */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left">
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Hi, I'm Hafiz Ubaid Raza.
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                I am a specialized **AI Automation Specialist** and **n8n Workflow Engineer** dedicated to designing, implementation, and maintenance of advanced intelligent workflows and AI agents. I empower operations, sales, customer care, and operations squads to bypass trivial routines via state-of-the-art automatons.
              </p>
              <p className="text-zinc-400 text-sm font-light leading-relaxed mt-4">
                With a deep technical foundation in JavaScript, REST APIs, and database structures, I write custom logic wrappers that stretch popular low-code platforms beyond standard limits. Whether creating localized multi-step AI agents or syncing multi-billion-node enterprise CRMs, I focus on building sustainable, scalable business code.
              </p>
            </div>

            {/* Core Capability Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="p-4 rounded-xl bg-zinc-900 border border-zinc-800/80 text-left flex flex-col gap-2.5 hover:border-zinc-700 transition-all"
                >
                  <div className="p-1.5 rounded-lg bg-zinc-950 w-fit border border-zinc-800">
                    {cap.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-display font-semibold text-white">{cap.title}</h4>
                    <p className="text-[11px] text-zinc-500 mt-1 font-light leading-normal">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
