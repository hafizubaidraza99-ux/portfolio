import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, Terminal, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-4 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-900 shadow-lg' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div id="navbar-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <a 
              id="navbar-logo"
              href="#top" 
              className="flex items-center gap-2 group font-display font-bold text-xl tracking-tight text-white hover:text-emerald-400 transition-colors"
            >
              <div className="relative flex justify-center items-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/30 transition-all duration-300 overflow-hidden">
                <span className="text-emerald-500 font-mono text-sm group-hover:hidden shadow-sm">n8</span>
                <Cpu className="w-4 h-4 text-emerald-500 hidden group-hover:block animate-pulse" />
              </div>
              <span className="flex items-center gap-1">
                Ubaid<span className="text-zinc-500 font-normal">.</span>Raza
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav id="desktop-nav" className="hidden md:flex items-center gap-1 bg-zinc-950/40 p-1 rounded-full border border-zinc-800/60 backdrop-blur">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  className="px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white rounded-full transition-all hover:bg-zinc-900/60"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Quick Action */}
            <div className="hidden md:flex items-center">
              <a
                id="navbar-cta"
                href="https://pro.fiverr.com/s/qDWB8z9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-semibold font-sans transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5"
              >
                <span>Hire on Fiverr</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-zinc-400 hover:text-white transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-45 bg-[#09090b]/95 backdrop-blur-xl border-b border-zinc-900 py-6 px-4 flex flex-col gap-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-xl transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <hr className="border-zinc-900" />
            <div className="flex flex-col gap-2">
              <a
                id="mobile-cta-fiverr"
                href="https://pro.fiverr.com/s/qDWB8z9"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex justify-center items-center gap-1.5 w-full py-3.5 rounded-xl bg-emerald-500 text-black font-semibold text-sm hover:bg-emerald-400 transition-colors"
              >
                <span>Hire Me on Fiverr</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                id="mobile-cta"
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex justify-center items-center gap-1.5 w-full py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold text-sm hover:bg-zinc-850 transition-colors"
              >
                <span>Initiate Project Workspace</span>
                <Terminal className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
