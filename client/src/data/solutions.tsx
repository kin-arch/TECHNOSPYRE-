import React from 'react';
import {
  Settings, CreditCard, Globe, Smartphone, Sparkles, ShieldCheck, Cpu,
  Building2, HeartPulse, Users, Package, Shield, School,
  ShoppingCart, FileText, Home, Hotel,
  Stethoscope, Briefcase, Scale, Palette, GraduationCap, Tv2
} from 'lucide-react';

export type Product = { name: string; icon: React.ReactNode };

export type Category = {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  image: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    id: 'operations',
    label: 'Operations',
    icon: <Settings size={24} />,
    description: 'Centralized ERP systems built for complex enterprise workflows — from healthcare and HR to insurance and inventory.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&auto=format&fit=crop&q=80',
    products: [
      { name: 'Hospital ERP Solutions', icon: <HeartPulse size={18} /> },
      { name: 'General Ledger Solution', icon: <Building2 size={18} /> },
      { name: 'Human Resource ERP', icon: <Users size={18} /> },
      { name: 'Inventory & Procurement', icon: <Package size={18} /> },
      { name: 'Insurance ERP', icon: <Shield size={18} /> },
      { name: 'School Management System', icon: <School size={18} /> },
    ],
  },
  {
    id: 'sales',
    label: 'Sales',
    icon: <CreditCard size={24} />,
    description: 'Next-gen POS and revenue tools that transform everyday transactions into powerful business intelligence.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop&q=80',
    products: [
      { name: 'Point of Sales', icon: <ShoppingCart size={18} /> },
      { name: 'Invoicing', icon: <FileText size={18} /> },
      { name: 'Real Estate', icon: <Home size={18} /> },
      { name: 'Hotel Management', icon: <Hotel size={18} /> },
    ],
  },
  {
    id: 'websites',
    label: 'Websites',
    icon: <Globe size={24} />,
    description: 'Bespoke digital experiences that blend high-performance engineering with avant-garde editorial design.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&auto=format&fit=crop&q=80',
    products: [
      { name: 'Business-Oriented', icon: <Briefcase size={18} /> },
      { name: 'Professional & Legal', icon: <Scale size={18} /> },
      { name: 'Creative & Personal', icon: <Palette size={18} /> },
      { name: 'Educational', icon: <GraduationCap size={18} /> },
      { name: 'Media & Entertainment', icon: <Tv2 size={18} /> },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile Apps',
    icon: <Smartphone size={24} />,
    description: 'Native iOS & Android solutions engineered for performance, delight, and real-world impact.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80',
    products: [
      { name: 'POS Mobile App', icon: <ShoppingCart size={18} /> },
      { name: 'Health Mobile App', icon: <HeartPulse size={18} /> },
      { name: 'Hospital Mobile App', icon: <Stethoscope size={18} /> },
    ],
  },
];

export const advantages = [
  { title: 'AI-Driven Architecture', icon: <Sparkles size={22} />, desc: 'Self-healing systems that adapt to your business growth in real-time.' },
  { title: 'Fortress Security', icon: <ShieldCheck size={22} />, desc: 'Military-grade encryption and zero-trust protocols across all modules.' },
  { title: 'Universal Integration', icon: <Cpu size={22} />, desc: 'Connect with your existing tech stack through our robust API ecosystem.' },
];
