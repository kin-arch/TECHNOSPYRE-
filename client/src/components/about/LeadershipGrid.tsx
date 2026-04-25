import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Globe } from 'lucide-react';
import { leadership } from '../../data/about';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const } }),
};

export const LeadershipGrid: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="team" className="py-24 md:py-28 bg-background border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-3">Our Team</p>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Meet Our Team
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We're a cross-functional crew product, engineering, design, and customer success working as one team with our clients.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-all hover:brightness-110"
            >
              Work with us
            </Link>
          </div>
        </div>

        <ul data-about-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 list-none p-0 m-0">
          {leadership.map((member, i) => (
            <motion.li
              data-about-item
              key={member.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-24px' }}
              custom={i * 0.04}
              data-about-glow
              onMouseMove={handleMouseMove}
              className="h-full group relative overflow-hidden rounded-sm"
            >
              <div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                  background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(251, 146, 60, 0.12), transparent 40%)`,
                }}
              />
              <article className="h-full flex flex-col items-center rounded-sm border border-border bg-card px-5 pb-6 pt-8 text-center shadow-sm transition-all hover:border-primary/35 hover:shadow-md relative z-20">
                <div className="relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    width={112}
                    height={112}
                    loading="lazy"
                    className="h-28 w-28 rounded-sm object-cover ring-2 ring-border"
                  />
                </div>
                <h3 className="font-headline mt-5 text-lg font-bold text-foreground">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground leading-relaxed">{member.desc}</p>
                <div className="mt-5 flex items-center justify-center gap-3">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={member.social.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label={`${member.name} on X`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={member.social.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label={`${member.name} profile`}
                  >
                    <Globe size={18} />
                  </a>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
