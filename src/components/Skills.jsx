import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { Code2, BarChart3, Brain, Wrench } from 'lucide-react';

const iconMap = {
  Code2,
  BarChart3,
  Brain,
  Wrench
};

const SkillCard = ({ category, icon, items, index }) => {
  const IconComponent = iconMap[icon] || Code2;

  // Category-specific colors for a premium feel
  const glowColors = [
    'group-hover:shadow-[0_0_30px_rgba(0,212,255,0.25)] group-hover:border-accent-blue/50',
    'group-hover:shadow-[0_0_30px_rgba(123,47,255,0.25)] group-hover:border-accent-purple/50',
    'group-hover:shadow-[0_0_30px_rgba(255,45,149,0.25)] group-hover:border-accent-pink/50',
    'group-hover:shadow-[0_0_30px_rgba(0,255,160,0.25)] group-hover:border-emerald-400/50'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-card p-8 md:p-10 rounded-[2.5rem] glass-card-hover group relative overflow-hidden h-full ${glowColors[index % 4]}`}
    >
      <div className="relative z-10 space-y-10">
        <div className="flex items-center gap-6">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all duration-500">
            <IconComponent className="w-10 h-10 text-accent-blue group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
          </div>
          <h3 className="text-3xl font-black tracking-tighter text-white">{category}</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {items.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="px-5 py-2.5 rounded-2xl bg-white/5 border border-white/5 text-slate-300 font-bold text-sm hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-default"
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4 mb-20"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
          Core <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mx-auto" />
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Leveraging a diverse toolkit to process data, train intelligent models, and build high-performance applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {skills.map((skillGroup, index) => (
          <SkillCard key={index} {...skillGroup} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-20 p-8 glass-card rounded-3xl border-white/5 text-center"
      >
        <p className="text-slate-400 font-medium italic">
          "Continuously expanding my expertise in LLMs, Neural Networks, and Cloud-native AI architectures..."
        </p>
      </motion.div>
    </section>
  );
};

export default Skills;
