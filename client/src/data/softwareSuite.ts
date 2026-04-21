export type SoftwareSuiteItem = {
  emoji: string;
  title: string;
  shortDescription: string;
  readMore: string;
  keyFeatures: string[];
};

export const softwareSuite: SoftwareSuiteItem[] = [
  {
    emoji: '🏥',
    title: 'Hospital Management & Information System',
    shortDescription:
      'Complete digital solution to manage hospitals, patients, billing, and clinical workflows efficiently.',
    readMore:
      'A comprehensive system designed for hospitals and clinics to manage patient records, OPD/IPD, appointments, billing, pharmacy, lab, and reporting. It improves operational efficiency and ensures better patient care with real-time data access.',
    keyFeatures: [
      'Patient Registration & EMR',
      'Appointment Scheduling',
      'Billing & Insurance',
      'Pharmacy & Lab Integration',
      'Doctor Dashboard',
    ],
  },
  {
    emoji: '👨‍💼',
    title: 'Human Resource Management',
    shortDescription: 'Streamline employee management, payroll, and HR operations in one place.',
    readMore:
      'An advanced HR system to manage employee lifecycle including hiring, payroll, leave, and performance tracking. Helps organizations improve workforce productivity and compliance.',
    keyFeatures: ['Employee Records', 'Payroll Management', 'Leave & Attendance', 'Performance Evaluation'],
  },
  {
    emoji: '🧑‍💻',
    title: 'Employee Self Service Portal',
    shortDescription: 'Empower employees to manage their own data, leaves, and requests online.',
    readMore:
      'A web/mobile portal where employees can view payslips, apply for leaves, update profiles, and track attendance without HR dependency.',
    keyFeatures: ['Online Leave Requests', 'Payslip Download', 'Profile Management', 'Attendance View'],
  },
  {
    emoji: '⏱',
    title: 'Attendance Management',
    shortDescription: 'Track employee attendance with biometric and real-time monitoring.',
    readMore:
      'Automates attendance tracking with integration to biometric devices, reducing manual errors and improving workforce discipline.',
    keyFeatures: ['Biometric Integration', 'Shift Management', 'Late & Overtime Tracking', 'Reports & Analytics'],
  },
  {
    emoji: '📦',
    title: 'Supply Chain Management',
    shortDescription: 'Manage procurement, inventory, and vendor operations efficiently.',
    readMore:
      'A complete supply chain solution to track purchasing, stock levels, and supplier performance for better cost control and efficiency.',
    keyFeatures: ['Inventory Control', 'Purchase Orders', 'Vendor Management', 'Stock Alerts'],
  },
  {
    emoji: '💰',
    title: 'Finance',
    shortDescription: 'Powerful financial system for accounting, reporting, and budgeting.',
    readMore:
      'Handles all financial operations including general ledger, accounts payable/receivable, and financial reporting with accuracy and compliance.',
    keyFeatures: ['General Ledger', 'Trial Balance & Reports', 'Budgeting', 'Expense Tracking'],
  },
  {
    emoji: '🛠',
    title: 'Project Management / Work Permit',
    shortDescription: 'Plan, track, and manage projects and work permits seamlessly.',
    readMore:
      'Helps organizations manage tasks, timelines, and work permits with proper approvals and tracking for improved execution.',
    keyFeatures: ['Task Assignment', 'Workflow Approvals', 'Timeline Tracking', 'Reporting Dashboard'],
  },
  {
    emoji: '🎓',
    title: 'School & College Management',
    shortDescription: 'All-in-one system to manage educational institutions efficiently.',
    readMore:
      'Manages student records, admissions, attendance, exams, and fees with a centralized system for schools and colleges.',
    keyFeatures: ['Student Information System', 'Fee Management', 'Exams & Results', 'Attendance Tracking'],
  },
  {
    emoji: '🔍',
    title: 'Lost & Found System',
    shortDescription: 'Digitally track and manage lost and found items.',
    readMore:
      'Helps organizations log, track, and return lost items efficiently with searchable records and notifications.',
    keyFeatures: ['Item Logging', 'Claim Management', 'Notifications', 'Searchable Database'],
  },
  {
    emoji: '🛒',
    title: 'Point of Sales (POS)',
    shortDescription: 'Fast and reliable POS system for retail and restaurants.',
    readMore:
      'Handles sales transactions, inventory, and customer management with real-time reporting and billing.',
    keyFeatures: ['Billing & Invoicing', 'Inventory Integration', 'Sales Reports', 'Barcode Support'],
  },
  {
    emoji: '⚖️',
    title: 'Legal Case Management System',
    shortDescription: 'Organize and manage legal cases, documents, and hearings.',
    readMore:
      'A system designed for law firms and legal departments to manage cases, schedules, and documents securely.',
    keyFeatures: ['Case Tracking', 'Hearing Schedules', 'Document Management', 'Alerts & Reminders'],
  },
  {
    emoji: '🏨',
    title: 'Hoteling & Room Reservation',
    shortDescription: 'Manage hotel bookings, rooms, and guest services easily.',
    readMore:
      'Complete hotel management solution for reservations, check-in/check-out, billing, and housekeeping.',
    keyFeatures: ['Room Booking', 'Guest Management', 'Billing System', 'Housekeeping'],
  },
  {
    emoji: '🚚',
    title: 'Goods Transport / Bility System',
    shortDescription: 'Efficiently manage goods transport and bility operations.',
    readMore:
      'Designed for logistics companies to manage shipments, bilty records, and delivery tracking.',
    keyFeatures: ['Shipment Tracking', 'Bilty Management', 'Customer Records', 'Reporting'],
  },
  {
    emoji: '🛡',
    title: 'Insurance Integration System',
    shortDescription: 'Seamless integration with insurance providers for claims and policies.',
    readMore:
      'Supports motor, non-motor, and travel insurance workflows with automated claim processing and policy management.',
    keyFeatures: ['Policy Management', 'Claim Processing', 'API Integration'],
  },
];

