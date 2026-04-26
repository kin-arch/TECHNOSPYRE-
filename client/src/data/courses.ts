import { CourseCategory } from '../types/courses';

export const courseCategories: CourseCategory[] = [
  {
    id: 'software-web',
    title: 'Software & Web Development Track',
    icon: 'software',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
    courses: [
      { id: 'sw1', name: '.NET Professional', duration: '12 Weeks', fee: '45,000', category: 'Software & Web', description: 'C# Programming & OOP, ASP.NET (Web Forms / MVC / Web API), SQL Server & Database Design, Real-World Project' },
      { id: 'sw2', name: 'Web Development (MERN / Laravel)', duration: '12 Weeks', fee: '50,000', category: 'Software & Web', description: 'HTML5, CSS3, JavaScript, MERN Stack (MongoDB, Express, React, Node), Laravel & REST APIs, Full-Stack Project' },
      { id: 'sw3', name: 'Mobile App Development', duration: '12 Weeks', fee: '50,000', category: 'Software & Web', description: 'Cross-Platform App Development, API Integration & Firebase, App UI/UX Design, Play Store Deployment' },
      { id: 'sw4', name: 'WordPress / Shopify Development', duration: '8 Weeks', fee: '15,000', category: 'Software & Web', description: 'Learn to build professional websites and ecommerce stores.' },
    ]
  },
  {
    id: 'freelance-digital',
    title: 'Freelancing & Digital Skills',
    icon: 'business',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    courses: [
      { id: 'fd1', name: 'Digital Marketing', duration: '8 Weeks', fee: '20,000', category: 'Freelance & Digital', description: 'Complete digital marketing strategies.' },
      { id: 'fd2', name: 'Advance SEO', duration: '8 Weeks', fee: '15,000', category: 'Freelance & Digital', description: 'Search Engine Optimization mastery.' },
      { id: 'fd3', name: 'Amazon Expert', duration: '12 Weeks', fee: '24,000', category: 'Freelance & Digital', description: 'Complete Amazon selling and FBA expertise.' },
      { id: 'fd4', name: 'Copywriting', duration: '4 Weeks', fee: '10,000', category: 'Freelance & Digital', description: 'Learn professional copywriting techniques.' },
      { id: 'fd5', name: 'UI / UX Design', duration: '12 Weeks', fee: '24,000', category: 'Freelance & Digital', description: 'User interface and user experience design.' },
      { id: 'fd6', name: 'Freelancing Platforms', duration: '4 Weeks', fee: '10,000', category: 'Freelance & Digital', description: 'Master platforms like Upwork and Fiverr.' },
    ]
  },
  {
    id: 'data-ai-db',
    title: 'Data, AI & Databases',
    icon: 'ai',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop&q=80',
    courses: [
      { id: 'dad1', name: 'AI & Machine Learning', duration: '8 Weeks', fee: '50,000', category: 'Data & AI', description: 'Artificial Intelligence and Machine Learning fundamentals.' },
      { id: 'dad2', name: 'Data Analytics & Power BI', duration: '4 Weeks', fee: '50,000', category: 'Data & AI', description: 'Data analysis and visualization with Power BI.' },
      { id: 'dad3', name: 'SQL Server/Oracle, MySQL', duration: '4 Weeks', fee: '20,000', category: 'Data & AI', description: 'Database management systems.' },
      { id: 'dad4', name: 'Big Data & Cloud Basics', duration: '8 Weeks', fee: '40,000', category: 'Data & AI', description: 'Introduction to big data and cloud technologies.' },
      { id: 'dad5', name: 'Advance Python Course', duration: '8 Weeks', fee: '30,000', category: 'Data & AI', description: 'Advanced Python programming.' },
    ]
  },
  {
    id: 'short-term',
    title: 'Short Term Certifications',
    icon: 'short',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?w=800&auto=format&fit=crop&q=80',
    courses: [
      { id: 'st1', name: 'Office Automation', duration: '6 Weeks', fee: '12,000', category: 'Short Term', description: 'MS Office and general computer automation.' },
      { id: 'st2', name: 'Data Entry', duration: '12 Weeks', fee: '18,000', category: 'Short Term', description: 'Professional data entry skills.' },
      { id: 'st3', name: 'Graphics Designing', duration: '6 Weeks', fee: '20,000', category: 'Short Term', description: 'Graphic design fundamentals.' },
      { id: 'st4', name: 'Spoken English', duration: '12 Weeks', fee: '24,000', category: 'Short Term', description: 'English communication skills.' },
      { id: 'st5', name: 'Programming Languages', duration: '6 Weeks', fee: '16,000', category: 'Short Term', description: 'Basics of various programming languages.' },
      { id: 'st6', name: 'HTML/CSS/Javascript', duration: '8 Weeks', fee: '16,000', category: 'Short Term', description: 'Frontend web basics.' },
      { id: 'st7', name: 'AutoCad (Mechanical/Civil)', duration: '12 Weeks', fee: '24,000', category: 'Short Term', description: 'AutoCad design for engineering.' },
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
      { label: 'Institute Reg Fee', amount: '1,000' },
      { label: 'Tuition Fee', amount: '4,500' },
      { label: 'Board Reg Fee', amount: '4,800' },
      { label: 'Board Examination Fee', amount: '5,000' }
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
      { label: 'Reg Fee Institute', amount: '1,000' },
      { label: 'Monthly Fee', amount: '4,000' }
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
      { label: 'Reg Fee Institute', amount: '1,000' },
      { label: 'Monthly Fee', amount: '6,000' }
    ]
  }
];
