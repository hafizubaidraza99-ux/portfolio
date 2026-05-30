import { motion } from 'motion/react';
import { Star, MessageSquare } from 'lucide-react';

interface TestimonialType {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: TestimonialType[] = [
    {
      name: 'Sarah Jenkins',
      role: 'VP of Operations',
      company: 'Logix Fulfillment Corp',
      text: 'Hafiz completely revolutionized our sorting workflow. He mapped out an elegant multi-step n8n automation connected directly to our logistics API & Slack. What used to take our dispatch crew hours now occurs in seconds, with error rates plunging near zero!',
      rating: 5
    },
    {
      name: 'Alexander Rostova',
      role: 'Founder & CEO',
      company: 'Stellar Agency Group',
      text: 'Having Hafiz on our integration pipeline was the single best technical investment we made this year. He built complex AI agents with structured outputs that categorize prospects instantly and route them in HubSpot. Absolute professional and master of automation.',
      rating: 5
    },
    {
      name: 'David Carter',
      role: 'Sales Director',
      company: 'Nexus Real Estate Holding',
      text: 'Our off-hours WhatsApp client drop-offs stopped overnight once Hafiz deployed our custom AI agent. The bot answers complex availability questions directly from our SQL system, and generates instant booking pipelines in our calendars seamlessly. Exceptional work!',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-zinc-950/20">
      
      {/* Background radial soft light blur */}
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div id="testimonials-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-blue-400 font-mono uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full">
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-4">
            Endorsed by Fast-Growing Businesses
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans mt-3 font-light">
            Real feedback from operational, lead gen, and agency directors who transformed their productivity through our automated systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, tIdx) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: tIdx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl glass-panel border border-zinc-800/80 flex flex-col justify-between text-left relative overflow-hidden group hover:border-zinc-700/60"
            >
              
              {/* Card Quote visual icon */}
              <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-850 w-fit mb-6 text-emerald-400">
                <MessageSquare className="w-4 h-4" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light italic flex-1 mb-6">
                "{test.text}"
              </p>

              {/* Footer Author details */}
              <div className="border-t border-zinc-900/80 pt-5 mt-auto flex items-center gap-3">
                
                {/* Simulated circle graphic badge initials */}
                <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-[10px] text-zinc-400 font-bold shrink-0">
                  {test.name.split(' ').map(n => n[0]).join('')}
                </div>

                <div>
                  <h4 className="text-xs font-display font-bold text-white leading-normal">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-zinc-550 font-mono mt-0.5 leading-none">
                    {test.role}, <span className="text-zinc-500">{test.company}</span>
                  </p>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
