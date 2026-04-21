import React from 'react';
import { 
  Users, Award, Globe, TrendingUp, Code2, Cloud, Brain, 
  Settings, CreditCard, Smartphone, HeartPulse, 
  Shield, School, ShoppingCart, 
  Home as HomeIcon, Hotel, Scale,
  Truck,
  ClipboardCheck,
  Wallet,
  UserCheck,
  Clock,
  Search
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
    label: 'Enterprise Operations',
    tag: 'ERP SYSTEMS',
    icon: React.createElement(Settings, { size: 22 }),
    count: 12,
    desc: 'Complete digital solutions to manage hospitals, HR, supply chains, and industrial workflows efficiently.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&auto=format&fit=crop&q=80',
    items: ['Hospital Management', 'HR Management', 'Supply Chain Management', 'Finance System', 'Project Management', 'School Management'],
    itemIcons: [
      React.createElement(HeartPulse, { size: 14 }), 
      React.createElement(Users, { size: 14 }), 
      React.createElement(Truck, { size: 14 }), 
      React.createElement(Wallet, { size: 14 }), 
      React.createElement(ClipboardCheck, { size: 14 }), 
      React.createElement(School, { size: 14 })
    ],
  },
  {
    id: 'sales',
    label: 'Sales & Hospitality',
    tag: 'RETAIL & BOOKING',
    icon: React.createElement(CreditCard, { size: 22 }),
    count: 2,
    desc: 'Fast POS systems and comprehensive hotel management tools built for speed and guest satisfaction.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=80',
    items: ['Point of Sales (POS)', 'Hotel Management'],
    itemIcons: [
      React.createElement(ShoppingCart, { size: 14 }), 
      React.createElement(Hotel, { size: 14 })
    ],
  },
  {
    id: 'websites',
    label: 'Specialized Enterprise',
    tag: 'LEGAL & LOGISTICS',
    icon: React.createElement(Globe, { size: 22 }),
    count: 4,
    desc: 'Bespoke systems for legal case management, logistics, and insurance integration.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&auto=format&fit=crop&q=80',
    items: ['Legal Management', 'Goods Transport', 'Insurance System', 'Lost & Found'],
    itemIcons: [
      React.createElement(Scale, { size: 14 }), 
      React.createElement(Truck, { size: 14 }), 
      React.createElement(Shield, { size: 14 }), 
      React.createElement(Search, { size: 14 })
    ],
  },
  {
    id: 'mobile',
    label: 'Employee Ecosystem',
    tag: 'PORTALS & TRACKING',
    icon: React.createElement(Smartphone, { size: 22 }),
    count: 2,
    desc: 'Mobile-first portals for employee self-service and real-time attendance monitoring.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop&q=80',
    items: ['Employee Portal', 'Attendance Management'],
    itemIcons: [
      React.createElement(UserCheck, { size: 14 }), 
      React.createElement(Clock, { size: 14 })
    ],
  },
];

export const testimonials = [
  { quote: "Technospyre didn't just build our infrastructure; they redefined how we think about scalability. Their AI-driven approach is a game-changer.", author: 'Sarah Jenkins', role: 'CTO, Global Logistics Corp', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80' },
  { quote: "The Academy graduates we've hired are among the most technically proficient engineers in our team. The curriculum is truly industry-aligned.", author: 'Marcus Thorne', role: 'VP of Engineering, FinTech Solutions', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80' },
  { quote: "Their precision-engineered digital infrastructure allowed us to scale from 10k to 1M users without a single second of downtime.", author: 'Elena Rodriguez', role: 'Founder, Streamline AI', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop&q=80' },
];
