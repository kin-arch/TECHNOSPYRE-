import React from 'react';
import { MessageSquare, Mail, Phone, Clock, Shield, Zap, Users } from 'lucide-react';

export const contacts = [
  { 
    title: 'Chat with us', 
    desc: 'Instant support for technical inquiries and academy enrollment assistance.', 
    action: 'Start a live chat', 
    icon: <MessageSquare className="text-primary w-6 h-6" />, 
    color: 'primary' 
  },
  { 
    title: 'Send an Email', 
    desc: 'For partnerships, media requests, or custom enterprise solutions.', 
    action: 'hello@technospyre.io', 
    icon: <Mail className="text-primary w-6 h-6" />, 
    color: 'primary' 
  },
  { 
    title: 'Give us a Call', 
    desc: 'Speak directly with our specialized account managers and tech consultants.', 
    action: '+1 (800) TECH-SPYRE', 
    icon: <Phone className="text-primary w-6 h-6" />, 
    color: 'primary' 
  },
];

export const features = [
  { icon: <Clock size={18} />, label: '24/7 Global Support' },
  { icon: <Shield size={18} />, label: 'Secure & Confidential' },
  { icon: <Zap size={18} />, label: 'Fast Response Time' },
  { icon: <Users size={18} />, label: 'Dedicated Account Team' },
];
