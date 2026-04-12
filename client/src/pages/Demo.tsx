import React from 'react';
import { motion } from 'motion/react';
import { Bolt, ArrowRight, Monitor, Shield, Terminal, Check } from 'lucide-react';

const Demo = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background z-10"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZF3DKdx_ps2udRfjpYsyaaFCTvXLxl03gJOc-NKNVnVyBFb9g9Ba8sxDroaFdTt9ERkJCAJCidvYjrBSmrfRUuE-eg4Hb8ClKbRa-VNC1Wxfe2z6VbdyVlAvTgPESJ_Xrs2Y9JPmPF4iBqV17GYWqPmQ2VkGn2kuDqFtEbdRAyBguaDbiMtLnNrAST3t3cGj7gxZEZqeTIihPGM1gV8n_UpvG_KX3iKGGvLUSTF6Qo3oJKNfD5agkPzfDPnn5QbkBWS5MLHf2QaU" 
            alt="Legacy of Coders Demo Background" 
            className="w-full h-full object-cover opacity-[0.15] mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="container mx-auto relative z-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="font-label text-secondary text-xs font-bold tracking-[0.4em] uppercase mb-6 block">Experience the Future</span>
            <h1 className="font-headline text-5xl md:text-8xl font-bold leading-tight tracking-tight text-on-surface mb-8">
              Experience the <br/> <span className="text-primary italic">Future</span> of Infrastructure.
            </h1>
            <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
              Transform your digital ecosystem with Technospyre's proprietary AI-driven stack. Schedule a deep-dive demo with our solutions architects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Feature Section */}
      <section className="max-w-7xl mx-auto px-8 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-surface-container-low rounded-3xl p-10 border border-white/5 relative overflow-hidden group transition-all duration-500"
          >
            <div className="relative z-10">
              <h3 className="font-headline text-3xl font-bold mb-4 text-on-surface">Scalability Without Borders</h3>
              <p className="text-on-surface-variant max-w-md">Our global edge network ensures your applications perform with zero-lag, no matter where your users are located.</p>
              <div className="mt-12 flex gap-4">
                <span className="px-4 py-2 rounded-lg bg-surface-container text-primary font-label text-sm">Edge Clusters</span>
                <span className="px-4 py-2 rounded-lg bg-surface-container text-secondary font-label text-sm">Auto-Scale</span>
              </div>
            </div>
            <img 
              alt="Global Connectivity" 
              className="absolute -right-20 -bottom-20 w-3/4 opacity-20 group-hover:scale-110 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4-X-TXgI2ucXnHbVNDQtAY9NH4JB1rA5rKGrY5zuD7oDtkA2pozTrOTkSTRD4McRtOXd67ArpAVYvo8tHuo-9rxkGHAb-l2ignFSE-pD37AgN_kOMM_tar8ksYix_9vnl1tYtzT-9ykcyIVH6bi5r0JAGqu8EZZAoawo-7BrUkHrSn4ZawM06RCuWjy7Sg4XMEj12CBsfFpOiKu6h91OIdQcF12oTBSn0rYQkDon9ErQh0dFqdTVfhUnEbYnx3pxx5PqqRxQzwcI"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Small Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-surface-container-low rounded-3xl p-10 border border-white/5 flex flex-col justify-between transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold mb-2 text-on-surface">Military-Grade Security</h3>
              <p className="text-on-surface-variant text-sm">End-to-end encryption with zero-trust architecture built into the core.</p>
            </div>
          </motion.div>

          {/* Small Feature 2 */}
          <div className="bg-surface-container-low rounded-3xl p-10 border border-white/5 flex flex-col justify-between">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
              <Terminal className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold mb-2 text-on-surface">Dev-First Experience</h3>
              <p className="text-on-surface-variant text-sm">Comprehensive APIs and SDKs that work seamlessly with your existing workflow.</p>
            </div>
          </div>

          {/* Wide Feature */}
          <div className="md:col-span-2 bg-gradient-to-br from-surface-container-low to-surface-container rounded-3xl p-10 border border-white/5 flex items-center gap-12 overflow-hidden">
            <div className="flex-1">
              <h3 className="font-headline text-3xl font-bold mb-4 text-on-surface">Precision Monitoring</h3>
              <p className="text-on-surface-variant">Visualize every packet, every request, and every user interaction through our high-fidelity dashboard.</p>
            </div>
            <div className="flex-1 hidden lg:block">
              <div className="bg-background/80 p-4 rounded-xl border border-white/10 rotate-3">
                <div className="flex gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-error"></div>
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/5 rounded"></div>
                  <div className="h-2 w-3/4 bg-white/5 rounded"></div>
                  <div className="h-2 w-1/2 bg-primary/40 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-8 mb-20" id="form">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface-container-lowest rounded-[2rem] overflow-hidden border border-white/5 flex flex-col lg:flex-row shadow-2xl"
        >
          {/* Left: Content & Value Props */}
          <div className="flex-1 p-12 lg:p-16 bg-gradient-to-br from-surface-container-low to-transparent">
            <h2 className="font-headline text-4xl font-bold mb-8 text-on-surface">Are you Ready to Start your Project?</h2>
            <ul className="space-y-6 mb-12">
              {[
                { title: 'Customized Roadmap', desc: "We'll build a technical strategy tailored to your business goals." },
                { title: 'Direct Engineer Access', desc: "Speak with the architects, not just sales representatives." },
                { title: 'Transparent Pricing', desc: "Get a clear, modular breakdown of all implementation costs." },
              ].map((item, idx) => (
                <motion.li 
                  key={item.title} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="text-primary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-on-surface">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center gap-4 pt-8 border-t border-white/5">
              <img 
                alt="Advisor" 
                className="w-12 h-12 rounded-full object-cover transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq-8uk5fNvD6CTRVdmhzB2krrmqS3tewLR7WL4Ie9GXDrYTzvOpGnshLjiR3dzlfojb8ffsmvC3U6xjJph05wRkv6B1EDcwFV6dRg41ByOTkF6uwhf41wXEnI94-5BFZz4jRudyPF0ep1ADbPeUg8UwpN8_zuTndx-jIVCm8S-Bxpod1H5XRgqIConXvwPz8MgCbkkzO9-0c9Nno13DiUommTNHMYhcHYK7sA_N9gs-A3CW3O-Xn1-qrlsR2rXO7DDX-wb3FCBCeE"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-sm font-bold text-on-surface">David Chen</p>
                <p className="text-xs text-on-surface-variant">Lead Solutions Architect</p>
              </div>
            </div>
          </div>

          {/* Right: High-Contrast Form */}
          <div className="lg:w-[450px] bg-surface-container p-12 lg:p-16 border-l border-white/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <label className="block text-xs font-label text-on-surface-variant mb-2 uppercase tracking-widest">Full Name</label>
                <input 
                  className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 transition-all py-3 text-on-surface placeholder:text-on-surface-variant/30" 
                  placeholder="John Doe" 
                  type="text"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <label className="block text-xs font-label text-on-surface-variant mb-2 uppercase tracking-widest">Work Email</label>
                <input 
                  className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 transition-all py-3 text-on-surface placeholder:text-on-surface-variant/30" 
                  placeholder="john@company.com" 
                  type="email"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <label className="block text-xs font-label text-on-surface-variant mb-2 uppercase tracking-widest">Project Scope</label>
                <select className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 transition-all py-3 text-on-surface">
                  <option>Cloud Infrastructure</option>
                  <option>Cybersecurity Audit</option>
                  <option>AI Integration</option>
                  <option>Full Stack Dev</option>
                </select>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <label className="block text-xs font-label text-on-surface-variant mb-2 uppercase tracking-widest">Additional Details</label>
                <textarea 
                  className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 transition-all py-3 text-on-surface placeholder:text-on-surface-variant/30" 
                  placeholder="Tell us about your needs..." 
                  rows={3}
                ></textarea>
              </motion.div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(164,230,255,0.3)] hover:opacity-90 transition-all" 
                type="submit"
              >
                Submit Request
              </motion.button>
              <p className="text-[10px] text-center text-on-surface-variant uppercase tracking-tighter">
                By clicking submit, you agree to our Terms and Privacy Policy.
              </p>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Demo;
