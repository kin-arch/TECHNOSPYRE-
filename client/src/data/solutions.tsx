import React from 'react';
import {
  Settings, CreditCard, Globe, Smartphone, Sparkles, ShieldCheck, Cpu,
  Building2, HeartPulse, Users, Package, Shield, School,
  ShoppingCart, FileText, Home, Hotel,
  Stethoscope, Briefcase, Scale, Palette, GraduationCap, Tv2
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
    label: 'Operations',
    icon: <Settings size={24} />,
    description: 'Centralized ERP systems built for complex enterprise workflows — from healthcare and HR to insurance and inventory.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&auto=format&fit=crop&q=80',
    products: [
      {
        id: 'hospital-erp',
        category: 'operations',
        name: 'Hospital ERP Solutions',
        icon: <HeartPulse size={18} />,
        shortDescription: 'Comprehensive management system governing patient data, billing, and resource allocation.',
        longDetails: 'Our customized Hospital ERP ensures operational efficiency from front-desk admission to discharge. Integrated with AI scheduling, EMR, structured bed management, and a unified billing cycle. Empower healthcare professionals with tools that keep patient care paramount while digitizing endless paperwork logs. It serves as the digital heartbeat for modern clinics and large-scale, multi-branch healthcare institutions.',
        softwareImages: [
          'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
        ],
        features: [
          'Real-time Patient Monitoring',
          'Integrated EMR & Billing',
          'AI-Powered Appointment Scheduling',
          'Secure Multi-branch Data Sync',
          'Telemedicine Portal Integration'
        ],
      },
      {
        id: 'general-ledger',
        category: 'operations',
        name: 'General Ledger Solution',
        icon: <Building2 size={18} />,
        shortDescription: 'Intelligent financial backbone built for fast, secure, and compliant accounting operations.',
        longDetails: 'Precision in accounting with multi-currency tracking, real-time balance sheet insights, and predictive cash flow modeling. General Ledger Solution acts as a single-source-of-truth ensuring 100% compliant bookkeeping while remaining fast and intuitive. Replace fragmented spreadsheets with our unified ledger system engineered for enterprises handling large transaction volumes seamlessly.',
        softwareImages: [
          'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?w=1200&auto=format&fit=crop&q=80',
        ],
        features: [
          'Military-grade Security',
          'Automated Compliance Tracking',
          'Real-time Financial Insights',
          'Multi-currency Support',
          'Integrated Audit Trails'
        ],
      },
      {
        id: 'hr-erp',
        category: 'operations',
        name: 'Human Resource ERP',
        icon: <Users size={18} />,
        shortDescription: 'Streamline the employee lifecycle from recruitment and onboarding to analytics and payroll.',
        longDetails: 'Elevate your HR department with automated onboarding and continuous feedback loops. The HR ERP simplifies workforce planning by incorporating automated payroll calculations, secure employee portals, benefit tracking, and time-off administration into one cohesive platform. Transform human capital strategies directly into data-backed decisions utilizing its internal analytics.',
        softwareImages: [
          'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80',
        ],
        features: [
          'Automated Payroll & Tax',
          'Self-Service Employee Portal',
          'Strategic Workforce Analytics',
          'Seamless Recruitment Pipeline',
          'Performance Review Framework'
        ],
      },
      {
        id: 'inventory-erp',
        category: 'operations',
        name: 'Inventory & Procurement',
        icon: <Package size={18} />,
        shortDescription: 'Maintain perfect stock levels using AI-powered procurement timelines and real-time alerts.',
        longDetails: 'A high-visibility inventory management portal capable of tracking items across global supply chains. Featuring multi-location bin tracking, automated vendor resupply requests, and integrated lot traceability. Eliminate stockouts and deadstock scenarios with dynamic projection models that predict the exact reorder points based on seasonal and regional demand shifts.',
        softwareImages: [
          'https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1587293852726-adfb7f10b83e?w=1200&auto=format&fit=crop&q=80',
        ],
      },
      {
        id: 'insurance-erp',
        category: 'operations',
        name: 'Insurance ERP',
        icon: <Shield size={18} />,
        shortDescription: 'Accelerate underwriting and streamline claims processing with integrated policy generation.',
        longDetails: 'Designed for insurance brokers and large-scale providers to manage policies holistically. Featuring end- policy lifecycle tracking, automated compliance checking, intelligent risk assessment modules, and portal access for agents and clients. The software ensures high data integrity while drastically reducing the time- for complex multi-tier policies.',
        softwareImages: [
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&auto=format&fit=crop&q=80',
        ],
      },
      {
        id: 'school-erp',
        category: 'operations',
        name: 'School Management System',
        icon: <School size={18} />,
        shortDescription: 'Connect students, educators, and administrators inside an intuitive collaborative platform.',
        longDetails: 'From academic grading systems to cafeteria POS integration, our School Management platform covers every aspect of modern educational institutional control. Providing personalized portals for parents to track progress, built-in communication boards, transport scheduling tracking, and a centralized hub for educators to distribute curriculum and assess performance metrics dynamically and digitally.',
        softwareImages: [
          'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&auto=format&fit=crop&q=80',
        ],
        features: [
          'Digital Gradebooks & Assessment',
          'Interactive Parent-Teacher Portal',
          'Fleet Management for School Buses',
          'Integrated Learning Management',
          'Secure Fee & POS System'
        ],
      },
    ],
  },
  {
    id: 'sales',
    label: 'Sales',
    icon: <CreditCard size={24} />,
    description: 'Next-gen POS and revenue tools that transform everyday transactions into powerful business intelligence.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop&q=80',
    products: [
      {
        id: 'pos-cloud',
        category: 'sales',
        name: 'Point of Sales',
        icon: <ShoppingCart size={18} />,
        shortDescription: 'Omnichannel processing to capture sales and track daily performance targets.',
        longDetails: 'Cloud-based POS systems enabling fluid checkouts via mobile or terminal structures. Directly integrates localized inventory depletion, manages loyalty programs natively, and functions even when offline. Whether handling high volume QSRs, retail boutiques, or massive department stores, our Point of Sales offers zero latency transaction resolutions combined with deep-dive performance metrics.',
        softwareImages: [
          'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&auto=format&fit=crop&q=80',
        ],
      },
      {
        id: 'invoicing',
        category: 'sales',
        name: 'Invoicing',
        icon: <FileText size={18} />,
        shortDescription: 'Automated recurring billing, quote- lifecycle and immediate payment realization.',
        longDetails: 'Produce professional, customizable invoices instantly and integrate multiple payment gateways to get paid faster. Designed carefully extending out from CRM tools, this module sends automated payment reminders, processes recurring subscriptions, captures digital signatures for approvals, and reconciles incoming transactions against the larger ledger effortlessly.',
        softwareImages: [
          'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&auto=format&fit=crop&q=80',
        ],
      },
      {
        id: 'real-estate',
        category: 'sales',
        name: 'Real Estate',
        icon: <Home size={18} />,
        shortDescription: 'Manage properties intelligently: visualize portfolios and streamline tenant relationships.',
        longDetails: 'End- property life cycle control ranging from land procurement analysis to final unit sales. Brokers can utilize virtual tour placements, generate legally compliant leases out of templates, track scheduled maintenance requests seamlessly, and calculate complex multi-tiered commissions. Empower your sales force with robust mobile access on-the-go at every property site.',
        softwareImages: [
          'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
        ],
      },
      {
        id: 'hotel-management',
        category: 'sales',
        name: 'Hotel Management',
        icon: <Hotel size={18} />,
        shortDescription: 'Enhance guest experiences directly with an interconnected suite for reservations and operations.',
        longDetails: 'Maximize occupancy configurations and handle dynamic room pricing automatically. This integrated suite commands the front desk booking framework, manages housekeeping assignments in real-time, regulates banquet/event spaces, and incorporates restaurant points of sale. Unify large hospitality groups to run at peak coordination while giving every guest an exceptionally smooth stay experience.',
        softwareImages: [
          'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=1200&auto=format&fit=crop&q=80',
        ],
      },
    ],
  },
  {
    id: 'websites',
    label: 'Websites',
    icon: <Globe size={24} />,
    description: 'Bespoke digital experiences that blend high-performance engineering with avant-garde editorial design.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&auto=format&fit=crop&q=80',
    products: [
      {
        id: 'web-business',
        category: 'websites',
        name: 'Business-Oriented',
        icon: <Briefcase size={18} />,
        shortDescription: 'Conversion-focused corporate landing pages driving lead generation and professional credibility.',
        longDetails: 'Designed to mirror your offline corporate success strictly online. Built with modern framework technologies like NextJS and React, we ensure load speeds are lightning-fast which significantly boosts SEO rankings. Features include interconnected CRM lead capture forms, high-convertive layout wireframes, multi-language support, and CMS (Content Management System) integration for fast structural updates directly by your staff.',
        softwareImages: [
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&auto=format&fit=crop&q=80',
        ],
      },
      {
        id: 'web-professional',
        category: 'websites',
        name: 'Professional & Legal',
        icon: <Scale size={18} />,
        shortDescription: 'Distinguished, secure, and accessible portals designed specifically to inspire trust and demonstrate expertise.',
        longDetails: 'Geared towards law firms, medical specialists, and consulting agencies that handle delicate data. These websites prioritize robust backend security and stringent accessibility standard compliances (ADA/WCAG). Features commonly include encrypted client login portals, secure document uplink, integrated appointment scheduling platforms, and clear, distinguished brand storytelling interfaces ensuring an aura of indisputable authority.',
        softwareImages: [
          'https://images.unsplash.com/photo-1507679622830-178b543db2b0?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80',
        ],
      },
      {
        id: 'web-creative',
        category: 'websites',
        name: 'Creative & Personal',
        icon: <Palette size={18} />,
        shortDescription: 'Experimental frontend architectures combining WebGL, smooth scrolling, and highly immersive interactive media.',
        longDetails: 'Showcase your portfolio dynamically breaking away from grid conventions entirely. We utilize ThreeJS, Framer Motion, and CSS-driven physics to construct websites that effectively act as engaging interactive art pieces. These bespoke creations are aimed directly at designers, artists, production studios, and brands where aesthetic expression and high-impact identity outweigh standardized usability paradigms natively.',
        softwareImages: [
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&auto=format&fit=crop&q=80',
        ],
      },
      {
        id: 'web-educational',
        category: 'websites',
        name: 'Educational',
        icon: <GraduationCap size={18} />,
        shortDescription: 'Knowledge-sharing hubs focusing on LMS (Learning Management System) architecture and engagement tracking.',
        longDetails: 'Construct digital campuses tailored for universities, e-learning creators, and subscription seminars. Features span protected course modules, integrated progress assessment quizzes, rich multimedia players tracking watch times securely, and digital certification generation. Built entirely on scalable infrastructure preparing the platform to serve ten to ten-thousand students without latency drops simultaneously.',
        softwareImages: [
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&auto=format&fit=crop&q=80',
        ],
      },
      {
        id: 'web-media',
        category: 'websites',
        name: 'Media & Entertainment',
        icon: <Tv2 size={18} />,
        shortDescription: 'High-bandwidth delivery architectures capable of serving massive concurrent traffic via global CDN integrations.',
        longDetails: 'Specifically molded to handle large-scale streaming, news dissemination, and content delivery logic constraints. Leveraging caching endpoints intelligently alongside customized Content Delivery Networks (CDNs) guarantees that high-resolution visuals and video loads without buffering irrespective of geographic location. Packed with sophisticated ad network setups natively and content recommendation AI logic parameters.',
        softwareImages: [
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200&auto=format&fit=crop&q=80',
        ],
      },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile Apps',
    icon: <Smartphone size={24} />,
    description: 'Native iOS & Android solutions engineered for performance, delight, and real-world impact.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80',
    products: [
      {
        id: 'mobile-pos',
        category: 'mobile',
        name: 'POS Mobile App',
        icon: <ShoppingCart size={18} />,
        shortDescription: 'Mobilize your cashiers across the retail floor mapping transactions and syncing databases instantly.',
        longDetails: 'Untether checkout experiences by turning any tablet or mobile device into a high-powered, fully integrated point of sale system. Facilitating NFC and decentralized payments, the app links instantly with our core cloud system keeping local inventory counts completely synced. Eliminate checkout lines altogether granting personalized customer consultations right from the shop floor aisles directly.',
        softwareImages: [
          'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1200&auto=format&fit=crop&q=80',
        ],
      },
      {
        id: 'mobile-health',
        category: 'mobile',
        name: 'Health Mobile App',
        icon: <HeartPulse size={18} />,
        shortDescription: 'Telemedicine integrations, vital tracking endpoints, and secured patient communication lines globally.',
        longDetails: 'Bridge the clinical barrier with mobile solutions allowing patients to consult specialists securely. Incorporating HIPAA-compliant encrypted video chat infrastructures, local pharmacy electronic prescription ordering, and IoT (Internet of Things) smartwatch wearable integrations monitoring vitals daily. Giving medical practices expansive patient outreach beyond traditional hospital borders seamlessly.',
        softwareImages: [
          'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
        ],
      },
      {
        id: 'mobile-hospital',
        category: 'mobile',
        name: 'Hospital Mobile App',
        icon: <Stethoscope size={18} />,
        shortDescription: 'Internal staff coordination ensuring rapid response intervals spanning vast campus ecosystems immediately.',
        longDetails: 'Developed rigidly for inside-hospital usage; this mobile application enables distinct operational command right at the pockets of physicians and nurses simultaneously. Allowing them to review comprehensive digital patient histories en route, manage shift allocations dynamically, input critical observations bedside, and receive emergency code deployment push notifications actively throughout hospital premises.',
        softwareImages: [
          'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1200&auto=format&fit=crop&q=80',
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
