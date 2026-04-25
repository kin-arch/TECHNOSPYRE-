import React, { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Banknote, BookOpen, CheckCircle, MonitorPlay, Users, Award } from 'lucide-react';
import { courseCategories } from '../data/courses';
import SEO from '../components/SEO';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find course details
  const { course, category } = useMemo(() => {
    for (const cat of courseCategories) {
      const foundCourse = cat.courses.find(c => c.id === id);
      if (foundCourse) {
        return { course: foundCourse, category: cat };
      }
    }
    return { course: null, category: null };
  }, [id]);

  if (!course || !category) return null;

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": "TechnoSpyre Academy",
      "sameAs": "https://technospyre.com/courses"
    },
    "offers": {
      "@type": "Offer",
      "price": course.fee,
      "priceCurrency": "PKR"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online/Hybrid",
      "duration": course.duration
    }
  };

  return (
    <div className="pt-10 pb-16 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <SEO
        title={course.name}
        description={course.description}
        jsonLd={courseJsonLd}
      />
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex flex-wrap items-center gap-4"
      >
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-medium group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Academy all courses
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-sm text-sm font-bold tracking-wide uppercase mb-4 border border-primary/20">
              {course.category}
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold font-headline tracking-tighter text-on-surface leading-tight mb-6 relative">
              {course.name}
              <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-sm opacity-30"></div>
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              {course.description} Expand your expertise and accelerate your career with our industry-leading {course.name} program, specifically tailored for aspiring professionals.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full relative rounded-sm overflow-hidden aspect-video shadow-2xl border border-outline-variant/30"
          >
            <img
              src={category.image}
              alt={course.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0"></div>
          </motion.div>

          {/* Key Learnings Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-surface-container p-8 rounded-sm border border-outline-variant"
          >
            <h3 className="text-2xl font-headline font-bold text-on-surface mb-6">What you will learn</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-on-surface-variant">
              {['Industry standard practices', 'Hands-on practical projects', 'Expert level problem solving', 'Advanced theoretical concepts', 'Career-oriented skills', 'Interactive live sessions'].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-1"
        >
          <div className="sticky top-12 bg-surface-container/60 backdrop-blur-xl border border-outline-variant rounded-sm p-8 shadow-2xl inner-highlight">
            <h3 className="text-xl font-headline font-bold mb-6 text-on-surface">Course Overview</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 text-on-surface-variant">
                <div className="w-12 h-12 rounded-sm bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-on-surface/60">Duration</p>
                  <p className="text-lg font-bold text-on-surface">{course.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-on-surface-variant">
                <div className="w-12 h-12 rounded-sm bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                  <Banknote size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-on-surface/60">Fee Structure</p>
                  <p className="text-lg font-bold text-on-surface">PKR {course.fee}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-on-surface-variant">
                <div className="w-12 h-12 rounded-sm bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                  <BookOpen size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-on-surface/60">Level</p>
                  <p className="text-lg font-bold text-on-surface">Beginner to Pro</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-outline-variant/50">
              <Link
                to="/contact"
                className="w-full py-4 bg-primary hover:bg-primary-hover text-primary-foreground font-bold rounded-sm outline outline-primary/30 transition-all duration-300 flex justify-center items-center gap-2 shadow-md hover:shadow-xl shadow-primary/10 hover:shadow-primary/50 active:scale-95 hover:scale-105"
              >
                Enroll Now
              </Link>
              <Link
                to="/courses#courses"
                className="w-full py-4 bg-transparent border-2 border-primary/30 text-primary hover:bg-primary/10 font-bold rounded-sm transition-all duration-300 flex justify-center items-center gap-2"
              >
                Browse all courses
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetail;



