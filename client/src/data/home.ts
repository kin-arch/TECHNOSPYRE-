import React from 'react';
import {
  Users, Award, Globe, TrendingUp, Code2, Cloud, Brain,
  Settings, CreditCard, Smartphone, HeartPulse, Building2,
  Package, Shield, School, ShoppingCart, FileText,
  Home as HomeIcon, Hotel, Stethoscope, Briefcase, Scale,
  Palette, GraduationCap, Tv2, Headphones, Clock,
  HeartHandshake, BadgeCheck, Trophy, Target, Zap,
  Landmark, Store, ClipboardList, Warehouse, Building, UserCheck
} from 'lucide-react';

export const stats = [
  { icon: React.createElement(Users, { size: 20 }), value: '300+', label: 'Businesses Served' },
  { icon: React.createElement(Award, { size: 20 }), value: '99%', label: 'Client Satisfaction' },
  { icon: React.createElement(Globe, { size: 20 }), value: '10+', label: 'Industries Covered' },
  { icon: React.createElement(TrendingUp, { size: 20 }), value: '500+', label: 'Projects Delivered' },
];

export const services = [
  {
    title: '20+ Years Experience',
    icon: React.createElement(Award, { className: 'text-secondary' }),
    items: ['Building apps since 2004', 'Expert team members', 'Over 500 projects done'],
    accent: 'primary',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=600',
  },
  {
    title: 'Happy Clients',
    icon: React.createElement(HeartHandshake, { className: 'text-secondary' }),
    items: ['99% of people love us', 'Clients stay for years', 'Helpful and friendly'],
    accent: 'secondary',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
  },
  {
    title: 'Fast Problem Solving',
    icon: React.createElement(Zap, { className: 'text-secondary' }),
    items: ['We fix things quickly', 'Work finishes on time', 'No long waiting'],
    accent: 'primary',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600',
  },
  {
    title: 'Best Support Combo',
    icon: React.createElement(Headphones, { className: 'text-secondary' }),
    items: ['24/7 help available', 'Easy to talk to us', 'We care about you'],
    accent: 'secondary',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600',
  },
];

export const categories = [
  {
    id: 'frontend',
    label: 'Making Websites',
    tag: 'WEB',
    icon: React.createElement(Code2, { size: 22 }),
    count: 4,
    desc: 'We build beautiful websites for you.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=900',
    items: ['React', 'Next.js', 'Vue', 'TypeScript'],
    itemIcons: [
      React.createElement(Code2, { size: 16 }),
      React.createElement(Zap, { size: 16 }),
      React.createElement(Globe, { size: 16 }),
      React.createElement(Settings, { size: 16 }),
    ],
  },
  {
    id: 'backend',
    label: 'Servers & Data',
    tag: 'SERVER',
    icon: React.createElement(Settings, { size: 22 }),
    count: 4,
    desc: 'Strong systems to keep your app running.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900',
    items: ['Node.js', 'Python', 'Java', 'Go'],
    itemIcons: [
      React.createElement(Code2, { size: 16 }),
      React.createElement(Brain, { size: 16 }),
      React.createElement(Building, { size: 16 }),
      React.createElement(Zap, { size: 16 }),
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud Tools',
    tag: 'INFRA',
    icon: React.createElement(Cloud, { size: 22 }),
    count: 4,
    desc: 'Moving your business to the cloud.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900',
    items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    itemIcons: [
      React.createElement(Cloud, { size: 16 }),
      React.createElement(Package, { size: 16 }),
      React.createElement(Globe, { size: 16 }),
      React.createElement(Zap, { size: 16 }),
    ],
  },
  {
    id: 'mobile',
    label: 'Phone Apps',
    tag: 'APP',
    icon: React.createElement(Smartphone, { size: 22 }),
    count: 4,
    desc: 'Apps for your iPhone or Android.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900',
    items: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    itemIcons: [
      React.createElement(Smartphone, { size: 16 }),
      React.createElement(Zap, { size: 16 }),
      React.createElement(Code2, { size: 16 }),
      React.createElement(Settings, { size: 16 }),
    ],
  },
  {
    id: 'ai',
    label: 'Smart AI Tools',
    tag: 'INTELLIGENCE',
    icon: React.createElement(Brain, { size: 22 }),
    count: 4,
    desc: 'Using AI to help your business.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900',
    items: ['TensorFlow', 'PyTorch', 'OpenAI', 'Data Eng'],
    itemIcons: [
      React.createElement(Brain, { size: 16 }),
      React.createElement(TrendingUp, { size: 16 }),
      React.createElement(Globe, { size: 16 }),
      React.createElement(Settings, { size: 16 }),
    ],
  },
  {
    id: 'database',
    label: 'Saving Data',
    tag: 'STORAGE',
    icon: React.createElement(Package, { size: 22 }),
    count: 4,
    desc: 'Storing your details safely.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
    itemIcons: [
      React.createElement(Package, { size: 16 }),
      React.createElement(FileText, { size: 16 }),
      React.createElement(Zap, { size: 16 }),
      React.createElement(Settings, { size: 16 }),
    ],
  },
];

export const productOffers = [
  {
    id: 'hospital-management',
    label: 'Hospital Management',
    tag: 'HEALTHCARE',
    tagline: 'Complete patient records, billing, and pharmacy management.',
    to: '/products/hospital-management',
    icon: React.createElement(HeartPulse, { size: 22 }),
  },
  {
    id: 'school-management',
    label: 'School Management',
    tag: 'EDUCATION',
    tagline: 'Student records, fee management, and examination system.',
    to: '/products/school-management',
    icon: React.createElement(School, { size: 22 }),
  },
  {
    id: 'hr-management',
    label: 'HR Management',
    tag: 'ENTERPRISE',
    tagline: 'Streamline HR operations with employee records, payroll, and attendance.',
    to: '/products/hr-management',
    icon: React.createElement(Building2, { size: 22 }),
  },
  {
    id: 'pos-cloud',
    label: 'POS System',
    tag: 'RETAIL',
    tagline: 'Fast and reliable point of sale with inventory tracking.',
    to: '/products/pos-cloud',
    icon: React.createElement(Store, { size: 22 }),
  },
  {
    id: 'supply-chain',
    label: 'Supply Chain Management',
    tag: 'LOGISTICS',
    tagline: 'Manage procurement, inventory, and vendor operations efficiently.',
    to: '/products/supply-chain',
    icon: React.createElement(HomeIcon, { size: 22 }),
  },
  {
    id: 'finance-system',
    label: 'Finance System',
    tag: 'ACCOUNTING',
    tagline: 'Powerful financial system for accounting, reporting, and budgeting.',
    to: '/products/finance-system',
    icon: React.createElement(Code2, { size: 22 }),
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

export const testimonials = [
  {
    quote: 'Our hospital is now fully digital and fast.',
    author: 'Dr. Ahmed Khan',
    role: 'CEO',
    company: 'Care Hospital',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=280',
  },
  {
    quote: 'Sales doubled after switching to their POS.',
    author: 'Maria Lopez',
    role: 'Store Owner',
    company: 'Retail Hub',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=280',
  },
  {
    quote: 'School fee and attendance work became effortless.',
    author: 'James Robert',
    role: 'Principal',
    company: 'Bright Future School',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=280',
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
    q: 'Is support included?',
    a: 'Yes, free support is included after launch with optional monthly plans.',
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

export const powerComparison = [
  { feature: 'Ready-made industry solutions', us: true, others: false },
  { feature: 'Custom branding & modules', us: true, others: false },
  { feature: 'Free training included', us: true, others: false },
  { feature: 'Affordable one-time pricing', us: true, others: false },
  { feature: 'Fast deployment', us: true, others: false },
  { feature: 'Local support team', us: true, others: false },
];