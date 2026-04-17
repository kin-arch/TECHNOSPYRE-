import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Course } from '../../types/academy';

interface CourseModalProps {
  selectedCourse: Course | null;
  onClose: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ selectedCourse, onClose }) => {
  return (
    <AnimatePresence>
      {selectedCourse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-surface-container-low border border-white/10 rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-lg -mr-32 -mt-32 pointer-events-none"></div>
            
            <div className="p-8 space-y-6 relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-lg uppercase tracking-widest">
                    {selectedCourse.category}
                  </span>
                  <h3 className="text-3xl font-headline font-bold mt-4">{selectedCourse.name}</h3>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex gap-8 border-b border-white/5 pb-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Duration</p>
                    <p className="font-medium">{selectedCourse.duration}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Investment</p>
                    <p className="font-medium text-primary">LKR {selectedCourse.fee}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Description</p>
                  <p className="text-on-surface-variant leading-relaxed">
                    {selectedCourse.description}
                  </p>
                </div>

                {selectedCourse.techStack && (
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedCourse.techStack.split(',').map(tech => (
                        <span key={tech} className="px-3 py-1 bg-surface-container rounded-lg text-xs font-medium">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6 flex gap-4">
                <button className="flex-grow py-4 bg-primary text-on-primary font-bold rounded-lg hover:brightness-110 transition-all">
                  Enroll Now
                </button>
                <button className="px-6 py-4 border border-outline text-on-surface font-bold rounded-lg hover:bg-white/5 transition-all">
                  Download Syllabus
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CourseModal;
