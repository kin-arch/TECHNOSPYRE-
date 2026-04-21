import React from 'react';
import {
  Settings, CreditCard, Globe, Smartphone, Sparkles, ShieldCheck, Cpu,
  Building2, HeartPulse, Users, Package, Shield, School,
  ShoppingCart, FileText, Home, Hotel,
  Stethoscope, Briefcase, Scale, Palette, GraduationCap, Tv2,
  Clock, UserCheck, Wallet, Search, Truck, ClipboardCheck
} from 'lucide-react';

export type Product = {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: string;
  shortDescription: string;
  longDetails: string;
  softwareImages: string[];
  demoVideo?: string;
  features?: string[];
};

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
    label: 'Enterprise Operations',
    icon: <Settings size={24} />,
    description: 'Centralized ERP systems built for complex enterprise workflows — from healthcare and HR to global supply chains.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&auto=format&fit=crop&q=80',
    products: [
      {
        id: 'hospital-management',
        category: 'operations',
        name: 'Hospital Management & Information System',
        icon: <HeartPulse size={18} />,
        shortDescription: 'Complete digital solution to manage hospitals, patients, billing, and clinical workflows efficiently.',
        longDetails: 'A comprehensive system designed for hospitals and clinics to manage patient records, OPD/IPD, appointments, billing, pharmacy, lab, and reporting. It improves operational efficiency and ensures better patient care with real-time data access.',
        softwareImages: [
          'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
        ],
        features: [
          'Patient Registration & EMR',
          'Appointment Scheduling',
          'Billing & Insurance',
          'Pharmacy & Lab Integration',
          'Doctor Dashboard'
        ],
      },
      {
        id: 'hr-management',
        category: 'operations',
        name: 'Human Resource Management',
        icon: <Users size={18} />,
        shortDescription: 'Streamline employee management, payroll, and HR operations in one place.',
        longDetails: 'An advanced HR system to manage employee lifecycle including hiring, payroll, leave, and performance tracking. Helps organizations improve workforce productivity and compliance.',
        softwareImages: [
          'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80',
        ],
        features: [
          'Employee Records',
          'Payroll Management',
          'Leave & Attendance',
          'Performance Evaluation'
        ],
      },
      {
        id: 'employee-portal',
        category: 'operations',
        name: 'Employee Self Service Portal',
        icon: <UserCheck size={18} />,
        shortDescription: 'Empower employees to manage their own data, leaves, and requests online.',
        longDetails: 'A web/mobile portal where employees can view payslips, apply for leaves, update profiles, and track attendance without HR dependency.',
        softwareImages: [
          'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80',
        ],
        features: [
          'Online Leave Requests',
          'Payslip Download',
          'Profile Management',
          'Attendance View'
        ],
      },
      {
        id: 'attendance-management',
        category: 'operations',
        name: 'Attendance Management',
        icon: <Clock size={18} />,
        shortDescription: 'Track employee attendance with biometric and real-time monitoring.',
        longDetails: 'Automates attendance tracking with integration to biometric devices, reducing manual errors and improving workforce discipline.',
        softwareImages: [
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
        ],
        features: [
          'Biometric Integration',
          'Shift Management',
          'Late & Overtime Tracking',
          'Reports & Analytics'
        ],
      },
      {
        id: 'supply-chain',
        category: 'operations',
        name: 'Supply Chain Management',
        icon: <Truck size={18} />,
        shortDescription: 'Manage procurement, inventory, and vendor operations efficiently.',
        longDetails: 'A complete supply chain solution to track purchasing, stock levels, and supplier performance for better cost control and efficiency.',
        softwareImages: [
          'https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?w=1200&auto=format&fit=crop&q=80',
        ],
        features: [
          'Inventory Control',
          'Purchase Orders',
          'Vendor Management',
          'Stock Alerts'
        ],
      },
      {
        id: 'finance-system',
        category: 'operations',
        name: 'Finance',
        icon: <Wallet size={18} />,
        shortDescription: 'Powerful financial system for accounting, reporting, and budgeting.',
        longDetails: 'Handles all financial operations including general ledger, accounts payable/receivable, and financial reporting with accuracy and compliance.',
        softwareImages: [
          'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80',
        ],
        features: [
          'General Ledger',
          'Trial Balance & Reports',
          'Budgeting',
          'Expense Tracking'
        ],
      },
      {
        id: 'project-management',
        category: 'operations',
        name: 'Project Management / Work Permit',
        icon: <ClipboardCheck size={18} />,
        shortDescription: 'Plan, track, and manage projects and work permits seamlessly.',
        longDetails: 'Helps organizations manage tasks, timelines, and work permits with proper approvals and tracking for improved execution.',
        softwareImages: [
          'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&auto=format&fit=crop&q=80',
        ],
        features: [
          'Task Assignment',
          'Workflow Approvals',
          'Timeline Tracking',
          'Reporting Dashboard'
        ],
      },
      {
        id: 'school-management',
        category: 'operations',
        name: 'School & College Management',
        icon: <School size={18} />,
        shortDescription: 'All-in-one system to manage educational institutions efficiently.',
        longDetails: 'Manages student records, admissions, attendance, exams, and fees with a centralized system for schools and colleges.',
        softwareImages: [
          'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&auto=format&fit=crop&q=80',
        ],
        features: [
          'Student Information System',
          'Fee Management',
          'Exams & Results',
          'Attendance Tracking'
        ],
      },
      {
        id: 'lost-found',
        category: 'operations',
        name: 'Lost & Found System',
        icon: <Search size={18} />,
        shortDescription: 'Digitally track and manage lost and found items.',
        longDetails: 'Helps organizations log, track, and return lost items efficiently with searchable records and notifications.',
        softwareImages: [
          'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop&q=80',
        ],
        features: [
          'Item Logging',
          'Claim Management',
          'Notifications',
          'Searchable Database'
        ],
      },
      {
        id: 'legal-management',
        category: 'operations',
        name: 'Legal Case Management System',
        icon: <Scale size={18} />,
        shortDescription: 'Organize and manage legal cases, documents, and hearings.',
        longDetails: 'A system designed for law firms and legal departments to manage cases, schedules, and documents securely.',
        softwareImages: [
          'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&auto=format&fit=crop&q=80',
        ],
        features: [
          'Case Tracking',
          'Hearing Schedules',
          'Document Management',
          'Alerts & Reminders'
        ],
      },
      {
        id: 'goods-transport',
        category: 'operations',
        name: 'Goods Transport / Bility System',
        icon: <Truck size={18} />,
        shortDescription: 'Efficiently manage goods transport and bility operations.',
        longDetails: 'Designed for logistics companies to manage shipments, bilty records, and delivery tracking.',
        softwareImages: [
          'https://images.unsplash.com/photo-1519003722824-192d992a6059?w=1200&auto=format&fit=crop&q=80',
        ],
        features: [
          'Shipment Tracking',
          'Bilty Management',
          'Customer Records',
          'Reporting'
        ],
      },
      {
        id: 'insurance-system',
        category: 'operations',
        name: 'Insurance Integration System',
        icon: <Shield size={18} />,
        shortDescription: 'Seamless integration with insurance providers for claims and policies.',
        longDetails: 'Supports motor, non-motor, and travel insurance workflows with automated claim processing and policy management.',
        softwareImages: [
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80',
        ],
        features: [
          'Policy Management',
          'Claim Processing',
          'API Integration'
        ],
      },
    ],
  },
  {
    id: 'sales',
    label: 'Sales & Hospitality',
    icon: <CreditCard size={24} />,
    description: 'Specialized solutions for retail, restaurants, and the hospitality industry.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop&q=80',
    products: [
      {
        id: 'pos-cloud',
        category: 'sales',
        name: 'Point of Sales (POS)',
        icon: <ShoppingCart size={18} />,
        shortDescription: 'Fast and reliable POS system for retail and restaurants.',
        longDetails: 'Handles sales transactions, inventory, and customer management with real-time reporting and billing.',
        softwareImages: [
          'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&auto=format&fit=crop&q=80',
        ],
        features: [
          'Billing & Invoicing',
          'Inventory Integration',
          'Sales Reports',
          'Barcode Support'
        ],
      },
      {
        id: 'hotel-management',
        category: 'sales',
        name: 'Hoteling & Room Reservation',
        icon: <Hotel size={18} />,
        shortDescription: 'Manage hotel bookings, rooms, and guest services easily.',
        longDetails: 'Complete hotel management solution for reservations, check-in/check-out, billing, and housekeeping.',
        softwareImages: [
          'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=1200&auto=format&fit=crop&q=80',
        ],
        features: [
          'Room Booking',
          'Guest Management',
          'Billing System',
          'Housekeeping'
        ],
      },
    ],
  },
];

export const getAllProducts = (): Product[] => {
  return categories.flatMap(category => category.products);
};

export const advantages = [
  { title: 'AI-Driven Architecture', icon: <Sparkles size={22} />, desc: 'Self-healing systems that adapt to your business growth in real-time.' },
  { title: 'Fortress Security', icon: <ShieldCheck size={22} />, desc: 'Military-grade encryption and zero-trust protocols across all modules.' },
  { title: 'Universal Integration', icon: <Cpu size={22} />, desc: 'Connect with your existing tech stack through our robust API ecosystem.' },
];

