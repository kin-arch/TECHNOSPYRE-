import React from 'react';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactInfo } from '../components/contact/ContactInfo';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactVisual } from '../components/contact/ContactVisual';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <div className="relative overflow-hidden">
      <SEO 
        title="Get in Touch"
        description="Have a question or looking for a custom IT solution? Contact TechnoSpyre today and let's engineer your digital future."
      />
      {/* ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <ContactHero />
      <ContactInfo />

      {/* ── Form + Visual ── */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <ContactForm />
          <ContactVisual />
        </div>
      </section>
    </div>
  );
};

export default Contact;
