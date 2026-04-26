import React, { useState } from 'react';
import { 
  Briefcase, Code, Globe, Smartphone, Brain, Database, Layers
} from 'lucide-react';
import { courseCategories } from '../data/courses';
import { CoursesHero } from '../components/course/CoursesHero';
import { CoursesStats } from '../components/course/CoursesStats';
import { DiplomaSection } from '../components/course/DiplomaSection';
import { CoursesExploration } from '../components/course/CoursesExploration';
import { CoursesCTA } from '../components/course/CoursesCTA';
import SEO from '../components/SEO';

const iconMap: Record<string, React.ReactNode> = {
  'software-web': <Code size={20} />,
  'freelance-digital': <Briefcase size={20} />,
  'data-ai-db': <Brain size={20} />,
  'short-term': <Layers size={20} />,
};

const Academy = () => {
  const [activeTab, setActiveTab] = useState(courseCategories[0].id);

  return (
    <div className="overflow-x-hidden min-h-screen bg-background">
      <SEO 
        title="Training Academy"
        description="Elite engineering education and IT training. Join our bootcamps and become a professional in Cloud, AI, and Full-Stack Development."
      />
      <CoursesHero />
      <CoursesStats />
      <DiplomaSection />
      <CoursesExploration 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        iconMap={iconMap} 
      />
      <CoursesCTA />
    </div>
  );
};
export default Academy;
