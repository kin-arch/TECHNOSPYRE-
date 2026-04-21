import React from 'react';
import { 
  Rocket, TrendingUp, Award, Globe, 
  Lightbulb, ShieldCheck, Star, Zap, 
  Users, Calendar, MapPin, 
  BadgeCheck, CreditCard, Headphones, Settings, Shield,
  HeartHandshake
} from 'lucide-react';

/** Dummy social URLs (example.com) — replace with real profiles when available. */
export type LeadershipSocial = {
  linkedin: string;
  x: string;
  web: string;
};

export const leadership: Array<{
  name: string;
  role: string;
  desc: string;
  img: string;
  social: LeadershipSocial;
}> = [
  {
    name: 'Harris Javid',
    role: 'Founder & CEO',
    desc: '20+ years building software and growing teams. Believes great tech should feel simple.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80',
    social: {
      linkedin: 'https://example.com/demo/social/linkedin/harris-javid',
      x: 'https://example.com/demo/social/x/harris-javid',
      web: 'https://example.com/demo/team/harris-javid',
    },
  },
  {
    name: 'Elena Vance',
    role: 'Chief Technology Officer',
    desc: 'Leads our engineering team. Clean architecture and reliable systems.',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80',
    social: {
      linkedin: 'https://example.com/demo/social/linkedin/elena-vance',
      x: 'https://example.com/demo/social/x/elena-vance',
      web: 'https://example.com/demo/team/elena-vance',
    },
  },
  {
    name: 'Dr. Julian Grey',
    role: 'Head of Academy',
    desc: 'Course design that turns beginners into confident developers.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    social: {
      linkedin: 'https://example.com/demo/social/linkedin/julian-grey',
      x: 'https://example.com/demo/social/x/julian-grey',
      web: 'https://example.com/demo/team/julian-grey',
    },
  },
  {
    name: 'Sara Malik',
    role: 'VP Engineering',
    desc: 'Shipping product on time with pragmatic engineering leadership.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80',
    social: {
      linkedin: 'https://example.com/demo/social/linkedin/sara-malik',
      x: 'https://example.com/demo/social/x/sara-malik',
      web: 'https://example.com/demo/team/sara-malik',
    },
  },
  {
    name: 'Omar Farooq',
    role: 'Lead Product Designer',
    desc: 'UX for complex enterprise workflows — simple on the surface.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=80',
    social: {
      linkedin: 'https://example.com/demo/social/linkedin/omar-farooq',
      x: 'https://example.com/demo/social/x/omar-farooq',
      web: 'https://example.com/demo/team/omar-farooq',
    },
  },
  {
    name: 'Ayesha Khan',
    role: 'Head of Customer Success',
    desc: 'Onboarding, training, and long-term partnerships with clients.',
    img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&auto=format&fit=crop&q=80',
    social: {
      linkedin: 'https://example.com/demo/social/linkedin/ayesha-khan',
      x: 'https://example.com/demo/social/x/ayesha-khan',
      web: 'https://example.com/demo/team/ayesha-khan',
    },
  },
  {
    name: 'Marcus Chen',
    role: 'Cloud & DevOps Lead',
    desc: 'Infrastructure, security, and uptime for mission-critical deployments.',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80',
    social: {
      linkedin: 'https://example.com/demo/social/linkedin/marcus-chen',
      x: 'https://example.com/demo/social/x/marcus-chen',
      web: 'https://example.com/demo/team/marcus-chen',
    },
  },
  {
    name: 'Nadia Rahman',
    role: 'Engineering Manager',
    desc: 'Backend systems, APIs, and mentoring mid-level engineers.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=80',
    social: {
      linkedin: 'https://example.com/demo/social/linkedin/nadia-rahman',
      x: 'https://example.com/demo/social/x/nadia-rahman',
      web: 'https://example.com/demo/team/nadia-rahman',
    },
  },
  
   
    
  
];

export const timeline = [
  { year: '2013', title: 'How It Started', desc: 'Two engineers, one small office, and a goal to build software that actually helps people.', icon: React.createElement(Rocket, { size: 18 }) },
  { year: '2017', title: 'First Big Win', desc: 'Launched our enterprise tools, signed our first 50 business clients across 3 cities.', icon: React.createElement(TrendingUp, { size: 18 }) },
  { year: '2021', title: 'Academy Opens', desc: 'Started training developers in-house. Today, our students work in top companies worldwide.', icon: React.createElement(Award, { size: 18 }) },
  { year: 'Today', title: 'Going Global', desc: 'Working with 200+ clients across 4 countries — and still answering every email personally.', icon: React.createElement(Globe, { size: 18 }) },
];

export const values = [
  { icon: React.createElement(Lightbulb, { size: 24 }), title: 'Fresh Ideas', desc: 'We don\'t just copy what others do. We design real solutions that fit you.', featured: true },
  { icon: React.createElement(ShieldCheck, { size: 24 }), title: 'Honest Work', desc: 'Clear pricing, no hidden fees. What we promise is what you get.' },
  { icon: React.createElement(Star, { size: 24 }), title: 'Top Quality', desc: 'Clean code, beautiful design, careful testing — every time.' },
  { icon: React.createElement(Zap, { size: 24 }), title: 'Fast Support', desc: 'We reply quickly and fix problems properly.' },
];

export const globalStats = [
  { icon: React.createElement(Users, { size: 18 }), value: '200+', label: 'Team & Trainers' },
  { icon: React.createElement(Globe, { size: 18 }), value: '4', label: 'Countries Served' },
  { icon: React.createElement(Calendar, { size: 18 }), value: '12+', label: 'Years Active' },
  { icon: React.createElement(MapPin, { size: 18 }), value: '12+', label: 'Cities Reached' },
];

export const services = [
  {
    title: '20+ Years Experience',
    icon: React.createElement(Award, { className: 'text-primary-foreground' }),
    items: ['Building apps since 2004', 'Expert team members', 'Over 500 projects done'],
    accent: 'primary',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=600',
  },
  {
    title: 'Happy Clients',
    icon: React.createElement(HeartHandshake, { className: 'text-primary-foreground' }),
    items: ['99% of people love us', 'Clients stay for years', 'Helpful and friendly'],
    accent: 'secondary',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
  },
  {
    title: 'Fast Problem Solving',
    icon: React.createElement(Zap, { className: 'text-primary-foreground' }),
    items: ['We fix things quickly', 'Work finishes on time', 'No long waiting'],
    accent: 'primary',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600',
  },
  {
    title: 'Best Support Combo',
    icon: React.createElement(Headphones, { className: 'text-primary-foreground' }),
    items: ['24/7 help available', 'Easy to talk to us', 'We care about you'],
    accent: 'secondary',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600',
  },
];

export const faqs = [
  {
    q: 'Can I customize the software?',
    a: 'Yes, all products can be customized to match your workflow and branding.',
  },
  {
    q: 'Do you provide installation and training?',
    a: 'Yes, we provide setup, staff training, and complete onboarding.',
  },
  {
    q: 'Can I use it online and offline?',
    a: 'Most systems support cloud access, and selected modules can work offline.',
  },
  {
    q: 'How much does it cost?',
    a: 'Pricing depends on modules and users. Contact us for a custom quote.',
  },
  {
    q: 'Can I get a demo first?',
    a: 'Yes, we offer a free live demo before purchase.',
  },
];

export const whyChooseUs = [
  {
    title: 'Ready Products',
    desc: 'Launch quickly with tested systems.',
    icon: React.createElement(Zap, { size: 22 }),
  },
  {
    title: 'Easy to Use',
    desc: 'Simple design for every staff member.',
    icon: React.createElement(BadgeCheck, { size: 22 }),
  },
  {
    title: 'Affordable',
    desc: 'Best pricing for startups & enterprises.',
    icon: React.createElement(CreditCard, { size: 22 }),
  },
  {
    title: 'Secure',
    desc: 'Data backups and security included.',
    icon: React.createElement(Shield, { size: 22 }),
  },
  {
    title: 'Customizable',
    desc: 'Features tailored to your business.',
    icon: React.createElement(Settings, { size: 22 }),
  },
  {
    title: 'Support',
    desc: 'We help before and after launch.',
    icon: React.createElement(Headphones, { size: 22 }),
  },
];
