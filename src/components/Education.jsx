import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { GraduationCap, Calendar, MapPin, School } from 'lucide-react';

const EducationItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-16 group"
    >
      {/* Date Desktop (Left/Right) */}
      <div className={`hidden md:flex flex-col ${isEven ? 'items-end' : 'items-start order-3'} justify-center`}>
        <span className="px-4 py-2 rounded-full glass-card border-accent-blue/30 text-accent-blue font-bold font-mono text-sm tracking-widest">
          {item.duration}
        </span>
      </div>

      {/* Axis & Dot */}
      <div className="flex flex-col items-center relative order-1 md:order-2">
        <div className="w-1 md:w-1.5 h-full bg-gradient-to-b from-white/5 via-accent-purple/20 to-white/5 absolute transition-all group-hover:via-accent-purple/50" />
        <div className="sticky top-1/2 -translate-y-1/2 z-10">
          <div className="w-12 h-12 rounded-2xl bg-primary border-4 border-accent-purple/40 shadow-[0_0_20px_rgba(123,47,255,0.3)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Card */}
      <div className={`order-3 md:order-1 ${isEven ? 'order-1' : 'order-3'} pb-12`}>
        <div className="glass-card p-10 rounded-3xl glass-card-hover relative group/card border-accent-purple/10 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/5 rounded-full blur-3xl -translate-y-16 translate-x-16 opacity-0 group-hover/card:opacity-100 transition-opacity" />
          
          <div className="space-y-6 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="text-2xl font-black text-white leading-tight">
                {item.degree}
              </h3>
              <span className="sm:hidden w-fit px-4 py-2 rounded-full glass-card border-accent-blue/30 text-accent-blue font-bold font-mono text-sm tracking-widest">
                {item.duration}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300 font-bold group-hover:text-accent-blue transition-colors">
                <School className="w-5 h-5" />
                <span className="text-lg">{item.institution}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 font-mono text-sm">
                <Calendar className="w-4 h-4" />
                <span>{item.duration}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
               <span className="text-slate-400 font-medium">Performance:</span>
               <span className="text-xl font-black gradient-text">
                 {item.score}
               </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section id="education" className="section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-4 text-accent-purple mb-2">
            <GraduationCap className="w-8 h-8" />
            <span className="font-mono font-bold tracking-[0.2em] uppercase text-sm">Learning Path</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mx-auto" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A solid academic foundation in MPC leading into specialized B.Tech studies with a focus on Data Science and AI.
          </p>
        </motion.div>

        <div className="space-y-0">
          {education.map((item, index) => (
            <EducationItem key={item.id} item={item} index={index} />
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="p-10 glass-card rounded-[2rem] border-accent-blue/10 text-center relative overflow-hidden"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-accent-purple/5 opacity-50" />
           <p className="text-slate-300 font-bold relative z-10 text-lg">
             "Pursuing excellence through continuous learning and practical implementation of AI architectures."
           </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
