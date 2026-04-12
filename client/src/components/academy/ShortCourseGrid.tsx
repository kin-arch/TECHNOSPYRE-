import React from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, Code2 } from 'lucide-react';
import { Course } from '../../types/academy';

interface ShortCourseGridProps {
  courses: Course[];
  onCourseClick: (course: Course) => void;
}

const ShortCourseGrid: React.FC<ShortCourseGridProps> = ({ courses, onCourseClick }) => {
  return (
    <div className="space-y-6 pt-12">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-headline text-3xl font-bold flex items-center gap-3"
      >
        <span className="w-1.5 h-8 bg-tertiary rounded-full"></span> Professional Short Courses
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, idx) => (
          <motion.div 
            key={course.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => onCourseClick(course)}
            className="p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-tertiary/30 transition-all group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="p-2 bg-tertiary/10 rounded-lg text-tertiary group-hover:scale-110 transition-transform">
                {course.name.includes('Cloud') ? <Zap /> : course.name.includes('Cyber') ? <Shield /> : <Code2 />}
              </span>
              <span className="text-xs font-mono text-on-surface-variant">{course.duration}</span>
            </div>
            <h4 className="font-bold mb-2">{course.name}</h4>
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-tertiary">LKR {course.fee}</span>
              <button className="text-xs font-bold uppercase tracking-widest group-hover:text-tertiary transition-colors">View Details</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShortCourseGrid;
