import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Award, Sparkles, BookOpen, GraduationCap, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reactCourse } from '@/data/courses';

gsap.registerPlugin(ScrollTrigger);

export const ReactCourseDetails: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.react-heading',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.react-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.react-cards-wrapper',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  const { beginner, professional } = reactCourse;

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-28 px-6 sm:px-8 relative overflow-hidden bg-surface-container border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="react-heading mb-12 text-center">
          <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block inline-flex items-center gap-2">
            <Zap size={14} /> Featured Courses
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
            {reactCourse.name}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed mx-auto">
            {reactCourse.title}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="react-cards-wrapper space-y-6">
            <div className="react-card group relative rounded-sm border border-outline-variant bg-background p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-green-700 bg-green-600/10 px-3 py-1 rounded-full border border-green-600/20">
                  <Sparkles size={14} />
                  Beginner Course
                </span>
              </div>

              <h3 className="font-headline text-xl font-bold mb-3">
                {beginner.name}
              </h3>

              <p className="text-muted-foreground mb-4">
                {beginner.description}
              </p>

              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-3xl font-bold text-primary">
                  ₹{beginner.discountedFee}
                </span>
                <span className="text-base text-muted-foreground line-through">
                  ₹{beginner.originalFee}
                </span>
                <span className="text-sm font-bold text-green-600 bg-green-600/10 px-2 py-1 rounded">
                  {beginner.discount} OFF
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {beginner.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Award size={16} />
                  Certificate
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {beginner.highlights.slice(0, 4).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/courses"
                className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-colors"
              >
                Enroll Now <ArrowRight size={18} className="inline ml-2" />
              </Link>
            </div>
          </div>

          <div className="react-cards-wrapper space-y-6">
            <div className="react-card group relative rounded-sm border border-outline-variant bg-background p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-600/10 px-3 py-1 rounded-full border border-blue-600/20">
                  <Zap size={14} />
                  Professional Course
                </span>
              </div>

              <h3 className="font-headline text-xl font-bold mb-3">
                {professional.name}
              </h3>

              <p className="text-muted-foreground mb-4">
                {professional.description}
              </p>

              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-3xl font-bold text-primary">
                  ₹{professional.discountedFee}
                </span>
                <span className="text-base text-muted-foreground line-through">
                  ₹{professional.originalFee}
                </span>
                <span className="text-sm font-bold text-green-600 bg-green-600/10 px-2 py-1 rounded">
                  {professional.discount} OFF
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {professional.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Award size={16} />
                  Certificate
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {professional.highlights.slice(0, 4).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/courses"
                className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-colors"
              >
                Enroll Now <ArrowRight size={18} className="inline ml-2" />
              </Link>
            </div>
          </div>
        </div>

        <div className="react-heading mt-10 text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            View All Courses <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};