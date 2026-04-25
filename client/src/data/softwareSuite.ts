export type SoftwareModule = {
  title: string;
  description: string;
  category: string;
};

export type SoftwareSuiteItem = {
  productId: string;
  title: string;
  shortDescription: string;
  readMore: string;
  moduleSummary: string;
  featureHighlights: string[];
  keyFeatures: SoftwareModule[];
};

export const softwareSuite: SoftwareSuiteItem[] = [
  {
    productId: 'hospital-management',
    title: 'Hospital Management & Information System',
    shortDescription:
      'A connected hospital platform for patient care, clinical workflows, billing, pharmacy, and compliance.',
    readMore:
      'Built for hospitals, clinics, and diagnostic centers that need one governed system for patient journeys, care delivery, finance, and administration.',
    moduleSummary:
      'Designed for multi-department healthcare operations with coordinated clinical, administrative, and revenue-cycle workflows.',
    featureHighlights: [
      'End-to-end patient lifecycle from registration to discharge',
      'Integrated billing, insurance, pharmacy, and laboratory operations',
      'Clinical dashboards for doctors, nurses, and administrators',
      'Accreditation-ready reporting, audit trails, and data governance',
      'Multi-branch coordination for hospitals and specialty clinics',
    ],
    keyFeatures: [
      { title: 'Patient Registration & MRN', description: 'Create unique patient identities, demographics, guarantor profiles, and visit histories in a single front-desk workflow.', category: 'Front Desk' },
      { title: 'Appointment & Queue Management', description: 'Manage doctor schedules, online bookings, token queues, and consultation slots across departments.', category: 'Front Desk' },
      { title: 'OPD Consultation', description: 'Capture complaints, vitals, diagnosis, prescriptions, and follow-up plans for outpatient care.', category: 'Clinical' },
      { title: 'IPD Admission & Bed Management', description: 'Track admissions, ward transfers, bed occupancy, nursing assignments, and discharge readiness.', category: 'Clinical' },
      { title: 'Electronic Medical Records', description: 'Maintain longitudinal patient charts with allergies, diagnosis codes, treatment notes, and document attachments.', category: 'Clinical' },
      { title: 'Laboratory Information Management', description: 'Handle test ordering, sample collection, result validation, and critical alert notifications.', category: 'Diagnostics' },
      { title: 'Radiology & Imaging Requests', description: 'Coordinate imaging orders, reporting workflows, and result availability for clinicians.', category: 'Diagnostics' },
      { title: 'Pharmacy & Medication Dispensing', description: 'Control formulary, prescriptions, dispensing, batch tracking, and expiry-sensitive stock movement.', category: 'Pharmacy' },
      { title: 'Billing & Revenue Cycle', description: 'Automate service charging, package rates, deposits, discharge billing, and payment reconciliation.', category: 'Finance' },
      { title: 'Insurance & TPA Management', description: 'Manage eligibility checks, pre-authorizations, claim submissions, and insurer settlement tracking.', category: 'Finance' },
      { title: 'Operation Theatre Scheduling', description: 'Plan procedures, surgical teams, anesthesia notes, consumables, and theatre utilization.', category: 'Clinical' },
      { title: 'Nursing Station & Medication Charts', description: 'Support medication administration, care plans, nursing observations, and escalation logs.', category: 'Clinical' },
      { title: 'Inventory & Medical Store', description: 'Track medical supplies, department stock, vendor purchasing, and replenishment levels.', category: 'Operations' },
      { title: 'Compliance Reporting & Analytics', description: 'Generate occupancy, revenue, clinical utilization, and management dashboards with traceable audit logs.', category: 'Analytics' },
    ],
  },
  {
    productId: 'hr-management',
    title: 'Human Resource Management',
    shortDescription: 'A complete HR workspace for workforce planning, payroll, compliance, and performance operations.',
    readMore:
      'Suitable for growing businesses and enterprise teams that need structured employee lifecycle management with finance and attendance alignment.',
    moduleSummary:
      'Built to connect recruitment, employee administration, payroll, performance, and policy compliance in one secure HR backbone.',
    featureHighlights: [
      'Central employee master data with configurable policies and approvals',
      'Payroll, leave, attendance, and performance workflows in one system',
      'Compliance-ready records for contracts, taxation, and labor regulations',
      'Manager and HR dashboards with actionable workforce insights',
      'Structured onboarding and separation journeys for better governance',
    ],
    keyFeatures: [
      { title: 'Employee Master Records', description: 'Maintain personal, job, contract, compensation, and document records in one controlled profile.', category: 'Core HR' },
      { title: 'Recruitment Pipeline', description: 'Track vacancies, applicants, interviews, evaluations, and offer approvals from requisition to hire.', category: 'Talent' },
      { title: 'Onboarding Workflows', description: 'Assign checklists, document collection, asset issuance, and orientation milestones for new hires.', category: 'Talent' },
      { title: 'Payroll Processing', description: 'Run salary calculations with allowances, deductions, arrears, loans, and statutory adjustments.', category: 'Payroll' },
      { title: 'Leave & Time Off', description: 'Configure leave policies, balances, encashment rules, and approval routing across teams.', category: 'Workforce' },
      { title: 'Attendance Synchronization', description: 'Consolidate biometric, shift, overtime, and exception data for payroll-ready attendance.', category: 'Workforce' },
      { title: 'Performance Management', description: 'Support goals, reviews, appraisals, competency scoring, and performance improvement plans.', category: 'Talent' },
      { title: 'Training & Development', description: 'Schedule learning plans, track certifications, and manage mandatory compliance training.', category: 'Talent' },
      { title: 'Compensation & Benefits', description: 'Administer grades, benefit enrollments, reimbursements, and compensation revisions.', category: 'Payroll' },
      { title: 'Employee Documents & Compliance', description: 'Store contracts, visas, IDs, policies, and expiring documents with alerts and controls.', category: 'Compliance' },
      { title: 'Separation & Final Settlement', description: 'Manage resignations, clearances, handovers, exit interviews, and final dues.', category: 'Compliance' },
      { title: 'HR Analytics Dashboard', description: 'Monitor headcount, turnover, absenteeism, payroll cost, and departmental workforce trends.', category: 'Analytics' },
    ],
  },
  {
    productId: 'employee-portal',
    title: 'Employee Self Service Portal',
    shortDescription: 'A self-service layer that helps employees complete routine HR tasks without waiting on administrators.',
    readMore:
      'Ideal for organizations that want to reduce HR workload, improve employee transparency, and speed up internal service delivery.',
    moduleSummary:
      'Focused on practical employee requests, approvals, and visibility for day-to-day workplace interactions.',
    featureHighlights: [
      'Employees can manage routine requests independently',
      'Managers receive clear approval queues and action history',
      'HR teams reduce repetitive ticket volume and manual follow-up',
      'Secure document and payroll visibility from any device',
    ],
    keyFeatures: [
      { title: 'Profile Management', description: 'Let employees update personal details, emergency contacts, and supporting documents with approval checks.', category: 'Self Service' },
      { title: 'Leave Requests', description: 'Submit leave applications, track balances, and view approval outcomes in real time.', category: 'Self Service' },
      { title: 'Attendance View', description: 'Review check-ins, work hours, overtime, and attendance exceptions from a personal dashboard.', category: 'Self Service' },
      { title: 'Payslip & Tax Documents', description: 'Access salary slips, tax certificates, and payroll history without HR intervention.', category: 'Payroll' },
      { title: 'Loan & Advance Requests', description: 'Apply for employee loans or salary advances with status tracking and installment visibility.', category: 'Payroll' },
      { title: 'Expense Reimbursements', description: 'File reimbursement claims, attach receipts, and follow finance approval stages.', category: 'Finance' },
      { title: 'Asset Acknowledgement', description: 'Track assigned laptops, cards, or equipment and digitally confirm handover status.', category: 'Operations' },
      { title: 'Announcements & Policies', description: 'Publish circulars, policy updates, and organization notices in a searchable portal.', category: 'Communication' },
    ],
  },
  {
    productId: 'attendance-management',
    title: 'Attendance Management',
    shortDescription: 'A time and attendance system for shifts, device syncing, and workforce exception handling.',
    readMore:
      'Useful for factories, offices, schools, and distributed teams that need dependable attendance control tied to policies and payroll.',
    moduleSummary:
      'Designed for accurate time capture, shift control, and operational visibility across teams and locations.',
    featureHighlights: [
      'Real-time attendance consolidation from devices and manual exceptions',
      'Shift, roster, and overtime rules aligned with operational staffing',
      'Payroll-ready calculations with reduced manual correction effort',
      'Supervisor visibility into tardiness, absenteeism, and anomalies',
    ],
    keyFeatures: [
      { title: 'Biometric Device Integration', description: 'Collect punch data from biometric terminals and synchronize it into a unified attendance ledger.', category: 'Time Capture' },
      { title: 'Shift & Roster Planning', description: 'Create recurring shifts, rosters, rotation patterns, and weekend rules for departments.', category: 'Scheduling' },
      { title: 'Late Arrival & Early Exit Rules', description: 'Apply grace periods, penalties, and policy-driven attendance exceptions automatically.', category: 'Policy' },
      { title: 'Overtime Tracking', description: 'Calculate overtime based on approved hours, shifts, and attendance thresholds.', category: 'Policy' },
      { title: 'Leave Adjustment', description: 'Merge approved leave records with attendance data to avoid duplicate manual work.', category: 'Self Service' },
      { title: 'Manual Corrections & Approvals', description: 'Control missed punches, field duty, and special attendance cases through approval workflows.', category: 'Approvals' },
      { title: 'Multi-Location Monitoring', description: 'Track workforce presence across branches, offices, campuses, or worksites in one place.', category: 'Operations' },
      { title: 'Attendance Reporting', description: 'Generate daily attendance, absenteeism, overtime, and payroll-preparation reports for managers.', category: 'Analytics' },
    ],
  },
  {
    productId: 'supply-chain',
    title: 'Supply Chain Management',
    shortDescription: 'A supply chain suite for procurement, warehousing, vendor control, and fulfillment visibility.',
    readMore:
      'Built for distributors, manufacturers, and enterprise buyers that need disciplined inventory and procurement execution.',
    moduleSummary:
      'Supports end-to-end material flow from demand planning to procurement, warehousing, and supplier performance tracking.',
    featureHighlights: [
      'Connected procurement, stock control, and supplier collaboration',
      'Warehouse-level visibility with replenishment and movement history',
      'Better planning through demand, reorder, and fulfillment analytics',
      'Traceable approvals and controls for enterprise buying operations',
      'Useful for distribution, manufacturing, healthcare, and retail networks',
    ],
    keyFeatures: [
      { title: 'Item Master & Catalogs', description: 'Maintain SKU definitions, units, variants, categories, and approved supplier mappings.', category: 'Inventory' },
      { title: 'Demand Planning', description: 'Forecast demand using historical movement, reorder points, and branch-level consumption patterns.', category: 'Planning' },
      { title: 'Purchase Requisitions', description: 'Capture internal purchase requests with budget checks and approval flows.', category: 'Procurement' },
      { title: 'Request for Quotation', description: 'Compare vendor quotations, commercial terms, and lead times before award decisions.', category: 'Procurement' },
      { title: 'Purchase Orders', description: 'Issue controlled purchase orders with revisions, approvals, and delivery scheduling.', category: 'Procurement' },
      { title: 'Goods Receipt & Putaway', description: 'Receive goods, inspect quality, and place stock into warehouse locations with full traceability.', category: 'Warehouse' },
      { title: 'Warehouse Transfers', description: 'Move inventory across locations, branches, or storage bins while preserving stock history.', category: 'Warehouse' },
      { title: 'Batch, Lot & Expiry Control', description: 'Track serialized, lot-based, or expiry-sensitive items for regulated inventory operations.', category: 'Inventory' },
      { title: 'Vendor Performance Management', description: 'Score suppliers on lead times, quality issues, fill rate, and contract adherence.', category: 'Vendor' },
      { title: 'Stock Alerts & Replenishment', description: 'Trigger replenishment suggestions based on min-max rules and actual demand signals.', category: 'Planning' },
      { title: 'Returns & Claims', description: 'Handle vendor returns, shortage claims, and damaged goods with documentary support.', category: 'Vendor' },
      { title: 'Supply Chain Analytics', description: 'Report on purchasing spend, stock aging, turnover, shortages, and supplier risk.', category: 'Analytics' },
    ],
  },
  {
    productId: 'finance-system',
    title: 'Finance',
    shortDescription: 'A finance platform for accounting, cash flow, compliance, and decision-grade financial reporting.',
    readMore:
      'Built for organizations that need disciplined control over accounting operations, approvals, treasury, and performance reporting.',
    moduleSummary:
      'Covers the accounting backbone from ledgers and vouchers to receivables, payables, budgets, and executive reporting.',
    featureHighlights: [
      'Stronger financial control with audit-ready transaction tracking',
      'Connected receivable, payable, banking, and reporting workflows',
      'Budgeting and cash visibility for better operational decisions',
      'Multi-branch and multi-cost-center support for structured finance teams',
    ],
    keyFeatures: [
      { title: 'Chart of Accounts', description: 'Configure account structures, sub-ledgers, dimensions, and opening balances for clean financial control.', category: 'Core Accounting' },
      { title: 'Voucher Management', description: 'Post payment, receipt, journal, and adjustment vouchers with approval workflows.', category: 'Core Accounting' },
      { title: 'General Ledger', description: 'Maintain transaction postings, period control, and ledger drill-down for every account.', category: 'Core Accounting' },
      { title: 'Accounts Receivable', description: 'Track invoices, customer aging, collections, and credit control from billing to receipt.', category: 'Receivables' },
      { title: 'Accounts Payable', description: 'Manage vendor bills, due dates, approvals, withholding taxes, and payment scheduling.', category: 'Payables' },
      { title: 'Cash & Bank Management', description: 'Handle cash books, bank books, reconciliation, and treasury movements with transparency.', category: 'Treasury' },
      { title: 'Budgeting & Cost Centers', description: 'Set budgets by branch, department, or project and compare actuals against planned spend.', category: 'Planning' },
      { title: 'Fixed Asset Register', description: 'Track acquisition, depreciation, transfer, disposal, and asset-related accounting entries.', category: 'Assets' },
      { title: 'Tax & Compliance Controls', description: 'Support tax calculation, withholding, and statutory reporting with configurable rules.', category: 'Compliance' },
      { title: 'Financial Statements', description: 'Generate trial balance, profit and loss, balance sheet, and supporting schedules.', category: 'Reporting' },
      { title: 'Executive Finance Dashboard', description: 'Give leadership a current view of cash position, profitability, liabilities, and trends.', category: 'Analytics' },
    ],
  },
  {
    productId: 'project-management',
    title: 'Project Management / Work Permit',
    shortDescription: 'A project execution and permit control system for structured field and office operations.',
    readMore:
      'Useful for engineering, facilities, construction, and operational teams managing timelines, approvals, resources, and on-site safety.',
    moduleSummary:
      'Brings project governance and work authorization together so teams can execute safely, on schedule, and with proper oversight.',
    featureHighlights: [
      'Combines project planning with operational permit approvals',
      'Improves visibility into timelines, responsibilities, and blockers',
      'Supports field teams with controlled execution documentation',
      'Useful for engineering, maintenance, and high-compliance environments',
    ],
    keyFeatures: [
      { title: 'Project Portfolio Setup', description: 'Create projects, phases, milestones, budgets, and delivery ownership structures.', category: 'Planning' },
      { title: 'Task & Activity Scheduling', description: 'Assign activities, dependencies, due dates, and work packages to execution teams.', category: 'Planning' },
      { title: 'Resource Allocation', description: 'Plan manpower, contractors, equipment, and materials against delivery timelines.', category: 'Execution' },
      { title: 'Work Permit Requests', description: 'Raise permit requests for maintenance, shutdown, electrical, hot work, or confined-space jobs.', category: 'Permit Control' },
      { title: 'Risk Assessment & Safety Checks', description: 'Attach hazard analysis, safety controls, and approvals before work starts.', category: 'Permit Control' },
      { title: 'Approval Workflow Engine', description: 'Route permits and project decisions through supervisors, safety officers, and managers.', category: 'Governance' },
      { title: 'Progress Logging', description: 'Record daily progress, issues, delays, and completion percentages from site or office.', category: 'Execution' },
      { title: 'Document & Drawing Control', description: 'Store drawings, method statements, permits, and revision-controlled attachments.', category: 'Documentation' },
      { title: 'Issue Escalation & Corrective Actions', description: 'Track non-conformances, blockers, and corrective actions to closure.', category: 'Governance' },
      { title: 'Project Dashboards & Reports', description: 'Summarize milestone status, permit aging, utilization, and completion trends.', category: 'Analytics' },
    ],
  },
  {
    productId: 'school-management',
    title: 'School & College Management',
    shortDescription: 'A campus operations platform for admissions, academics, fees, communication, and governance.',
    readMore:
      'Built for schools, colleges, and academic groups that need structured control over student records, teaching, finance, and parents engagement.',
    moduleSummary:
      'Supports the full academic lifecycle from admissions and timetable planning to exams, fees, transport, and parent communication.',
    featureHighlights: [
      'Student lifecycle management from inquiry to graduation',
      'Academic, financial, and administrative coordination in one system',
      'Parent and teacher visibility through structured communication flows',
      'Suitable for schools, colleges, academies, and multi-campus groups',
      'Built for scalable reporting across admissions, academics, and finance',
    ],
    keyFeatures: [
      { title: 'Admission Management', description: 'Handle inquiries, registration forms, merit processing, and student enrollment workflows.', category: 'Admissions' },
      { title: 'Student Information System', description: 'Maintain academic, demographic, medical, guardian, and disciplinary records securely.', category: 'Core Academics' },
      { title: 'Class & Section Setup', description: 'Configure programs, sections, academic years, and student promotion structures.', category: 'Core Academics' },
      { title: 'Timetable Scheduling', description: 'Plan subject periods, teacher assignments, room allocation, and substitution control.', category: 'Academics' },
      { title: 'Attendance Management', description: 'Track daily attendance for students and staff with absence alerts and analytics.', category: 'Academics' },
      { title: 'Exam & Assessment Management', description: 'Create exam plans, mark schemes, grading policies, and publish results.', category: 'Assessment' },
      { title: 'Fee Collection & Finance', description: 'Manage fee plans, concessions, arrears, installment schedules, and receipts.', category: 'Finance' },
      { title: 'Parent Communication Portal', description: 'Share notices, attendance alerts, homework, and student progress with guardians.', category: 'Communication' },
      { title: 'Homework & Assignment Tracking', description: 'Assign classwork, receive submissions, and monitor pending academic tasks.', category: 'Academics' },
      { title: 'Library Management', description: 'Track book cataloging, issue-return activity, fines, and student borrowing history.', category: 'Campus Services' },
      { title: 'Transport Management', description: 'Control routes, buses, stops, driver assignments, and transport fee administration.', category: 'Campus Services' },
      { title: 'Hostel & Boarding Management', description: 'Manage rooms, occupancy, meals, and hostel discipline for boarding institutions.', category: 'Campus Services' },
      { title: 'Academic Analytics & Report Cards', description: 'Generate progress cards, class performance reports, and institutional dashboards.', category: 'Analytics' },
    ],
  },
  {
    productId: 'lost-found',
    title: 'Lost & Found System',
    shortDescription: 'A focused case-tracking system for logging, matching, and returning lost property efficiently.',
    readMore:
      'Best suited for airports, campuses, transport operators, malls, and facilities teams handling frequent item recovery workflows.',
    moduleSummary:
      'Optimized for practical intake, claim verification, item tracking, and communication around recovered property.',
    featureHighlights: [
      'Faster item intake and claim resolution with searchable records',
      'Clear custody trails for secure handover and accountability',
      'Practical fit for campuses, transport, hospitality, and facilities teams',
      'Reduces manual logs and missed owner communications',
    ],
    keyFeatures: [
      { title: 'Item Intake Logging', description: 'Register found items with category, location, date, condition, and photo evidence.', category: 'Operations' },
      { title: 'Searchable Item Registry', description: 'Search across item type, color, location, and unique identifiers to speed up matching.', category: 'Operations' },
      { title: 'Claim Submission', description: 'Allow claimants to submit ownership requests with supporting details and evidence.', category: 'Claims' },
      { title: 'Verification Workflow', description: 'Review claimant information, validate ownership, and record approval decisions.', category: 'Claims' },
      { title: 'Custody Tracking', description: 'Maintain chain-of-custody history as items move between counters, storage, and release points.', category: 'Security' },
      { title: 'Notifications & Follow-Up', description: 'Send SMS or email updates for claim status, pickup reminders, and closure notices.', category: 'Communication' },
      { title: 'Return & Disposal Management', description: 'Handle handovers, unclaimed item retention rules, and disposal approvals.', category: 'Operations' },
      { title: 'Case Reporting Dashboard', description: 'Track open claims, returned items, aging cases, and high-volume locations.', category: 'Analytics' },
    ],
  },
  {
    productId: 'legal-management',
    title: 'Legal Case Management System',
    shortDescription: 'A legal operations workspace for matters, documents, hearings, deadlines, and client coordination.',
    readMore:
      'Designed for law firms, legal departments, and compliance teams managing active case portfolios and sensitive records.',
    moduleSummary:
      'Supports the legal case lifecycle with disciplined matter tracking, document governance, and deadline control.',
    featureHighlights: [
      'Matter-centric workflow for litigation, advisory, and compliance work',
      'Controlled document handling with reminders and audit history',
      'Helps legal teams organize hearings, billing, and case progress',
      'Suitable for law firms, corporate legal cells, and government entities',
    ],
    keyFeatures: [
      { title: 'Case Intake & Matter Opening', description: 'Register new matters with parties, jurisdictions, case type, and responsible counsel.', category: 'Matter Management' },
      { title: 'Client & Party Management', description: 'Maintain profiles for clients, opponents, witnesses, and related contacts.', category: 'Matter Management' },
      { title: 'Hearing Calendar', description: 'Schedule hearings, meetings, limitation dates, and court appearances with alerts.', category: 'Scheduling' },
      { title: 'Document Repository', description: 'Store pleadings, notices, contracts, evidence, and correspondence in organized folders.', category: 'Documentation' },
      { title: 'Task & Deadline Tracking', description: 'Assign legal tasks, track dependencies, and prevent missed filing deadlines.', category: 'Execution' },
      { title: 'Case Notes & History', description: 'Record proceedings, internal notes, developments, and strategic updates chronologically.', category: 'Execution' },
      { title: 'Billing & Expense Logging', description: 'Track billable hours, court fees, travel, and recoverable legal expenses.', category: 'Finance' },
      { title: 'Approval & Review Workflows', description: 'Route drafts, settlements, opinions, and escalations through review chains.', category: 'Governance' },
      { title: 'Compliance & Confidentiality Controls', description: 'Protect sensitive data with access controls, document permissions, and activity history.', category: 'Security' },
      { title: 'Case Outcome Reporting', description: 'Report status, hearing outcomes, workload, and matter performance across teams.', category: 'Analytics' },
    ],
  },
  {
    productId: 'goods-transport',
    title: 'Goods Transport / Bility System',
    shortDescription: 'A transport operations system for consignment booking, bilty management, dispatch, and delivery visibility.',
    readMore:
      'Built for carriers, fleet operators, and transport networks handling daily booking, route, and proof-of-delivery operations.',
    moduleSummary:
      'Connects booking counters, dispatch teams, route operations, and customer communication for dependable transport execution.',
    featureHighlights: [
      'Central bilty workflow from booking to final delivery',
      'Operational visibility into consignments, routes, and branch handoffs',
      'Useful for regional carriers, freight operators, and branch transport networks',
      'Supports faster reconciliation and customer service response',
    ],
    keyFeatures: [
      { title: 'Consignment Booking', description: 'Capture sender, receiver, item details, charges, and service commitments at booking time.', category: 'Booking' },
      { title: 'Bilty Generation', description: 'Create bilty documents with serial control, terms, and printable shipment records.', category: 'Booking' },
      { title: 'Route & Vehicle Allocation', description: 'Assign consignments to vehicles, routes, and trips based on capacity and destination.', category: 'Dispatch' },
      { title: 'Hub Transfer Management', description: 'Track branch-to-branch movement, offloading, and transit status at intermediate hubs.', category: 'Dispatch' },
      { title: 'Delivery Run Sheets', description: 'Prepare delivery lists for last-mile staff with consignee details and payment notes.', category: 'Delivery' },
      { title: 'Proof of Delivery', description: 'Record signatures, delivery timestamps, exceptions, and undelivered reasons.', category: 'Delivery' },
      { title: 'Cash on Delivery Control', description: 'Track receivable consignments, cash collection, and settlement against trips.', category: 'Finance' },
      { title: 'Customer Tracking Portal', description: 'Allow customers to follow consignment status and expected movement updates.', category: 'Customer Service' },
      { title: 'Claims & Exception Handling', description: 'Manage shortages, damages, delays, and customer complaints through resolution workflows.', category: 'Customer Service' },
      { title: 'Transport Analytics', description: 'Measure route performance, delivery success, billing, and branch throughput.', category: 'Analytics' },
    ],
  },
  {
    productId: 'insurance-system',
    title: 'Insurance Integration System',
    shortDescription: 'A policy and claims platform for integrated insurance workflows across channels and business lines.',
    readMore:
      'Suitable for brokers, insurers, and enterprise partners needing policy issuance, claims coordination, and partner integration.',
    moduleSummary:
      'Supports policy servicing, underwriting coordination, claims processing, and partner connectivity with controlled workflows.',
    featureHighlights: [
      'Unified handling of policy lifecycle and claims progression',
      'API-based coordination with insurers, partners, and service providers',
      'Useful for motor, health, travel, and non-motor business lines',
      'Improves claim turnaround and policy servicing visibility',
    ],
    keyFeatures: [
      { title: 'Policy Administration', description: 'Manage quotations, proposals, policy issuance, renewals, and endorsement requests.', category: 'Policy' },
      { title: 'Customer & Insured Profiles', description: 'Store policyholder, insured asset, and nominee information with history.', category: 'CRM' },
      { title: 'Product & Plan Configuration', description: 'Define insurance products, coverage rules, premium structures, and eligibility criteria.', category: 'Policy' },
      { title: 'Underwriting Coordination', description: 'Route cases for review, document verification, and underwriting decisions.', category: 'Underwriting' },
      { title: 'Claims Registration', description: 'Log claim intimation, event details, supporting documents, and service requests.', category: 'Claims' },
      { title: 'Surveyor & Investigator Workflow', description: 'Assign third-party assessments, reports, and approval follow-up for claims.', category: 'Claims' },
      { title: 'Claims Settlement Tracking', description: 'Monitor reserve values, settlement approvals, payment progress, and repudiation reasons.', category: 'Claims' },
      { title: 'Partner API Integration', description: 'Connect with insurer systems, payment gateways, and service providers through APIs.', category: 'Integration' },
      { title: 'Commission & Partner Management', description: 'Track channel commissions, partner performance, and revenue-sharing rules.', category: 'Finance' },
      { title: 'Policy & Claims Analytics', description: 'Report issuance, loss ratios, turnaround time, and renewal conversion trends.', category: 'Analytics' },
    ],
  },
  {
    productId: 'pos-cloud',
    title: 'Point of Sales (POS)',
    shortDescription: 'A practical POS platform for daily sales, inventory, cashier control, and customer checkout experiences.',
    readMore:
      'Designed for retail shops, restaurants, pharmacies, and service counters that need quick transactions backed by inventory accuracy.',
    moduleSummary:
      'Focused on fast front-counter sales while keeping stock, cash, and customer transactions synchronized.',
    featureHighlights: [
      'Fast billing with inventory-aware transactions and receipt control',
      'Useful for retail, food service, pharmacy, and multi-counter outlets',
      'Supports cashier accountability and daily closing discipline',
      'Clear sales visibility for owners and branch supervisors',
    ],
    keyFeatures: [
      { title: 'Sales Billing', description: 'Process walk-in sales with discounts, taxes, returns, and multi-payment checkout flows.', category: 'Checkout' },
      { title: 'Product Catalog & Pricing', description: 'Maintain products, variants, price lists, barcode data, and promotional rules.', category: 'Catalog' },
      { title: 'Inventory Synchronization', description: 'Update stock in real time as items are sold, returned, or adjusted.', category: 'Inventory' },
      { title: 'Cashier Shift Control', description: 'Track opening cash, shift handover, till differences, and cashier-wise sales totals.', category: 'Cash Control' },
      { title: 'Purchase & Stock Refill', description: 'Receive stock, record supplier purchases, and replenish fast-moving items.', category: 'Inventory' },
      { title: 'Customer Ledger & Loyalty', description: 'Maintain customer history, reward points, balances, and repeat purchase visibility.', category: 'Customer' },
      { title: 'Returns & Exchange Handling', description: 'Process item returns, replacements, and refund approvals with stock correction.', category: 'Customer' },
      { title: 'Sales & Margin Reports', description: 'Analyze hourly sales, top products, discounts, and branch performance.', category: 'Analytics' },
    ],
  },
  {
    productId: 'hotel-management',
    title: 'Hoteling & Room Reservation',
    shortDescription: 'A hospitality operations suite for reservations, guest service, front office, and property revenue control.',
    readMore:
      'Built for hotels, guest houses, and serviced properties that need smooth booking, stay management, and operational coordination.',
    moduleSummary:
      'Handles the guest journey from reservation to checkout while coordinating housekeeping, billing, and service delivery.',
    featureHighlights: [
      'End-to-end reservation and guest stay management',
      'Coordination between front desk, housekeeping, and revenue teams',
      'Useful for independent hotels, chains, and serviced properties',
      'Helps improve occupancy, service quality, and billing accuracy',
    ],
    keyFeatures: [
      { title: 'Reservation Management', description: 'Handle direct bookings, travel agent reservations, hold statuses, and availability checks.', category: 'Reservations' },
      { title: 'Rate Plans & Seasonal Pricing', description: 'Configure room tariffs, packages, offers, and seasonal pricing structures.', category: 'Revenue' },
      { title: 'Front Desk Check-In', description: 'Manage guest arrival, ID capture, room assignment, and pre-arrival preferences.', category: 'Front Office' },
      { title: 'Room Inventory & Status', description: 'Track room availability, occupancy, maintenance hold, and cleaning status in real time.', category: 'Front Office' },
      { title: 'Housekeeping Coordination', description: 'Assign cleaning tasks, inspect rooms, and track linen or room readiness status.', category: 'Operations' },
      { title: 'Guest Service Requests', description: 'Log room service, maintenance, transport, and concierge requests with SLA visibility.', category: 'Guest Experience' },
      { title: 'POS & Folio Billing', description: 'Post room charges, restaurant bills, services, taxes, and settlement transactions to guest folios.', category: 'Revenue' },
      { title: 'Check-Out & Settlement', description: 'Complete final billing, split payments, deposits, and invoice generation at departure.', category: 'Front Office' },
      { title: 'Corporate & Agent Accounts', description: 'Manage credit arrangements, negotiated rates, and invoice cycles for partners.', category: 'Revenue' },
      { title: 'Multi-Property Control', description: 'View inventory, bookings, and operational performance across multiple hotel properties.', category: 'Operations' },
      { title: 'Occupancy & Revenue Analytics', description: 'Report ADR, RevPAR, occupancy, source mix, and service trends for management.', category: 'Analytics' },
    ],
  },
];
