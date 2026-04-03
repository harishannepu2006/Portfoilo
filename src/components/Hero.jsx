import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../data/portfolio';
import { Github, Mail, ArrowRight } from 'lucide-react';
import { Linkedin } from './Icons';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20 px-6">
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-accent-blue/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-accent-purple/10 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="max-w-4xl w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-blue font-mono font-medium tracking-widest text-sm uppercase">
            Greeting's from {personalInfo.name}
          </span>
          <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white drop-shadow-2xl">
            Building <span className="gradient-text">Intelligent</span> Systems
          </h1>
          
          <div className="mt-6 text-xl md:text-2xl text-slate-400 font-medium h-12">
            <TypeAnimation
              sequence={[
                'I am a Data Scientist',
                2000,
                'I am an AI Engineer',
                2000,
                'I am a Full-Stack Developer',
                2000,
                'I am a Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white border-r-2 border-accent-blue pr-1 animate-pulse"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto"
        >
          {personalInfo.about.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <a href="#projects" className="btn-primary group">
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="btn-secondary">
            Let's Talk
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center gap-6 pt-12"
        >
          <a 
            href={personalInfo.social.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          <a 
            href={personalInfo.social.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50 hidden md:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
