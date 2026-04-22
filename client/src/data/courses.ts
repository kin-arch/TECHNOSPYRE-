import { CourseCategory } from '../types/courses';

export const courseCategories: CourseCategory[] = [
  {
    id: 'business',
    title: 'Online Business Courses',
    icon: 'business',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    courses: [
      { id: 'b1', name: 'Advance SEO Course', duration: '10 Weeks', fee: '20,000', category: 'Business', description: 'Master technical SEO, backlink strategies, and search engine algorithms to dominate rankings.' },
      { id: 'b2', name: 'Shopify Ecommerce Course', duration: '08 Weeks', fee: '15,000', category: 'Business', description: 'Build and scale high-converting online stores using the world\'s leading ecommerce platform.' },
      { id: 'b3', name: 'Digital Marketing', duration: '08 Weeks', fee: '20,000', category: 'Business', description: 'Complete mastery of social media, PPC, and content strategies for modern brand growth.' },
      { id: 'b4', name: 'Amazon Expert Course', duration: '08 Weeks', fee: '30,000', category: 'Business', description: 'From product sourcing to FBA logistics — everything you need to succeed on Amazon.' },
      { id: 'b5', name: 'Freelancing', duration: '04 Weeks', fee: '10,000', category: 'Business', description: 'Transform your skills into a high-income freelance career on Upwork and Fiverr.' },
    ]
  },
  {
    id: 'software',
    title: 'Software Development',
    icon: 'software',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&auto=format&fit=crop&q=80',
    courses: [
      { id: 'sw1', name: 'C# ASP.NET/ CORE/ MVC', duration: '12 Weeks', fee: '35,000', category: 'Software', description: 'Architect robust backend systems and enterprise web applications with modern C#.' },
      { id: 'sw2', name: 'C# Desktop application Development', duration: '08 Weeks', fee: '20,000', category: 'Software', description: 'Engineer high-performance native Windows applications using WinForms and WPF.' },
      { id: 'sw3', name: 'Java & Spring Development Program', duration: '08 Weeks', fee: '20,000', category: 'Software', description: 'Master Java enterprise development with Spring Boot and microservices architecture.' },
      { id: 'sw4', name: 'Object Oriented Analysis and Design Course', duration: '08 Weeks', fee: '20,000', category: 'Software', description: 'Learn to design scalable, maintainable software systems using SOLID principles and design patterns.' },
    ]
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: 'web',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
    courses: [
      { id: 'w1', name: 'Web Development for Beginners', duration: '08 Weeks', fee: '10,000', category: 'Web', description: 'The fundamental journey from HTML basics to building your first interactive websites.' },
      { id: 'w2', name: 'WordPress Web, Theme & Plugin Development', duration: '08 Weeks', fee: '15,000', category: 'Web', description: 'Go beyond templates — build custom themes and professional plugins for the WordPress ecosystem.' },
      { id: 'w3', name: 'PHP & Laravel', duration: '08 Weeks', fee: '15,000', category: 'Web', description: 'Master the elegant PHP framework for building modern, expressive web applications.' },
      { id: 'w4', name: 'Shopify Ecommerce Course', duration: '08 Weeks', fee: '15,000', category: 'Web', description: 'Specialized focus on Liquid templating and headless Shopify development.' },
      { id: 'w5', name: 'Full Stack Web Development', duration: '08 Weeks', fee: '15,000', category: 'Web', description: 'The complete path: Frontend React, Backend Node.js, and DevOps foundations.' },
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    icon: 'mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    courses: [
      { id: 'm1', name: 'Flutter', duration: '12 Weeks', fee: '50,000', category: 'Mobile', description: 'Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.' },
      { id: 'm2', name: 'Java & Android Mobile App Development', duration: '08 Weeks', fee: '30,000', category: 'Mobile', description: 'Master native Android development with Java and modern Android SDKs.' },
      { id: 'm3', name: 'iOS Mobile App Development', duration: '08 Weeks', fee: '50,000', category: 'Mobile', description: 'Engineer premium iOS experiences using Swift and SwiftUI architecture.' },
    ]
  },
  {
    id: 'ai',
    title: 'AI & Data Science',
    icon: 'ai',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop&q=80',
    courses: [
      { id: 'ai1', name: 'Machine Learning using MATLAB', duration: '12 Weeks', fee: '50,000', category: 'AI', description: 'Advanced mathematical modeling and prediction using MATLAB\'s deep learning toolboxes.' },
      { id: 'ai2', name: 'AI and Machine Learning using Python', duration: '12 Weeks', fee: '50,000', category: 'AI', description: 'The industry-standard path: Scikit-learn, TensorFlow, and PyTorch for real-world AI.' },
      { id: 'ai3', name: 'Business Intelligence using Power BI', duration: '08 Weeks', fee: '50,000', category: 'AI', description: 'Transform raw data into interactive, actionable business dashboards with Power BI.' },
    ]
  },
  {
    id: 'database',
    title: 'Database & Big Data',
    icon: 'database',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80',
    courses: [
      { id: 'db1', name: 'Oracle DBA Course (OCP: DBA Oracle 12C)', duration: '12 Weeks', fee: '45,000', category: 'Database', description: 'Master-level database administration and optimization for Oracle enterprise systems.' },
      { id: 'db2', name: 'Certified SQL Server Specialist', duration: '12 Weeks', fee: '45,000', category: 'Database', description: 'Comprehensive management, security, and performance tuning for Microsoft SQL Server.' },
      { id: 'db3', name: 'Essentials of Big Data', duration: '08 Weeks', fee: '50,000', category: 'Database', description: 'Introduction to Hadoop, Spark, and processing petabyte-scale datasets.' },
      { id: 'db4', name: 'MySQL', duration: '08 Weeks', fee: '20,000', category: 'Database', description: 'Fundamental relational database implementation for web and business apps.' },
      { id: 'db5', name: 'MongoDB', duration: '08 Weeks', fee: '20,000', category: 'Database', description: 'Building scalable applications with NoSQL and document-oriented data models.' },
      { id: 'db6', name: 'Firebase', duration: '08 Weeks', fee: '20,000', category: 'Database', description: 'Real-time databases and serverless backend architecture for modern apps.' },
    ]
  },
  {
    id: 'short',
    title: 'Short Courses',
    icon: 'short',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?w=800&auto=format&fit=crop&q=80',
    courses: [
      { id: 's1', name: 'Data Entry Operator', duration: '08 Weeks', fee: '14,000', category: 'Short Course', description: 'Precision data management and professional typing skills for administrative roles.' },
      { id: 's2', name: 'Graphics Designing', duration: '08 Weeks', fee: '12,000', category: 'Short Course', description: 'Visual storytelling and brand identity using Adobe Photoshop and Illustrator.' },
      { id: 's3', name: 'Spoken English', duration: '08 Weeks', fee: '15,000', category: 'Short Course', description: 'Fluent communication and professional presentation skills for the global tech market.' },
      { id: 's4', name: 'Typing Master', duration: '04 Weeks', fee: '4,000', category: 'Short Course', description: 'Intensive training for high-speed, accurate touch-typing.' },
      { id: 's5', name: 'Advance Excel', duration: '08 Weeks', fee: '10,000', category: 'Short Course', description: 'From pivot tables to macros — master financial modeling and data analysis.' },
      { id: 's6', name: 'Cyber Security', duration: '08 Weeks', fee: '40,000', category: 'Short Course', description: 'Ethical hacking foundations and network security protocols for modern enterprises.' },
    ]
  }
];

export const monthlyOffers = [
  {
    id: 'april-2026',
    month: 'April 2026',
    title: 'React Learning Festival',
    discount: '50%',
    validUntil: 'April 30, 2026',
    courses: [
      { id: 'react-beginner', name: 'React.js Beginner Course', originalFee: '16,000', discountedFee: '7,999' },
    ],
  },
];

export const reactCourse = {
  id: 'react',
  name: 'React Development',
  title: 'Master React.js from fundamentals to advanced concepts. Build modern, interactive user interfaces with hooks, context API, and state management.',
  beginner: {
    name: 'React.js Beginner',
    duration: '08 Weeks',
    originalFee: '16,000',
    discountedFee: '7,999',
    discount: '50%',
    description: 'Start your React journey! Learn the fundamentals of React.js, JSX, hooks, and build your first interactive web applications.',
    highlights: [
      'React Fundamentals & JSX',
      'Hooks (useState, useEffect, useContext)',
      'React Router Basics',
      'Component Architecture',
      'Building Mini Projects',
      'CSS & Styling in React',
    ],
    requirements: [
      'Basic HTML, CSS, and JavaScript knowledge',
      'Understanding of ES6+ JavaScript features',
      'A computer with internet access',
    ],
    syllabus: [
      { week: 'Week 1-2', topic: 'React Fundamentals & JSX' },
      { week: 'Week 3-4', topic: 'Hooks & State Management' },
      { week: 'Week 5-6', topic: 'React Router & Navigation' },
      { week: 'Week 7-8', topic: 'Real-world Projects' },
    ],
    certificate: 'React.js Beginner Certificate',
  },
  professional: {
    name: 'React.js Professional',
    duration: '12 Weeks',
    originalFee: '50,000',
    discountedFee: '24,999',
    discount: '51%',
    description: 'Master advanced React.js concepts including Redux Toolkit, TypeScript, testing, performance optimization, and enterprise-grade application development.',
    highlights: [
      'Advanced Redux & Redux Toolkit',
      'TypeScript with React',
      'Testing with Jest & React Testing Library',
      'Performance Optimization',
      'Server Components & Next.js',
      'Enterprise Architecture Patterns',
    ],
    requirements: [
      'Completed React Beginner course or equivalent knowledge',
      'Strong JavaScript/ES6+ skills',
      'Experience with web development fundamentals',
    ],
    syllabus: [
      { week: 'Week 1-3', topic: 'Advanced State Management (Redux)' },
      { week: 'Week 4-6', topic: 'TypeScript & Modern Patterns' },
      { week: 'Week 7-9', topic: 'Testing & Performance' },
      { week: 'Week 10-12', topic: 'Next.js & Enterprise Projects' },
    ],
    certificate: 'React.js Professional Certificate',
  },
};

export const diplomasData = [
  {
    title: 'Diploma in Information Technology (DIT)',
    duration: '1 Year',
    semesters: [
      {
        title: '1st Semester',
        subjects: [
          'Introduction to Computer & Operating System',
          'Business Applications & E-Commerce',
          'Database Management using MS Access',
          'Programming Fundamentals Flow Charts and VB.Net',
          'Functional English',
          'Work Ethics'
        ]
      },
      {
        title: '2nd Semester',
        subjects: [
          'Graphics Design & Animation',
          'System Analysis & Design',
          'Introduction to Computer Networking',
          'Web Development using HTML, CSS, JavaScript and WordPress',
          'Work Ethics II',
          'Functional English II',
          'Project'
        ]
      }
    ],
    feeStructure: [
      { label: 'Registration Fee', amount: '1,000' },
      { label: 'Monthly Tuition Fee', amount: '4,000' },
      { label: 'Stationary Charges', amount: '3,000' },
      { label: 'Security Fee (Refundable)', amount: '4,000' },
      { label: 'Board Registration Fee', amount: '3,700' },
      { label: 'Exam Fee', amount: '3,000' }
    ]
  },
  {
    title: 'Certificate in Information Technology (CIT)',
    duration: '6 Months',
    semesters: [
      {
        title: 'Term 1',
        subjects: [
          'Computer Fundamentals & OS',
          'MS Office & Internet Applications',
          'Basic Web Development',
          'English Typing'
        ]
      },
      {
        title: 'Term 2',
        subjects: [
          'Advanced Office Automation',
          'Graphic Design Basics',
          'Programming Fundamentals',
          'Final Project'
        ]
      }
    ],
    feeStructure: [
      { label: 'Registration Fee', amount: '500' },
      { label: 'Total Course Fee', amount: '3,500' },
      { label: 'Exam Fee', amount: '1,000' }
    ]
  },
  {
    title: 'Introduction to Information & Comm. Tech (IICT)',
    duration: '12 Weeks',
    semesters: [
      {
        title: 'Module 1',
        subjects: [
          'Fundamentals of Computers',
          'Digital Logic & Number Systems',
          'Introduction to Networking',
          'Internet Technologies'
        ]
      },
      {
        title: 'Module 2',
        subjects: [
          'Basics of Programming',
          'Database Concepts',
          'Cyber Security Awareness',
          'Professional Computing Ethics'
        ]
      }
    ],
    feeStructure: [
      { label: 'Registration Fee', amount: '1,000' },
      { label: 'Total Course Fee', amount: '18,000' },
      { label: 'Exam Fee', amount: '2,000' }
    ]
  }
];
