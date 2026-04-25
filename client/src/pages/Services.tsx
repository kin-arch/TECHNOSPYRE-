import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, Building, Tv2, Palette, Cloud, Smartphone, Package, Brain, ArrowRight } from 'lucide-react';
import { technologies } from '@/data/about';
import SEO from '../components/SEO';

const Technologies: React.FC = () => {
  return (
    <>
      <SEO
        title="Technologies & Services | Technospyre"
        description="Explore our comprehensive technology stack and services including web development, software development, video editing, graphic design, and more."
      />

      {/* Hero Section */}
      <section className="relative py-14 md:py-16 px-6 sm:px-8 bg-gradient-to-br from-background via-background/95 to-muted/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,var(--primary)/5%,transparent)]" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-label text-primary text-xs font-bold tracking-[0.34em] uppercase mb-4 inline-flex items-center gap-2"
            >
              <Code2 size={14} />
              Our Technology Stack
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              Comprehensive <span className="text-primary">Technology & Services</span> Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              From web development and software engineering to video editing and graphic design,
              we bring together cutting-edge technologies and creative expertise to deliver
              exceptional results for your business.
            </motion.p>


             <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-2.5 md:px-8 md:py-3 text-sm md:text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight size={16} className="md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-card hover:border-primary/40 hover:bg-primary/5 px-6 py-2.5 md:px-8 md:py-3 text-sm md:text-base font-bold text-foreground transition-all duration-300"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-12 md:py-16 px-6 sm:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {technologies.map((tech, idx) => (
              <motion.article
                key={tech.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-sm border border-outline-variant bg-card p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover:border-primary/30"
              >
                <div className="absolute -inset-px rounded-sm bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-start gap-4 sm:gap-5 mb-5">
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-sm bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="font-headline text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors mb-1.5">
                        {tech.category}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tech.desc}
                      </p>
                    </div>
                  </div>

                  {/* Technology Items Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {tech.items.map((item, itemIdx) => (
                      <div
                        key={item.name}
                        className="flex items-center gap-2.5 rounded-sm bg-muted/30 border border-border/50 px-3 py-2.5 text-sm font-medium text-foreground group/item transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
                      >
                        <span className="text-primary flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110">
                          {item.icon}
                        </span>
                        <span className="truncate">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-12 md:py-16 px-6 sm:px-8 bg-muted/20 border-t border-border/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,var(--primary)/5%,transparent)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-16"
          >
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Complete Service Offerings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide end-to-end solutions across multiple domains to help your business thrive
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              {
                title: 'Web Development',
                desc: 'Modern, responsive websites and web applications built with cutting-edge technologies',
                icon: Code2,
                color: 'text-primary',
                bgColor: 'bg-primary/10',
              },
              {
                title: 'Software Development',
                desc: 'Custom enterprise software solutions tailored to your specific business needs',
                icon: Building,
                color: 'text-emerald-500',
                bgColor: 'bg-emerald-500/10',
              },
              {
                title: 'Video Editing',
                desc: 'Professional video content, motion graphics, and post-production services',
                icon: Tv2,
                color: 'text-purple-500',
                bgColor: 'bg-purple-500/10',
              },
              {
                title: 'Graphic Design',
                desc: 'Creative visual design, branding, and marketing materials',
                icon: Palette,
                color: 'text-pink-500',
                bgColor: 'bg-pink-500/10',
              },
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-sm border border-outline-variant bg-card p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30 cursor-pointer"
              >
                <div className="absolute -inset-px rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0" />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-sm ${service.bgColor} ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={24} />
                  </div>

                  <h3 className="font-headline text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {[
              {
                title: 'Mobile Development',
                desc: 'Cross-platform mobile apps for iOS and Android',
                icon: Smartphone,
                color: 'text-blue-500',
                bgColor: 'bg-blue-500/10',
              },
              {
                title: 'Cloud & DevOps',
                desc: 'Scalable infrastructure, deployment automation, and cloud solutions',
                icon: Cloud,
                color: 'text-cyan-500',
                bgColor: 'bg-cyan-500/10',
              },
              {
                title: 'Database Design',
                desc: 'Efficient data storage, management, and optimization',
                icon: Package,
                color: 'text-orange-500',
                bgColor: 'bg-orange-500/10',
              },
              {
                title: 'AI & Machine Learning',
                desc: 'Intelligent automation and predictive analytics solutions',
                icon: Brain,
                color: 'text-violet-500',
                bgColor: 'bg-violet-500/10',
              },
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                className="group relative rounded-sm border border-outline-variant bg-card p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30 cursor-pointer"
              >
                <div className="absolute -inset-px rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0" />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-sm ${service.bgColor} ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={24} />
                  </div>

                  <h3 className="font-headline text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-6 sm:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-muted/20 via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-sm border border-primary/20 bg-primary/5 p-8 sm:p-12 md:p-16"
          >
            <h3 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
              Ready to Build Something Amazing?
            </h3>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need a custom web application, enterprise software, stunning video content, or professional design,
              our team has the expertise and technology stack to bring your vision to life.
            </p>

             <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                Start Your Project
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-card px-8 py-3 text-sm font-bold text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Technologies;