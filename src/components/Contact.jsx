import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import emailjs from '@emailjs/browser';
import { 
  Send, 
  Mail, 
  MapPin, 
  Loader2, 
  CheckCircle2, 
  AlertCircle,
  Github,
  ArrowRight
} from 'lucide-react';
import { Linkedin } from './Icons';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Basic spam protection
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }
    if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent discard for bots
    
    if (!validate()) return;

    setStatus('sending');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'New Portfolio Inquiry',
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_pgahv4k',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_wxf3b0n',
        templateParams
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
        
        {/* Glow Decor */}
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Left Side: Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="space-y-12 relative z-10"
        >
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none group">
              Let's <span className="gradient-text group-hover:animate-pulse">Collaborate</span>
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-accent-blue via-accent-purple to-transparent rounded-full" />
            <p className="text-slate-400 text-xl font-medium max-w-lg leading-relaxed">
              Have a project in mind or want to discuss AI integrations? Drop me a message, 
              and I'll get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-3xl glass-card text-accent-blue group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">Email Me</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-2xl font-black text-white hover:text-accent-blue transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
            </div>

            <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-3xl glass-card text-accent-purple group-hover:shadow-[0_0_20px_rgba(123,47,255,0.2)] transition-all">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">Location</p>
                  <p className="text-2xl font-black text-white">Hyderabad, India</p>
                </div>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-10 border-t border-white/5 w-fit">
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" 
                 className="p-4 rounded-2xl glass-card text-slate-400 hover:text-white transition-all hover:-translate-y-2">
                <Github className="w-7 h-7" />
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" 
                 className="p-4 rounded-2xl glass-card text-slate-400 hover:text-white transition-all hover:-translate-y-2">
                <Linkedin className="w-7 h-7" />
              </a>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative z-10 lg:pl-10"
        >
          <div className="glass-card p-10 md:p-14 rounded-[3.5rem] border-white/10 shadow-2xl relative overflow-hidden">
            
            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              {/* Name Input */}
              <div className="relative group">
                <label className={`absolute left-0 -top-7 transition-all duration-300 font-mono text-xs tracking-widest uppercase ${formData.name ? 'text-accent-blue opacity-100' : 'text-slate-500 opacity-60'}`}>
                   Full Name <span className="text-accent-pink">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full bg-transparent border-b-2 py-4 text-xl font-bold text-white transition-all focus:outline-none placeholder:text-slate-700 ${errors.name ? 'border-accent-pink' : 'border-white/10 focus:border-accent-blue'}`}
                />
                {errors.name && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute -bottom-6 left-0 text-accent-pink text-[10px] font-mono uppercase font-bold">{errors.name}</motion.p>}
              </div>

              {/* Email Input */}
              <div className="relative group">
                <label className={`absolute left-0 -top-7 transition-all duration-300 font-mono text-xs tracking-widest uppercase ${formData.email ? 'text-accent-blue opacity-100' : 'text-slate-500 opacity-60'}`}>
                   E-Mail Address <span className="text-accent-pink">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full bg-transparent border-b-2 py-4 text-xl font-bold text-white transition-all focus:outline-none placeholder:text-slate-700 ${errors.email ? 'border-accent-pink' : 'border-white/10 focus:border-accent-blue'}`}
                />
                {errors.email && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute -bottom-6 left-0 text-accent-pink text-[10px] font-mono uppercase font-bold">{errors.email}</motion.p>}
              </div>

              {/* Subject Input */}
              <div className="relative group">
                <label className={`absolute left-0 -top-7 transition-all duration-300 font-mono text-xs tracking-widest uppercase ${formData.subject ? 'text-accent-blue opacity-100' : 'text-slate-500 opacity-60'}`}>
                   Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  className="w-full bg-transparent border-b-2 border-white/10 py-4 text-xl font-bold text-white transition-all focus:outline-none focus:border-accent-blue placeholder:text-slate-700"
                />
              </div>

              {/* Message Input */}
              <div className="relative group">
                <label className={`absolute left-0 -top-7 transition-all duration-300 font-mono text-xs tracking-widest uppercase ${formData.message ? 'text-accent-blue opacity-100' : 'text-slate-500 opacity-60'}`}>
                   Your Message <span className="text-accent-pink">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell me about your idea..."
                  className={`w-full bg-transparent border-b-2 py-4 text-xl font-bold text-white transition-all focus:outline-none resize-none placeholder:text-slate-700 ${errors.message ? 'border-accent-pink' : 'border-white/10 focus:border-accent-blue'}`}
                />
                {errors.message && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute -bottom-6 left-0 text-accent-pink text-[10px] font-mono uppercase font-bold">{errors.message}</motion.p>}
              </div>

              {/* Honeypot (Spam Protection) */}
              <input 
                type="text" 
                name="honeypot" 
                value={formData.honeypot} 
                onChange={handleChange} 
                className="hidden" 
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`w-full relative py-6 rounded-[2rem] font-black text-lg transition-all overflow-hidden flex items-center justify-center gap-4 group/btn shadow-2xl ${
                  status === 'success' ? 'bg-emerald-500' : 'bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink'
                } group-hover:scale-[1.02] active:scale-95`}
              >
                <AnimatePresence mode="wait">
                  {status === 'sending' ? (
                    <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                      <Loader2 className="w-7 h-7 animate-spin" />
                      <span className="uppercase tracking-[0.2em]">Deploying...</span>
                    </motion.div>
                  ) : status === 'success' ? (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-3">
                      <CheckCircle2 className="w-7 h-7" />
                      <span className="uppercase tracking-[0.2em]">Message Sent</span>
                    </motion.div>
                  ) : (
                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                      <span className="uppercase tracking-[0.2em]">Send Intelligence</span>
                      <Send className="w-7 h-7 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform" />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Button Glow Layer */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </button>

              {/* Error Toast */}
              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="p-4 bg-accent-pink/10 border border-accent-pink/40 rounded-2xl flex items-center gap-4 text-accent-pink font-bold"
                >
                  <AlertCircle className="w-6 h-6" />
                  <span>Failed to deliver message. Please retry.</span>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
