import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ListChecks } from 'lucide-react';
import { Link } from 'react-router-dom';
import { courseCategories } from '../../data/academy';

interface CoursesExplorationProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  iconMap: Record<string, React.ReactNode>;
}

export const CoursesExploration: React.FC<CoursesExplorationProps> = ({
  activeTab,
  setActiveTab,
  iconMap
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const activeCategory = courseCategories.find(cat => cat.id === activeTab) || courseCategories[0];

  // Reset expanded state when switching category tabs
  useEffect(() => {
    setExpandedId(null);
  }, [activeTab]);

  return (
    <section className="py-24 px-8 relative bg-surface">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">Technical <span className="text-primary italic">Certifications</span></h2>
            <p className="text-on-surface-variant text-lg mt-6">From short specializations to intensive development tracks, choose the path that resonates with your career goals.</p>
          </div>

          <div className="flex flex-wrap gap-2 bg-surface-container p-1 rounded-sm border border-outline-variant overflow-x-auto no-scrollbar">
            {courseCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-sm font-bold text-sm transition-all whitespace-nowrap ${activeTab === cat.id
                    ? 'bg-primary text-on-primary shadow-lg shadow-primary/20'
                    : 'text-on-surface-variant hover:bg-white/5'
                  }`}
              >
                {iconMap[cat.icon]}
                {cat.title.split(' Courses')[0].split(' Development')[0]}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-5 gap-12"
          >
            <div className="lg:col-span-2 relative rounded-sm overflow-hidden group min-h-[400px] border border-outline-variant">
              <img
                src={activeCategory.image}
                alt={activeCategory.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 opacity-60"
              />
              <div className="absolute inset-0 z-10" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                <div className="w-12 h-12 rounded-sm bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center text-primary mb-6">
                  {iconMap[activeCategory.icon]}
                </div>
                <h3 className="text-3xl font-headline font-bold mb-4">{activeCategory.title}</h3>
                <p className="text-on-surface-variant line-clamp-3 mb-8">Master the latest industry standards in {activeCategory.title.toLowerCase()} with hands-on practice and expert guidance.</p>
                <button className="flex items-center gap-2 text-primary font-bold group/btn text-sm">
                  View Orientation Details <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-surface-container rounded-sm border border-outline-variant overflow-hidden">
                <div className="bg-surface-container rounded-sm border border-outline-variant overflow-hidden flex flex-col">
                  <div className="divide-y divide-outline-variant/40">
                    {activeCategory.courses.map((course) => (
                      <motion.div
                        key={course.id}
                        layout
                        onClick={() => setExpandedId(expandedId === course.id ? null : course.id)}
                        className={`group relative flex flex-col px-8 py-6 transition-colors cursor-pointer ${
                          expandedId === course.id 
                            ? 'bg-surface-container-highest' 
                            : 'hover:bg-surface-container-highest'
                        }`}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-center gap-3 flex-1">
                            <span className="w-1.5 h-1.5 rounded-sm bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                            <span className="font-bold text-on-surface group-hover:text-primary transition-colors text-lg">{course.name}</span>
                          </div>
                          <div className="flex items-center gap-6 md:justify-end">
                            <span className="text-xs font-label text-on-surface-variant px-3 py-1 rounded-sm bg-surface/50 border border-outline-variant/50 whitespace-nowrap">{course.duration}</span>
                            <span className="font-headline font-bold text-on-surface group-hover:scale-105 transition-transform origin-right w-24 text-right">
                              <span className="text-xs text-on-surface-variant/60 font-medium mr-1">PKR</span>{course.fee}
                            </span>
                          </div>
                        </div>

                        {/* Expandable Content (Description + Action) */}
                        <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                          expandedId === course.id 
                            ? 'grid-rows-[1fr]' 
                            : 'grid-rows-[0fr] group-hover:grid-rows-[1fr]'
                        }`}>
                          <div className="overflow-hidden">
                            <div className="pt-5 mt-5 border-t border-outline-variant/30 flex flex-col md:flex-row gap-4 items-start md:items-end justify-between">
                              <p className="text-on-surface-variant text-sm leading-relaxed max-w-xl">
                                {course.description} Get hands-on experience and professional certification in {course.name}.
                              </p>
                              <Link
                                to={`/academy/course/${course.id}`}
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-hover text-on-primary font-bold rounded-sm text-sm transition-all shadow-[0_0_15px_rgba(251,146,60,0.3)] hover:shadow-[0_0_25px_rgba(251,146,60,0.5)] active:scale-95 shrink-0"
                              >
                                Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="p-8 bg-surface-container-low border-t border-outline-variant flex justify-between items-center group">
                    <div className="flex items-center gap-3 text-on-surface-variant">
                      <ListChecks size={18} className="text-primary" />
                      <span className="text-xs font-label uppercase tracking-widest">Total Courses: {activeCategory.courses.length}</span>
                    </div>
                    <button className="text-primary font-bold text-sm flex items-center gap-2 group">
                      Download Full Brochure <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
