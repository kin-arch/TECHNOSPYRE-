import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Shield, FileText, Cookie, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import SEO from '../components/SEO';

const lastUpdated = 'April 26, 2026';
const companyName = 'Technospyre IT Solutions & Academy';
const companyEmail = 'info@technospyre.com';
const companyPhone = '+92 310 9999549';

const sections = [
  { id: 'terms', label: 'Terms & Conditions', icon: FileText },
  { id: 'privacy', label: 'Privacy Policy', icon: Shield },
  { id: 'cookies', label: 'Cookie Policy', icon: Cookie },
];

/* ─── Reusable sub-components ─── */
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-lg font-bold text-foreground mb-3 border-l-4 border-primary pl-4">{title}</h3>
    <div className="text-muted-foreground leading-relaxed space-y-3 text-sm">{children}</div>
  </div>
);

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2">
        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

/* ─── Content panels ─── */
const TermsContent: React.FC = () => (
  <div>
    <Section title="Acceptance of Terms">
      <p>
        By accessing or using the website, products, or services provided by <strong>{companyName}</strong> ("Technospyre", "we", "us", or "our"), you agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use immediately.
      </p>
    </Section>

    <Section title="Use of Services">
      <p>You agree to use our services only for lawful purposes. Prohibited activities include:</p>
      <BulletList items={[
        'Unauthorized access to our systems or data',
        'Uploading malicious code or interfering with service availability',
        'Reverse engineering, copying, or redistributing our proprietary software',
        'Using our platform to harass, harm, or defraud others',
        'Violating any applicable local, national, or international law',
      ]} />
    </Section>

    <Section title="Intellectual Property">
      <p>
        All content, trademarks, logos, source code, and materials on this platform are the exclusive property of {companyName}. You may not reproduce, modify, or distribute any part of our intellectual property without prior written consent.
      </p>
    </Section>

    <Section title="Software Products">
      <p>
        Our enterprise software products are licensed, not sold. Each license is subject to a separate License Agreement. Unauthorized copying, redistribution, or reverse engineering of any software is strictly prohibited and may result in legal action.
      </p>
    </Section>

    <Section title="Academy & Course Enrollment">
      <p>
        Enrollment in courses offered by Technospyre Academy is subject to availability and payment of applicable fees. Course fees are non-refundable once a batch has commenced unless otherwise stated in writing.
      </p>
      <BulletList items={[
        'Course materials are provided for personal educational use only',
        'Certificates are issued upon successful completion of the course requirements',
        'Technospyre reserves the right to modify or cancel courses with reasonable notice',
      ]} />
    </Section>

    <Section title="Limitation of Liability">
      <p>
        To the maximum extent permitted by law, {companyName} shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of our services, even if advised of the possibility of such damages.
      </p>
    </Section>

    <Section title="Governing Law">
      <p>
        These Terms are governed by and construed in accordance with the laws of Pakistan. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Lahore, Punjab.
      </p>
    </Section>

    <Section title="Changes to Terms">
      <p>
        We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the revised Terms.
      </p>
    </Section>

    <Section title="Contact">
      <p>
        For questions regarding these Terms, contact us at <a href={`mailto:${companyEmail}`} className="text-primary hover:underline">{companyEmail}</a> or call <a href={`tel:${companyPhone.replace(/\s/g, '')}`} className="text-primary hover:underline">{companyPhone}</a>.
      </p>
    </Section>
  </div>
);

const PrivacyContent: React.FC = () => (
  <div>
    <Section title="Introduction">
      <p>
        {companyName} is committed to protecting your personal information. This Privacy Policy describes how we collect, use, and safeguard the data you provide when using our website, software products, or academy services.
      </p>
    </Section>

    <Section title="Information We Collect">
      <p>We may collect the following categories of personal information:</p>
      <BulletList items={[
        'Identity data: name, email address, phone number',
        'Usage data: pages visited, time spent, interactions with our site',
        'Technical data: IP address, browser type, device identifiers',
        'Communication data: messages sent via contact forms or email',
        'Payment data: billing information processed through secure third-party gateways (we do not store card details)',
        'Academic data: enrollment records, course progress, and assessment results',
      ]} />
    </Section>

    <Section title="How We Use Your Data">
      <BulletList items={[
        'To provide and maintain our software products and academy services',
        'To respond to inquiries and provide customer support',
        'To process payments and manage subscriptions or licenses',
        'To send administrative notices, product updates, and promotional content (with your consent)',
        'To analyze usage patterns and improve our offerings',
        'To comply with legal obligations',
      ]} />
    </Section>

    <Section title="Data Sharing">
      <p>
        We do not sell your personal data. We may share it with trusted third parties only as necessary:
      </p>
      <BulletList items={[
        'Payment processors (e.g., for billing and subscriptions)',
        'Cloud hosting and infrastructure providers',
        'Analytics tools for site performance monitoring',
        'Legal authorities when required by law',
      ]} />
    </Section>

    <Section title="Data Retention">
      <p>
        We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by applicable law. After that period, data is securely deleted or anonymized.
      </p>
    </Section>

    <Section title="Your Rights">
      <p>You have the right to:</p>
      <BulletList items={[
        'Access the personal data we hold about you',
        'Request correction of inaccurate data',
        'Request deletion of your data (subject to legal obligations)',
        'Withdraw consent for marketing communications at any time',
        'Lodge a complaint with the relevant data protection authority',
      ]} />
    </Section>

    <Section title="Data Security">
      <p>
        We implement industry-standard security measures including encryption, access controls, and regular audits to protect your data from unauthorized access, alteration, or disclosure.
      </p>
    </Section>

    <Section title="Third-Party Links">
      <p>
        Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites and encourage you to review their policies independently.
      </p>
    </Section>

    <Section title="Contact">
      <p>
        For privacy-related concerns, email us at <a href={`mailto:${companyEmail}`} className="text-primary hover:underline">{companyEmail}</a>.
      </p>
    </Section>
  </div>
);

const CookieContent: React.FC = () => (
  <div>
    <Section title="What Are Cookies?">
      <p>
        Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences, improve your browsing experience, and provide us with analytics data.
      </p>
    </Section>

    <Section title="Types of Cookies We Use">
      <div className="space-y-4">
        {[
          {
            name: 'Essential Cookies',
            desc: 'Required for the website to function correctly. These cannot be disabled. Examples include session tokens and security cookies.',
          },
          {
            name: 'Performance Cookies',
            desc: 'Help us understand how visitors interact with our site by collecting anonymous usage data. Used to improve site performance and user experience.',
          },
          {
            name: 'Functional Cookies',
            desc: 'Remember your preferences such as theme (light/dark mode), language, or previously visited pages to provide a more personalized experience.',
          },
          {
            name: 'Analytics Cookies',
            desc: 'We use tools like Google Analytics to understand traffic patterns and page popularity. This data is aggregated and anonymous.',
          },
          {
            name: 'Marketing Cookies',
            desc: 'Used to deliver relevant advertisements and track the effectiveness of our marketing campaigns. Only used with your explicit consent.',
          },
        ].map((type) => (
          <div key={type.name} className="p-4 rounded-sm bg-primary/5 border border-primary/10">
            <p className="font-semibold text-foreground text-sm mb-1">{type.name}</p>
            <p className="text-xs text-muted-foreground">{type.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Managing Cookies">
      <p>
        You can control and delete cookies through your browser settings at any time. Please note that disabling certain cookies may affect the functionality of our website. Most browsers allow you to:
      </p>
      <BulletList items={[
        'View cookies currently stored on your device',
        'Delete all cookies or cookies from specific sites',
        'Block third-party cookies',
        'Set preferences for cookie acceptance before visiting new sites',
      ]} />
    </Section>

    <Section title="Consent">
      <p>
        By continuing to use our website, you consent to the use of cookies as described in this policy. You may withdraw your consent at any time by clearing your browser cookies and adjusting your browser settings.
      </p>
    </Section>

    <Section title="Updates to This Policy">
      <p>
        We may update this Cookie Policy periodically. Any changes will be reflected on this page with a revised effective date.
      </p>
    </Section>

    <Section title="Contact">
      <p>
        If you have questions about our use of cookies, contact us at <a href={`mailto:${companyEmail}`} className="text-primary hover:underline">{companyEmail}</a>.
      </p>
    </Section>
  </div>
);

/* ─── Main page ─── */
const Legal: React.FC = () => {
  const [active, setActive] = useState<string>('terms');
  const contentRef = useRef<HTMLDivElement>(null);

  // Sync active tab from URL hash on load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (sections.find((s) => s.id === hash)) setActive(hash);
  }, []);

  const switchTab = (id: string) => {
    setActive(id);
    window.location.hash = id;
    contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const renderContent = () => {
    switch (active) {
      case 'terms': return <TermsContent />;
      case 'privacy': return <PrivacyContent />;
      case 'cookies': return <CookieContent />;
    }
  };

  const activeSection = sections.find((s) => s.id === active)!;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Legal – Terms, Privacy & Cookie Policy | Technospyre"
        description="Read Technospyre's Terms & Conditions, Privacy Policy, and Cookie Policy in one place."
      />

      {/* Hero */}
      <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 border-b border-outline-variant">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,hsl(var(--primary)/8%),transparent)]" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-5">
              <Shield size={12} /> Legal Documentation
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Our <span className="text-primary">Legal</span> Policies
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              Everything you need to know about how Technospyre operates, protects your data, and uses cookies — all in one place.
            </p>
            <p className="mt-4 text-xs text-muted-foreground/60">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Tab + Content Layout */}
      <section className="max-w-6xl mx-auto px-6 py-14 flex flex-col lg:flex-row gap-10">
        {/* Sidebar tabs */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:w-64 shrink-0"
        >
          <div className="sticky top-28 space-y-2">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => switchTab(id)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-semibold transition-all duration-200 text-left',
                  active === id
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'text-muted-foreground hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20'
                )}
              >
                <Icon size={16} className="shrink-0" />
                <span className="flex-1">{label}</span>
                {active === id && <ChevronRight size={14} className="shrink-0 opacity-70" />}
              </button>
            ))}

            {/* Quick contact */}
            <div className="mt-6 p-4 rounded-sm bg-primary/5 border border-primary/15">
              <p className="text-xs font-bold text-primary uppercase tracking-wide mb-2">Need Help?</p>
              <p className="text-xs text-muted-foreground mb-3">Have questions about our policies? We're here for you.</p>
              <a
                href={`mailto:${companyEmail}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                {companyEmail}
              </a>
            </div>
          </div>
        </motion.aside>

        {/* Content panel */}
        <motion.div
          key={active}
          ref={contentRef}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-1 min-w-0"
        >
          {/* Panel header */}
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-outline-variant">
            <div className="h-11 w-11 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <activeSection.icon size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{activeSection.label}</h2>
              <p className="text-xs text-muted-foreground">Effective: {lastUpdated}</p>
            </div>
          </div>

          {/* Dynamic content */}
          <div className="prose-sm max-w-none">
            {renderContent()}
          </div>

          {/* Bottom navigation */}
          <div className="mt-12 pt-8 border-t border-outline-variant flex flex-wrap gap-3">
            {sections
              .filter((s) => s.id !== active)
              .map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => switchTab(id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-outline-variant text-sm font-semibold text-muted-foreground hover:border-primary/40 hover:text-primary transition-all"
                >
                  <Icon size={14} />
                  {label}
                  <ChevronRight size={14} />
                </button>
              ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Legal;
