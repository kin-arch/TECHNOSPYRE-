export interface Course {
  id: string;
  name: string;
  duration: string;
  fee: string;
  category: string;
  description: string;
  techStack?: string;
}

export interface CourseCategory {
  id: string;
  title: string;
  icon: string; // Changed to string for icon lookup
  image: string;
  courses: Course[];
}

export interface Semester {
  title: string;
  subjects: string[];
}

export interface FeeItem {
  label: string;
  amount: string;
}

export interface DiplomaData {
  title: string;
  duration: string;
  semesters: Semester[];
  feeStructure: FeeItem[];
}
