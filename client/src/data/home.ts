import React from 'react';
import { 
  Users, Award, Globe, TrendingUp, Code2, Cloud, Brain, 
  Settings, CreditCard, Smartphone, HeartPulse, Building2, 
  Package, Shield, School, ShoppingCart, FileText, 
  Home as HomeIcon, Hotel, Stethoscope, Briefcase, Scale, 
  Palette, GraduationCap, Tv2 
} from 'lucide-react';

export const stats = [
  { icon: React.createElement(Users, { size: 20 }), value: '500+', label: 'Graduates Monthly' },
  { icon: React.createElement(Award, { size: 20 }), value: '98%', label: 'Placement Rate' },
  { icon: React.createElement(Globe, { size: 20 }), value: '4', label: 'Continents' },
  { icon: React.createElement(TrendingUp, { size: 20 }), value: '200+', label: 'Enterprise Clients' },
];

export const services = [
  {
    title: 'Custom Development',
    icon: React.createElement(Code2, { className: "text-secondary" }),
    items: ['Mobile Engineering', 'Web Ecosystems', 'Desktop Apps'],
    accent: 'primary',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
  },
  {
    title: 'DevOps & Cloud',
    icon: React.createElement(Cloud, { className: "text-secondary" }),
    items: ['AWS / Azure / GCP', 'CI/CD Pipelines', 'Serverless Architecture'],
    accent: 'secondary',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80',
  },
  {
    title: 'AI & Big Data',
    icon: React.createElement(Brain, { className: "text-secondary" }),
    items: ['LLM Integration', 'Data Visualization', 'Predictive Models'],
    accent: 'primary',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Consulting',
    icon: React.createElement(Users, { className: "text-secondary" }),
    items: ['Tech Audits', 'Roadmap Design', 'Team Augmentation'],
    accent: 'secondary',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=80',
  },
];

export const categories = [
  {
    id: 'operations',
    label: 'Operations',
    tag: 'ERP SYSTEMS',
    icon: React.createElement(Settings, { size: 22 }),
    count: 6,
    desc: 'End-to-end ERP solutions for healthcare, finance, HR, and logistics.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&auto=format&fit=crop&q=80',
    items: ['Hospital ERP Solutions', 'General Ledger', 'Human Resource ERP', 'Inventory & Procurement', 'Insurance ERP', 'School Management'],
    itemIcons: [
      React.createElement(HeartPulse, { size: 14 }), 
      React.createElement(Building2, { size: 14 }), 
      React.createElement(Users, { size: 14 }), 
      React.createElement(Package, { size: 14 }), 
      React.createElement(Shield, { size: 14 }), 
      React.createElement(School, { size: 14 })
    ],
  },
  {
    id: 'sales',
    label: 'Sales',
    tag: 'POS & REVENUE',
    icon: React.createElement(CreditCard, { size: 22 }),
    count: 4,
    desc: 'POS, invoicing, real estate, and hotel management tools built for speed.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=80',
    items: ['Point of Sales', 'Invoicing', 'Real Estate', 'Hotel Management'],
    itemIcons: [
      React.createElement(ShoppingCart, { size: 14 }), 
      React.createElement(FileText, { size: 14 }), 
      React.createElement(HomeIcon, { size: 14 }), 
      React.createElement(Hotel, { size: 14 })
    ],
  },
  {
    id: 'websites',
    label: 'Websites',
    tag: 'WEB DESIGN',
    icon: React.createElement(Globe, { size: 22 }),
    count: 5,
    desc: 'Premium digital experiences for business, legal, creative, and educational sectors.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&auto=format&fit=crop&q=80',
    items: ['Business-Oriented', 'Professional & Legal', 'Creative & Personal', 'Educational', 'Media & Entertainment'],
    itemIcons: [
      React.createElement(Briefcase, { size: 14 }), 
      React.createElement(Scale, { size: 14 }), 
      React.createElement(Palette, { size: 14 }), 
      React.createElement(GraduationCap, { size: 14 }), 
      React.createElement(Tv2, { size: 14 })
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile Apps',
    tag: 'iOS & ANDROID',
    icon: React.createElement(Smartphone, { size: 22 }),
    count: 3,
    desc: 'Native iOS & Android apps for POS, healthcare, and hospital management.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop&q=80',
    items: ['POS Mobile App', 'Health Mobile App', 'Hospital Mobile App'],
    itemIcons: [
      React.createElement(ShoppingCart, { size: 14 }), 
      React.createElement(HeartPulse, { size: 14 }), 
      React.createElement(Stethoscope, { size: 14 })
    ],
  },
];

export const testimonials = [
  { quote: "Technospyre didn't just build our infrastructure; they redefined how we think about scalability. Their AI-driven approach is a game-changer.", author: 'Sarah Jenkins', role: 'CTO, Global Logistics Corp', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80' },
  { quote: "The Academy graduates we've hired are among the most technically proficient engineers in our team. The curriculum is truly industry-aligned.", author: 'Marcus Thorne', role: 'VP of Engineering, FinTech Solutions', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80' },
  { quote: "Their precision-engineered digital infrastructure allowed us to scale from 10k to 1M users without a single second of downtime.", author: 'Elena Rodriguez', role: 'Founder, Streamline AI', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop&q=80' },
];
