import React from 'react';
import { motion } from 'motion/react';
import { Course } from '../../types/courses';

interface CourseTableProps {
  title: string;
  courses: Course[];
  onCourseClick: (course: Course) => void;
  accentColor: 'primary' | 'secondary';
  showTechStack?: boolean;
}

const CourseTable: React.FC<CourseTableProps> = ({ 
  title, 
  courses, 
  onCourseClick, 
  accentColor, 
  showTechStack = false 
}) => {
  const accentClass = accentColor === 'primary' ? 'bg-primary' : 'bg-secondary';
  const textAccentClass = accentColor === 'primary' ? 'text-primary' : 'text-secondary';
  const bgAccentClass = accentColor === 'primary' ? 'bg-primary/10' : 'bg-secondary/10';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <h2 className="font-headline text-3xl font-bold flex items-center gap-3">
        <span className={`w-1.5 h-8 ${accentClass} rounded-sm`}></span> {title}
      </h2>
      <div className="overflow-hidden rounded-sm glass-card border border-white/5">
        <table className="w-full text-left border-collapse">
          <thead className={bgAccentClass}>
            <tr>
              <th className={`px-6 py-4 font-label text-sm uppercase tracking-wider ${textAccentClass}`}>
                {showTechStack ? 'Specialization' : 'Course Module'}
              </th>
              {showTechStack && (
                <th className={`px-6 py-4 font-label text-sm uppercase tracking-wider ${textAccentClass}`}>Tech Stack</th>
              )}
              <th className={`px-6 py-4 font-label text-sm uppercase tracking-wider ${textAccentClass}`}>Duration</th>
              <th className={`px-6 py-4 font-label text-sm uppercase tracking-wider ${textAccentClass} text-right`}>
                {showTechStack ? 'Investment' : 'Fee (LKR)'}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {courses.map((row, idx) => (
              <motion.tr 
                key={row.id} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                onClick={() => onCourseClick(row)}
                className="transition-colors cursor-pointer"
              >
                <td className="px-6 py-4 font-medium">{row.name}</td>
                {showTechStack && (
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-surface-container rounded-sm text-xs">
                      {row.techStack?.split(',')[0]}
                    </span>
                  </td>
                )}
                <td className="px-6 py-4 text-on-surface-variant">{row.duration}</td>
                <td className={`px-6 py-4 text-right font-mono ${textAccentClass}`}>{row.fee}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default CourseTable;



