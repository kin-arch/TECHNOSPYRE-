import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, PlayCircle, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { categories } from '../data/solutions';
import SEO from '../components/SEO';

// -- Mock data for layout matching --
const integrations = [
  { name: 'Notion integration', desc: 'Work faster and smarter by integrating directly with Notion, right in the app.', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
  { name: 'Slack integration', desc: 'Work faster and smarter by integrating directly with Slack, right in the app.', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
  { name: 'Google Drive integration', desc: 'Work faster and smarter by integrating directly with Google, right in the app.', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg' },
  { name: 'Intercom integration', desc: 'Work faster and smarter by integrating directly with Intercom, right in the app.', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Intercom_logo.svg/512px-Intercom_logo.svg.png' },
  { name: 'Jira integration', desc: 'Work faster and smarter by integrating directly with Jira, right in the app.', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Jira_Logo.svg' },
  { name: 'Dropbox integration', desc: 'Work faster and smarter by integrating directly with Dropbox, right in the app.', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg' },
];

const metrics = [
  { value: '400+', label: 'Projects completed' },
  { value: '600%', label: 'Return on investment' },
  { value: '10k', label: 'Global downloads' },
];

const faqs = [
  { q: 'Is there a free trial available?', a: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
  { q: 'Can I change my plan later?', a: 'Absolutely, you can upgrade or downgrade your plan at any time from your account settings.' },
  { q: 'What is your cancellation policy?', a: 'You can cancel your subscription at any time. Your access will remain active until the end of your current billing cycle.' },
  { q: 'Can other info be added to an invoice?', a: 'Yes, you can add custom details like your VAT number or company address in the billing settings.' },
  { q: 'How does billing work?', a: 'We bill you securely via credit card on a monthly or annual basis depending on your selected plan.' },
  { q: 'How do I change my account email?', a: 'You can update your account email directly from the profile settings panel.' },
];

// -- FAQ Accordion Item --
const FAQItem = ({ faq }: { faq: typeof faqs[0] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-outline-variant py-5">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <span className="font-semibold text-lg text-foreground">{faq.q}</span>
        <div className="w-6 h-6 rounded-full border border-outline-variant flex flex-shrink-0 items-center justify-center ml-4">
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            <ChevronDown size={14} className="text-muted-foreground" />
          </motion.div>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden text-muted-foreground mt-3 pr-12"
          >
            {faq.a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DashedPattern = ({ className }: { className?: string }) => (
  <svg className={`pointer-events-none ${className}`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <defs>
      <pattern id="slash-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 12 28 L 20 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#slash-pattern)" />
  </svg>
);

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    let found = null;
    for (const cat of categories) {
      const p = cat.products.find((prod) => prod.id === id);
      if (p) { found = p; break; }
    }
    setProduct(found);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
            <PlayCircle size={28} className="text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-3">Product Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-sm mx-auto">The solution you're looking for doesn't exist or may have been moved.</p>
          <Link to="/solutions" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
            <ArrowLeft size={16} /> Back to Solutions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20 min-h-screen bg-background overflow-x-hidden font-sans relative">
      <SEO title={`${product.name} | Technospyre`} description={product.shortDescription} />

      {/* External background pattern - light colored */}
      <div className="absolute top-20 left-0 w-full h-[800px] pointer-events-none opacity-[0.03] text-foreground z-0">
        <DashedPattern />
      </div>

      {/* ── Hero Block mimicing Screenshot 1 ── */}
      <div className="px-4 sm:px-6 lg:px-8 mt-6 relative z-10">
        <div className="bg-primary/95 pt-28 pb-56 px-6 md:px-12 rounded-[2rem] text-center relative max-w-[1400px] mx-auto overflow-hidden shadow-2xl">
           
           {/* Internal background pattern - white colored */}
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 text-white pointer-events-none -translate-x-12 translate-y-12">
             <DashedPattern />
           </div>

           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] max-w-4xl mx-auto tracking-tight relative z-10">
             {product.name}
           </h1>
           <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
             {product.shortDescription}
           </p>
           
           <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
             <input 
               type="email" 
               placeholder="Enter your email" 
               className="w-full sm:w-auto flex-1 px-4 py-3.5 rounded-lg border border-transparent focus:border-white focus:outline-none text-gray-900 bg-white"
             />
             <button className="bg-primary-foreground hover:bg-white text-primary px-6 py-3.5 rounded-lg font-semibold transition-colors w-full sm:w-auto">
               Get started
             </button>
           </div>
           <p className="text-white/70 text-xs mt-4">
             We care about your data in our <Link to="#" className="underline underline-offset-2 hover:text-white transition-colors">privacy policy</Link>.
           </p>
        </div>
      </div>

      {/* Dashboard Image overlapping */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-40 relative z-20">
         <img 
           src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
           alt="Dashboard Preview" 
           className="w-full h-auto rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-outline-variant bg-surface"
         />
      </div>

      {/* ── Integrations / Get More Value ── */}
      <div className="max-w-7xl mx-auto px-6 mt-32 mb-40 text-center">
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold tracking-wider mb-6 inline-block">Integrations</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Get more value from your tools</h2>
        <p className="text-muted-foreground text-xl max-w-3xl mx-auto mb-20">
          Connect your tools, connect your teams. With over 100 apps already available in our directory, your team's favorite tools are just a click away.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-12 w-full max-w-5xl mx-auto">
          {integrations.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center p-3 mb-6 shadow-sm border border-outline-variant bg-white">
                 <img src={item.iconUrl} alt={item.name} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{item.name}</h3>
              <p className="text-muted-foreground text-center mb-4 leading-relaxed">{item.desc}</p>
              <Link to="#" className="text-primary font-semibold inline-flex items-center gap-1 hover:text-primary/80 transition-colors group">
                View integration <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ── Deep Dive Header & Metrics ── */}
      <div className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">Unleash the full power of data</h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
          Everything you need to build modern UI and great products.
        </p>
        
        <div className="bg-surface-container rounded-2xl py-12 px-8 flex flex-col md:flex-row justify-around gap-10 md:gap-4 mb-32 border border-outline-variant shadow-sm max-w-5xl mx-auto">
           {metrics.map((m, i) => (
             <div key={i} className="text-center flex-1">
               <div className="text-5xl md:text-6xl font-bold text-primary mb-3 tracking-tight">{m.value}</div>
               <div className="text-lg font-medium text-foreground">{m.label}</div>
             </div>
           ))}
        </div>

        {/* Deep dive Features & Image */}
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold tracking-wider mb-6 inline-block">Features</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground tracking-tight">Cutting-edge features for advanced analytics</h2>
        <p className="text-muted-foreground text-xl max-w-3xl mx-auto mb-16">
          Powerful, self-serve product and growth intelligence to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        <div className="relative mb-24 max-w-6xl mx-auto">
          <img 
           src={product.softwareImages?.[1] || product.softwareImages?.[0] || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200'} 
           alt="Features Dashboard" 
           className="w-full h-auto rounded-xl shadow-2xl border border-outline-variant bg-surface"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center md:text-center">
           {(product.features?.slice(0,3) || ['Share team inboxes', 'Deliver instant answers', 'Manage your team with reports']).map((f: string, i: number) => (
             <div key={i} className="flex flex-col items-center">
               <div className="w-14 h-14 rounded-full bg-surface border border-outline-variant flex items-center justify-center text-foreground mb-6 shadow-sm">
                 <CheckCircle2 size={24} className="text-foreground" />
               </div>
               <h3 className="text-xl font-bold mb-3 text-foreground">{f}</h3>
               <p className="text-muted-foreground mb-4 leading-relaxed">
                 Whether you have a team of 2 or 200, our shared infrastructure keeps everyone on the same page and in the loop.
               </p>
               <Link to="#" className="text-primary font-semibold inline-flex items-center gap-1 hover:text-primary/80 transition-colors group">
                 Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </Link>
             </div>
           ))}
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="max-w-3xl mx-auto px-6 mb-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-foreground">Frequently asked questions</h2>
        <p className="text-xl text-muted-foreground mb-12">
          Everything you need to know about the product and billing.
        </p>

        <div className="text-left bg-background">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>
      </div>

      {/* ── CTA / Still Have Questions ── */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="bg-surface-container rounded-3xl p-12 text-center border border-outline-variant">
          {/* Avatar stack */}
          <div className="flex justify-center -space-x-4 mb-8">
            <img src="https://i.pravatar.cc/100?img=68" alt="Team member" className="w-14 h-14 rounded-full border-4 border-surface-container object-cover" />
            <img src="https://i.pravatar.cc/100?img=47" alt="Team member" className="w-16 h-16 rounded-full border-4 border-surface-container z-10 -mt-1 object-cover shadow-sm" />
            <img src="https://i.pravatar.cc/100?img=45" alt="Team member" className="w-14 h-14 rounded-full border-4 border-surface-container object-cover" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-foreground">Still have questions?</h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3.5 rounded-lg transition-colors shadow-sm">
            Get in touch
          </button>
        </div>
      </div>

      {/* ── Trusted Logos ── */}
      <div className="max-w-5xl mx-auto px-6 mb-24">
        <div className="bg-surface-container rounded-3xl p-12 text-center border border-outline-variant flex flex-col items-center">
           <p className="text-muted-foreground font-medium mb-10">Trusted by 4,000+ companies</p>
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Fake Logos mapping typical startup names */}
              <div className="flex items-center gap-2.5 font-bold text-2xl tracking-tight text-foreground">
                <div className="w-8 h-8 rounded-full bg-blue-600 shrink-0"/>Catalxg
              </div>
              <div className="flex items-center gap-2.5 font-bold text-2xl tracking-tight text-foreground">
                <div className="w-8 h-8 clip-star bg-teal-500 shrink-0" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}/>PictelAI
              </div>
              <div className="flex items-center gap-2.5 font-bold text-2xl tracking-tight text-foreground">
                <div className="w-8 h-8 rounded-lg bg-orange-500 rotate-12 shrink-0"/>Leapyear
              </div>
              <div className="flex items-center gap-2.5 font-bold text-2xl tracking-tight text-foreground">
                <div className="w-8 h-8 rounded-sm bg-green-500 shrink-0"/>Peregrin
              </div>
              <div className="flex items-center gap-2.5 font-bold text-2xl tracking-tight text-foreground">
                <div className="w-8 h-8 rounded-full bg-blue-400 rounded-bl-none shrink-0"/>EasyTax
              </div>
           </div>
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;
