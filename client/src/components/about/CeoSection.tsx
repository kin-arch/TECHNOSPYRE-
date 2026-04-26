import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Globe } from 'lucide-react';
import { leadership } from '../../data/about';

export const CeoSection: React.FC = () => {
  const ceo = leadership[0];

  return (
    <section id="team" className="py-16 md:py-20 bg-background border-y border-outline-variant/30 overflow-hidden relative">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Leadership
            </div>
            
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-5 leading-tight">
              Vision Driven By <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Experience</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              <p>
                "We believe that great technology should feel invisible. Our goal has always been to build software that empowers teams, rather than complicating their daily workflows."
              </p>
              <p>
                "Every line of code we write is a step towards a more seamless future for our clients. We strive for excellence and are committed to your success."
              </p>
            </div>
            
            <div className="flex flex-col gap-1 mb-6 border-l-4 border-primary pl-4">
              <h3 className="text-xl font-bold text-foreground font-headline">{ceo.name}</h3>
              <p className="text-primary font-semibold tracking-wide uppercase text-xs">{ceo.role}</p>
            </div>

            <div className="flex gap-4">
              <a
                href={ceo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-container-low border border-outline-variant/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm"
                aria-label={`${ceo.name} on LinkedIn`}
              >
                <Linkedin size={18} />
              </a>
              <a
                href={ceo.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-container-low border border-outline-variant/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm"
                aria-label={`${ceo.name} on X`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={ceo.social.web}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-container-low border border-outline-variant/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm"
                aria-label={`${ceo.name} profile`}
              >
                <Globe size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Content (Image) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-[2.5rem] blur-2xl transform rotate-3 scale-105" />
            
            <div className="relative rounded-[2rem] overflow-hidden border border-outline-variant/40 shadow-2xl group bg-card">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 z-10" />
              <img
                src={ceo.img}
                alt={ceo.name}
                className="w-full h-[380px] md:h-[480px] object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-6 right-6 z-20 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <div className="bg-background/90 backdrop-blur-md border border-outline-variant/30 text-foreground px-5 py-3 rounded-2xl shadow-2xl max-w-xs">
                  <p className="font-semibold text-sm leading-relaxed text-muted-foreground">
                    <span className="text-primary font-bold">{ceo.name}</span> — {ceo.desc}
                  </p>
                </div>
              </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
};
