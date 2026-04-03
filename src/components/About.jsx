import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { CheckCircle, Award, Target, Sparkles } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="about" className="section-padding bg-primary/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-black">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full" />
          </div>
          
          <p className="text-xl text-slate-400 leading-relaxed">
            {personalInfo.about.intro}
          </p>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {personalInfo.about.highlights.map((highlight, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex items-start gap-4 p-4 glass-card rounded-2xl glass-card-hover group"
              >
                <div className="p-2 rounded-xl bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue/20 transition-all">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-slate-300 leading-tight">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative px-12"
        >
          <div className="relative aspect-square max-w-[400px] mx-auto">
            {/* Background Decorative Rings */}
            <div className="absolute inset-0 border-2 border-accent-blue/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border-2 border-accent-purple/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 border-2 border-accent-pink/20 rounded-full animate-[spin_20s_linear_infinite]" />
            
            {/* Center Content */}
            <div className="absolute inset-12 glass-card rounded-full flex flex-col items-center justify-center text-center p-8 border-white/20 animate-glow">
              <Sparkles className="w-12 h-12 text-accent-blue mb-4 animate-glow-pulse" />
              <h3 className="text-6xl font-black text-white leading-none">AI</h3>
              <p className="text-accent-blue font-mono text-sm tracking-widest mt-2 uppercase">Focused</p>
            </div>

            {/* Floating Stats/Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-card py-3 px-5 rounded-2xl border-accent-blue/30 shadow-xl"
            >
              <Award className="w-5 h-5 text-accent-blue" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 glass-card py-3 px-5 rounded-2xl border-accent-purple/30 shadow-xl"
            >
              <Target className="w-5 h-5 text-accent-purple" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
