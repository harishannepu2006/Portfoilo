import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { Heart, Github, Mail, ArrowUp } from 'lucide-react';
import { Linkedin } from './Icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-primary/20 backdrop-blur-3xl overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-20 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        
        {/* Brand & Rights */}
        <div className="text-center md:text-left space-y-4">
          <div className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer" onClick={scrollToTop}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue via-accent-purple to-accent-pink flex items-center justify-center p-2 group-hover:rotate-12 transition-transform">
               <span className="text-white font-black text-xs uppercase tracking-tighter">AI</span>
            </div>
            <h3 className="text-2xl font-black text-white tracking-tighter">
              HARISH<span className="text-accent-blue">.</span>
            </h3>
          </div>
          <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">
            © {new Date().getFullYear()} — Built with passion & AI
          </p>
        </div>

        {/* Dynamic Center: Signature */}
        <div className="flex items-center gap-4 text-slate-400 font-medium">
           <span>Crafted with</span>
           <motion.div
             animate={{ scale: [1, 1.2, 1] }}
             transition={{ duration: 1.5, repeat: Infinity }}
           >
             <Heart className="w-6 h-6 text-accent-pink fill-accent-pink/20" />
           </motion.div>
           <span>by <span className="text-white font-bold tracking-tight">Harish Annepu</span></span>
        </div>

        {/* Socials & Scroll to Top */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex items-center gap-6">
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl glass-card text-slate-400 hover:text-white transition-all hover:-translate-y-2 group">
              <Github className="w-6 h-6" />
            </a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl glass-card text-slate-400 hover:text-white transition-all hover:-translate-y-2 group">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="p-3 rounded-2xl glass-card text-slate-400 hover:text-white transition-all hover:-translate-y-2 group">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button 
             onClick={scrollToTop}
             className="flex items-center gap-4 py-2 px-6 rounded-full glass-card border-white/10 text-slate-400 hover:text-accent-blue hover:border-accent-blue/40 transition-all font-mono text-xs uppercase tracking-[0.2em]"
          >
             Back to Top
             <ArrowUp className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Extreme Bottom Bar */}
      <div className="mt-12 text-center border-t border-white/5 pt-8">
        <p className="text-[10px] text-slate-700 font-mono tracking-[0.5em] uppercase">
          Neural Architecture // Full-Stack Intelligence // Data Science Excellence
        </p>
      </div>
    </footer>
  );
};

export default Footer;
