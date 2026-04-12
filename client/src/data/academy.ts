import { CourseCategory } from '../types/academy';

export const courseCategories: CourseCategory[] = [
  {
    id: 'business',
    title: 'Online Business Courses',
    icon: 'business',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    courses: [
      { id: 'b1', name: 'Advance SEO Course', duration: '10 Weeks', fee: '20,000', category: 'Business', description: 'Comprehensive training program for Advance SEO Course.' },
      { id: 'b2', name: 'Shopify Ecommerce Course', duration: '08 Weeks', fee: '15,000', category: 'Business', description: 'Comprehensive training program for Shopify Ecommerce Course.' },
      { id: 'b3', name: 'Digital Marketing', duration: '08 Weeks', fee: '20,000', category: 'Business', description: 'Comprehensive training program for Digital Marketing.' },
      { id: 'b4', name: 'Amazon Expert Course', duration: '08 Weeks', fee: '30,000', category: 'Business', description: 'Comprehensive training program for Amazon Expert Course.' },
      { id: 'b5', name: 'Freelancing', duration: '04 Weeks', fee: '10,000', category: 'Business', description: 'Comprehensive training program for Freelancing.' },
    ]
  },
  {
    id: 'software',
    title: 'Software Development',
    icon: 'software',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&auto=format&fit=crop&q=80',
    courses: [
      { id: 'sw1', name: 'C# ASP.NET/ CORE/ MVC', duration: '12 Weeks', fee: '35,000', category: 'Software', description: 'Comprehensive training program for C# ASP.NET/ CORE/ MVC.' },
      { id: 'sw2', name: 'C# Desktop application Development', duration: '08 Weeks', fee: '20,000', category: 'Software', description: 'Comprehensive training program for C# Desktop application Development.' },
      { id: 'sw3', name: 'Java & Spring Development Program', duration: '08 Weeks', fee: '20,000', category: 'Software', description: 'Comprehensive training program for Java & Spring Development Program.' },
      { id: 'sw4', name: 'Object Oriented Analysis and Design Course', duration: '08 Weeks', fee: '20,000', category: 'Software', description: 'Comprehensive training program for Object Oriented Analysis and Design Course.' },
    ]
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: 'web',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
    courses: [
      { id: 'w1', name: 'Web Development for Beginners', duration: '08 Weeks', fee: '10,000', category: 'Web', description: 'Comprehensive training program for Web Development for Beginners.' },
      { id: 'w2', name: 'WordPress Web, Theme & Plugin Development', duration: '08 Weeks', fee: '15,000', category: 'Web', description: 'Comprehensive training program for WordPress Web, Theme & Plugin Development.' },
      { id: 'w3', name: 'PHP & Laravel', duration: '08 Weeks', fee: '15,000', category: 'Web', description: 'Comprehensive training program for PHP & Laravel.' },
      { id: 'w4', name: 'Shopify Ecommerce Course', duration: '08 Weeks', fee: '15,000', category: 'Web', description: 'Comprehensive training program for Shopify Ecommerce Course.' },
      { id: 'w5', name: 'Full Stack Web Development', duration: '08 Weeks', fee: '15,000', category: 'Web', description: 'Comprehensive training program for Full Stack Web Development.' },
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    icon: 'mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    courses: [
      { id: 'm1', name: 'Flutter', duration: '12 Weeks', fee: '50,000', category: 'Mobile', description: 'Comprehensive training program for Flutter.' },
      { id: 'm2', name: 'Java & Android Mobile App Development', duration: '08 Weeks', fee: '30,000', category: 'Mobile', description: 'Comprehensive training program for Java & Android Mobile App Development.' },
      { id: 'm3', name: 'iOS Mobile App Development', duration: '08 Weeks', fee: '50,000', category: 'Mobile', description: 'Comprehensive training program for iOS Mobile App Development.' },
    ]
  },
  {
    id: 'ai',
    title: 'AI & Data Science',
    icon: 'ai',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop&q=80',
    courses: [
      { id: 'ai1', name: 'Machine Learning using MATLAB', duration: '12 Weeks', fee: '50,000', category: 'AI', description: 'Comprehensive training program for Machine Learning using MATLAB.' },
      { id: 'ai2', name: 'AI and Machine Learning using Python', duration: '12 Weeks', fee: '50,000', category: 'AI', description: 'Comprehensive training program for AI and Machine Learning using Python.' },
      { id: 'ai3', name: 'Business Intelligence using Power BI', duration: '08 Weeks', fee: '50,000', category: 'AI', description: 'Comprehensive training program for Business Intelligence using Power BI.' },
    ]
  },
  {
    id: 'database',
    title: 'Database & Big Data',
    icon: 'database',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80',
    courses: [
      { id: 'db1', name: 'Oracle DBA Course (OCP: DBA Oracle 12C)', duration: '12 Weeks', fee: '45,000', category: 'Database', description: 'Comprehensive training program for Oracle DBA Course (OCP: DBA Oracle 12C).' },
      { id: 'db2', name: 'Certified SQL Server Specialist', duration: '12 Weeks', fee: '45,000', category: 'Database', description: 'Comprehensive training program for Certified SQL Server Specialist.' },
      { id: 'db3', name: 'Essentials of Big Data', duration: '08 Weeks', fee: '50,000', category: 'Database', description: 'Comprehensive training program for Essentials of Big Data.' },
      { id: 'db4', name: 'MySQL', duration: '08 Weeks', fee: '20,000', category: 'Database', description: 'Comprehensive training program for MySQL.' },
      { id: 'db5', name: 'MongoDB', duration: '08 Weeks', fee: '20,000', category: 'Database', description: 'Comprehensive training program for MongoDB.' },
      { id: 'db6', name: 'Firebase', duration: '08 Weeks', fee: '20,000', category: 'Database', description: 'Comprehensive training program for Firebase.' },
    ]
  },
  {
    id: 'short',
    title: 'Short Courses',
    icon: 'short',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?w=800&auto=format&fit=crop&q=80',
    courses: [
      { id: 's1', name: 'Data Entry Operator', duration: '08 Weeks', fee: '14,000', category: 'Short Course', description: 'Comprehensive training program for Data Entry Operator.' },
      { id: 's2', name: 'Graphics Designing', duration: '08 Weeks', fee: '12,000', category: 'Short Course', description: 'Comprehensive training program for Graphics Designing.' },
      { id: 's3', name: 'Spoken English', duration: '08 Weeks', fee: '15,000', category: 'Short Course', description: 'Comprehensive training program for Spoken English.' },
      { id: 's4', name: 'Typing Master', duration: '04 Weeks', fee: '4,000', category: 'Short Course', description: 'Comprehensive training program for Typing Master.' },
      { id: 's5', name: 'Advance Excel', duration: '08 Weeks', fee: '10,000', category: 'Short Course', description: 'Comprehensive training program for Advance Excel.' },
      { id: 's6', name: 'Cyber Security', duration: '08 Weeks', fee: '40,000', category: 'Short Course', description: 'Comprehensive training program for Cyber Security.' },
    ]
  }
];

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
