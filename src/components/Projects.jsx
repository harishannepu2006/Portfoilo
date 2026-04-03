import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { Github, ExternalLink, Code2, Layers, Cpu, Database, Layout, Brain, Home } from 'lucide-react';

const iconMap = {
  Brain,
  Home,
  Cpu
};

const ProjectCard = ({ project, index }) => {
  const IconComponent = iconMap[project.icon] || Cpu;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative flex flex-col min-h-[850px] glass-card rounded-[3rem] border border-white/5 hover:border-accent-blue/20 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_60px_120px_-30px_rgba(0,0,0,0.7)] z-0"
    >
      {/* Visual Header / Showcase */}
      <div className="h-64 md:h-80 relative overflow-hidden flex items-end p-8">
        {/* Background Layer (Gradient or Image) */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 transition-opacity duration-500 group-hover:opacity-30`} />

        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
          </>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40`} />
        )}

        {/* Floating Category Badge */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-500">
            <IconComponent className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent-blue mb-1">
              Category
            </span>
            <span className="text-white font-black text-sm uppercase tracking-widest">
              {project.tags[1]}
            </span>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-8 md:p-12 space-y-10 flex flex-col h-full bg-primary/20 backdrop-blur-sm">
        <div className="space-y-3">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block text-accent-purple font-mono font-bold text-xs uppercase tracking-[0.3em] bg-accent-purple/10 px-4 py-1.5 rounded-full border border-accent-purple/20"
          >
            {project.subtitle}
          </motion.span>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[0.9]">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-400 text-lg leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags Gallery */}
        <div className="flex flex-wrap gap-2.5">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 hover:text-white hover:border-white/20 transition-all transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-5 pt-8 border-t border-white/5 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-5 glass-card rounded-[1.5rem] flex items-center justify-center gap-4 text-white font-black hover:bg-white/10 hover:border-white/30 transition-all duration-500 group/btn shadow-xl"
          >
            <Github className="w-6 h-6 group-hover/btn:scale-125 group-hover/btn:rotate-12 transition-all duration-500" />
            <span className="text-sm uppercase tracking-widest">Source Code</span>
          </a>

          {project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 glass-card rounded-[1.5rem] text-white hover:bg-accent-blue/20 hover:border-accent-blue/40 transition-all duration-500 group/btn shadow-xl"
            >
              <ExternalLink className="w-6 h-6 group-hover/btn:scale-125 group-hover/btn:-rotate-12 transition-all duration-500" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};


const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-primary/20">
      <div className="max-w-7xl mx-auto space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-4 mb-2">
            <div className="w-10 h-0.5 bg-gradient-to-r from-accent-blue to-transparent rounded-full" />
            <span className="text-accent-blue font-mono font-bold tracking-[0.2em] uppercase text-sm">Portfolio</span>
            <div className="w-10 h-0.5 bg-gradient-to-l from-accent-blue to-transparent rounded-full" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto font-medium">
            Building interactive intelligence: from LLM-driven analysis platforms to precision predictive modeling systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center gap-6 pt-10"
        >
          <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">
            Searching for more? Explore my full Archive on GitHub
          </p>
          <a
            href="https://github.com/harishannepu2006"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-full border-2 border-white/5 text-white font-black hover:border-accent-blue/40 hover:bg-accent-blue/5 transition-all text-lg group"
          >
            Visit GitHub Profile
            <Github className="w-6 h-6 inline-block ml-3 group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
