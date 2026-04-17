import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, PlayCircle, BookOpen, Users, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

export const AcademyHero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-20 lg:pt-10 lg:pb-32 overflow-hidden bg-background">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none translate-x-1/3 -translate-y-1/4 z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3 z-0" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none opacity-20" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side text config */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide mb-8 shadow-sm">
                <Star size={14} className="fill-primary" /> The Gold Standard in IT Education
              </div>

              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground mb-6">
                Master the Code.<br />
                <span className="text-primary">Architect the Future.</span>
              </h1>
              
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-10">
                Join elite engineering programs crafted by industry leaders. Gain real-world experience, build production-ready software, and accelerate your tech career.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="#courses" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/30">
                  Explore Programs <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface-container border border-outline-variant text-foreground font-semibold px-8 py-4 rounded-lg transition-all shadow-sm">
                  <PlayCircle size={18} className="text-primary" /> Hear our story
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-medium text-muted-foreground">
                 <div className="flex items-center gap-2">
                   <CheckCircle2 size={18} className="text-green-500" /> Job Placement
                 </div>
                 <div className="flex items-center gap-2">
                   <CheckCircle2 size={18} className="text-green-500" /> Live Mentorship
                 </div>
                 <div className="flex items-center gap-2">
                   <CheckCircle2 size={18} className="text-green-500" /> Certifications
                 </div>
              </div>

            </motion.div>
          </div>

          {/* Right Side Floating Interface */}
          <div className="order-1 lg:order-2 w-full h-[450px] sm:h-[500px] lg:h-[600px] relative flex items-center justify-center perspective-1000">
            
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[85%] lg:w-[90%] h-[80%] rounded-2xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] border border-white/10 z-10"
            >
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80" alt="Students collaborating" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </motion.div>

            {/* Floating Stats Card - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-[5%] left-0 bg-surface-container/95 backdrop-blur-xl border border-outline-variant p-5 rounded-2xl shadow-xl flex items-center gap-4 z-30 transform-gpu hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20">
                <Users size={24} />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-foreground tracking-tight">10k+</div>
                <div className="text-sm text-muted-foreground font-medium">Active Students</div>
              </div>
            </motion.div>

            {/* Floating Stats Card - Top Left */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-[10%] -left-[5%] md:-left-10 bg-primary backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-2xl flex items-center gap-4 text-white z-30 transform-gpu hover:scale-105 transition-transform"
            >
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shadow-inner">
                <Cpu size={24} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-sm">Next.js Microservices</div>
                <div className="text-xs text-white/80 font-medium">Premium Course</div>
              </div>
            </motion.div>

            {/* Floating Play Button - Right middle */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, type: 'spring' }}
              className="absolute top-1/2 -translate-y-1/2 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.2)] border border-outline-variant cursor-pointer hover:scale-110 transition-transform z-30 group"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-60" />
              <PlayCircle size={32} className="text-primary group-hover:text-primary/80 transition-colors relative z-10" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
