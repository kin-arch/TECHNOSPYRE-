import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { Globe, Linkedin, Mail, Twitter, Github, Menu, X, Moon, Sun, ChevronDown, ArrowRight } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { courseCategories } from '../data/courses';

export const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [coursesMegaOpen, setCoursesMegaOpen] = useState(false);
  const coursesMegaRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setCoursesMegaOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!coursesMegaOpen) return;
    const onDocMouseDown = (e: MouseEvent) => {
      const el = coursesMegaRef.current;
      if (el && !el.contains(e.target as Node)) setCoursesMegaOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCoursesMegaOpen(false);
    };
    document.addEventListener('mousedown', onDocMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onDocMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [coursesMegaOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses', isMegaMenu: true },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="relative w-full z-50 flex justify-between items-center px-4 md:px-8 py-3 bg-background border-b border-outline-variant/50">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <img src="/logo1.png" alt="Logo" className="w-16 h-16" />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            link.isMegaMenu ? (
              <div key={link.name} ref={coursesMegaRef} className="relative">
                <button
                  type="button"
                  aria-expanded={coursesMegaOpen}
                  aria-haspopup="true"
                  aria-controls="courses-mega-menu"
                  id="courses-mega-trigger"
                  onClick={() => setCoursesMegaOpen((o) => !o)}
                  className={cn(
                    "flex items-center gap-1 text-[15px] font-semibold transition-colors duration-200 rounded-sm px-1 -mx-1 py-1",
                    location.pathname.startsWith(link.path)
                      ? "text-primary"
                      : "text-on-surface-variant hover:text-on-surface",
                    coursesMegaOpen && "text-on-surface"
                  )}
                >
                  {link.name}
                  <ChevronDown
                    size={16}
                    className={cn(
                      'transition-transform duration-300 text-on-surface-variant',
                      coursesMegaOpen && 'rotate-180'
                    )}
                  />
                </button>

                {/* Mega Menu Dropdown (click to open) */}
                <div
                  id="courses-mega-menu"
                  role="region"
                  aria-labelledby="courses-mega-trigger"
                  className={cn(
                    'absolute top-full -left-[10vw] xl:-left-24 pt-4 w-[900px] max-w-[95vw] z-[60] transition-opacity duration-200 ease-out',
                    coursesMegaOpen
                      ? 'visible opacity-100 pointer-events-auto'
                      : 'invisible opacity-0 pointer-events-none'
                  )}
                >
                  <div className="bg-background rounded-sm border border-outline-variant shadow-2xl p-8 isolate overflow-hidden">
                    {/* Add a solid background layer internally to ensure it's never transparent/broken */}
                    <div className="absolute inset-0 bg-surface-container/30 -z-10" />
                    <div className="grid grid-cols-4 gap-x-8 gap-y-8">
                    {courseCategories.map((category) => {
                      const shortTitle = category.title.replace(/ Courses| Development/g, '');
                      return (
                        <div key={category.id} className="flex flex-col">
                          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-outline-variant/30">
                            <span className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center text-primary">
                               <div className="w-2 h-2 rounded-sm bg-primary" />
                            </span>
                            <h4 className="font-semibold text-on-surface text-sm">{shortTitle}</h4>
                          </div>
                          <ul className="space-y-2 flex-grow">
                            {category.courses.slice(0, 3).map(course => (
                              <li key={course.id}>
                                <Link 
                                  to={`/courses/${course.id}`} 
                                  onClick={() => setCoursesMegaOpen(false)}
                                  className="group/item flex items-center py-1.5 px-3 -mx-3 rounded-sm hover:bg-surface-container transition-colors"
                                >
                                  <span className="text-sm font-medium text-on-surface-variant group-hover/item:text-primary transition-colors line-clamp-1">{course.name}</span>
                                </Link>
                              </li>
                            ))}
                            {category.courses.length > 3 && (
                              <li className="pt-2 mt-2">
                                <Link 
                                  to="/courses" 
                                  className="w-full inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                                >
                                  View all {shortTitle} <ArrowRight size={14} />
                                </Link>
                              </li>
                            )}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-[15px] font-semibold transition-colors duration-200",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="hidden lg:flex gap-4 items-center">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="w-10 h-10 rounded-sm flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <Link
          to="/contact"
          className="bg-primary text-primary-foreground font-semibold text-[15px] px-8 py-2.5 rounded-sm transition-all duration-200 hover:scale-105 hover:bg-foreground ml-2"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile controls */}
      <div className="flex lg:hidden items-center gap-2">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="w-10 h-10 rounded-sm flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <Link
          to="/login"
          className="text-on-surface font-semibold px-4 py-2 rounded-sm border border-outline-variant hover:bg-surface-container shadow-sm text-sm hidden sm:block"
        >
          Log in
        </Link>
        <button
          className="w-10 h-10 rounded-sm flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors ml-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-full mt-3 left-4 right-4 w-auto max-h-[calc(100vh-100px)] overflow-y-auto overscroll-contain bg-surface-container/95 backdrop-blur-xl rounded-sm border border-outline-variant shadow-2xl p-6 flex flex-col gap-4 lg:hidden z-[60]"
        >
          {navLinks.map((link) => (
            link.isMegaMenu ? (
              <div key={link.name} className="flex flex-col gap-2">
                <button
                  onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                  className={cn(
                    "flex items-center justify-between w-full text-sm font-medium transition-all duration-300 font-headline tracking-tight",
                    location.pathname.startsWith(link.path)
                      ? "text-primary"
                      : "text-on-surface-variant hover:text-primary"
                  )}
                >
                  <span>{link.name}</span>
                  <ChevronDown 
                    size={16} 
                    className={cn(
                      "transition-transform duration-300",
                      activeSubmenu === link.name && "rotate-180"
                    )} 
                  />
                </button>
                
                {/* Mobile Mega Menu (Columns) */}
                <AnimatePresence>
                  {activeSubmenu === link.name && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 border-l border-outline-variant/30 ml-2 mt-1">
                        {courseCategories.map((category) => (
                          <div key={category.id}>
                            <h4 className="font-headline font-bold text-primary/80 mb-2 text-xs uppercase">{category.title}</h4>
                            <ul className="space-y-2">
                              {category.courses.slice(0, 3).map((course) => (
                                <li key={course.id}>
                                  <Link
                                    to={`/courses/course/${course.id}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-xs text-on-surface-variant hover:text-primary block line-clamp-1"
                                  >
                                    {course.name}
                                  </Link>
                                </li>
                              ))}
                              {category.courses.length > 3 && (
                                <li>
                                  <Link 
                                    to="/courses" 
                                    onClick={() => setMenuOpen(false)}
                                    className="text-[10px] text-primary/60 italic hover:text-primary block"
                                  >
                                    More options...
                                  </Link>
                                </li>
                              )}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "text-sm font-medium transition-all duration-300 font-headline tracking-tight",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            )
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-white px-6 py-2 rounded-sm font-bold text-sm text-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] active:scale-95 mt-2 flex md:hidden"
          >
            Get In Touch
          </Link>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  const footerLinks = {
    Company: [
      { name: 'Home', to: '/' },
      { name: 'About Us', to: '/about' },
      { name: 'Contact Us', to: '/contact' },
    ],
    Products: [
      { name: 'Enterprise Cloud', to: '/products' },
      { name: 'AI & Data Science', to: '/products' },
      { name: 'Custom Software', to: '/products' },
      { name: 'Cybersecurity', to: '/products' },
    ],
    Courses: [
      { name: 'Academy all courses', to: '/courses' },
      { name: 'Full-Stack Immersive', to: '/courses#courses' },
      { name: 'Cloud Engineering', to: '/courses#courses' },
      { name: 'UI/UX Design', to: '/courses#courses' },
      { name: 'Cyber Bootcamps', to: '/courses#courses' },
    ],
    Legal: [
      { name: 'Privacy Policy', to: '#' },
      { name: 'Terms of Service', to: '#' },
      { name: 'Cookie Policy', to: '#' },
    ],
  };

  return (
    <footer className="w-full py-16 px-8 mt-20 border-t border-outline-variant bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="text-xl font-bold text-primary mb-4 font-headline tracking-tighter">Technospyre</div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Architecting digital futures through premium IT services and elite engineering education.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Website" className="w-9 h-9 rounded-sm bg-white/5 flex items-center justify-center hover:text-primary hover:bg-white/10 transition-all">
                <Globe size={16} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-sm bg-white/5 flex items-center justify-center hover:text-primary hover:bg-white/10 transition-all">
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-sm bg-white/5 flex items-center justify-center hover:text-primary hover:bg-white/10 transition-all">
                <Twitter size={16} />
              </a>
              <a href="mailto:info@technospyre.com" aria-label="Email" className="w-9 h-9 rounded-sm bg-white/5 flex items-center justify-center hover:text-primary hover:bg-white/10 transition-all">
                <Mail size={16} />
              </a>
              <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-sm bg-white/5 flex items-center justify-center hover:text-primary hover:bg-white/10 transition-all">
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h5 className="text-on-surface font-bold mb-5 font-headline text-sm uppercase tracking-widest">{heading}</h5>
              <ul className="space-y-3 text-sm">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-sm">
          <p>Â© {new Date().getFullYear()} Technospyre IT Solutions & Academy. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-green-400 animate-pulse"></span>
              System Status: Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};



