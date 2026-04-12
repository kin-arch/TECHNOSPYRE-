import React from 'react';
import { 
  Rocket, TrendingUp, Award, Globe, 
  Lightbulb, ShieldCheck, Star, Zap, 
  Users, Calendar, MapPin 
} from 'lucide-react';

export const leadership = [
  {
    name: 'Harris Javid',
    role: 'Chief Executive Officer',
    desc: 'Visionary architect with 20+ years in digital infrastructure and global scaling.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=8',
  },
  {
    name: 'Elena Vance',
    role: 'Chief Technology Officer',
    desc: 'Lead engineer for high-concurrency systems and pioneer in distributed neural networks.',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Dr. Julian Grey',
    role: 'Head of Academy',
    desc: 'Revolutionizing tech pedagogy through project-based deep immersion programs.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
  },
];

export const timeline = [
  { year: '2013', title: 'The Genesis', desc: 'Technospyre founded with a focus on custom kernel development.', icon: <Rocket size={18} /> },
  { year: '2017', title: 'TechnoPulse Launch', desc: 'Released our enterprise monitoring suite, serving 50+ Fortune 500 companies.', icon: <TrendingUp size={18} /> },
  { year: '2021', title: 'Academy Era', desc: 'Opened Technospyre Academy to cultivate the next generation of full-stack engineers.', icon: <Award size={18} /> },
  { year: 'Now', title: 'Global Expansion', desc: 'Scaling autonomous solutions across 4 continents with 200+ elite technologists.', icon: <Globe size={18} /> },
];

export const values = [
  { icon: <Lightbulb size={24} />, title: 'Innovation', desc: 'We don\'t follow trends — we create the blueprints for what\'s next. Our R&D lab is our heartbeat.', featured: true },
  { icon: <ShieldCheck size={24} />, title: 'Integrity', desc: 'Transparency is our default state. We build trust through radical honesty.' },
  { icon: <Star size={24} />, title: 'Excellence', desc: 'Precision in every line of code and every pixel of design.' },
  { icon: <Zap size={24} />, title: 'Empowerment', desc: 'Providing the tools for our clients and students to own their future.' },
];

export const globalStats = [
  { icon: <Users size={18} />, value: '200+', label: 'Elite Technologists' },
  { icon: <Globe size={18} />, value: '4', label: 'Continents' },
  { icon: <Calendar size={18} />, value: '10+', label: 'Years of Excellence' },
  { icon: <MapPin size={18} />, value: '12+', label: 'Tech Nodes' },
];
