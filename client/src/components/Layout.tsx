import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { Globe, Linkedin, Mail, Twitter, Github, Menu, X, Moon, Sun, ChevronDown, ArrowRight } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { courseCategories } from '../data/academy';

export const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/academy', isMegaMenu: true },
    { name: 'Products', path: '/solutions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="relative w-full z-50 flex justify-between items-center px-4 md:px-8 py-3 bg-background border-b border-outline-variant/50">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            layoutId="site-logo"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex items-center gap-2"
          >
            <img src="/logo1.svg" alt="Logo" className="w-8 h-8 rounded-sm" />
            <span className="font-bold text-on-surface text-lg tracking-tight">Technospyre</span>
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            link.isMegaMenu ? (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={cn(
                    "flex items-center gap-1 text-[15px] font-semibold transition-colors duration-200",
                    location.pathname.startsWith(link.path)
                      ? "text-primary"
                      : "text-on-surface-variant hover:text-on-surface"
                  )}
                >
                  {link.name}
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300 text-on-surface-variant" />
                </Link>
                
                {/* Invisible Hover Bridge */}
                <div className="absolute top-full left-0 w-full h-6 opacity-0 pointer-events-auto" />
                
                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[900px] max-w-[95vw] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto z-50">
                  <div className="bg-surface rounded-sm border border-outline-variant/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] p-8">
                    <div className="grid grid-cols-4 gap-x-8 gap-y-8">
                    {courseCategories.map((category) => {
                      const shortTitle = category.title.replace(/ Courses| Development/g, '');
                      return (
                        <div key={category.id} className="flex flex-col">
                          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-outline-variant/30">
                            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                               <div className="w-2 h-2 rounded-full bg-primary" />
                            </span>
                            <h4 className="font-semibold text-on-surface text-sm">{shortTitle}</h4>
                          </div>
                          <ul className="space-y-2 flex-grow">
                            {category.courses.slice(0, 3).map(course => (
                              <li key={course.id}>
                                <Link 
                                  to={`/academy/course/${course.id}`} 
                                  className="group/item flex items-center py-1.5 px-3 -mx-3 rounded-sm hover:bg-surface-container transition-colors"
                                >
                                  <span className="text-sm font-medium text-on-surface-variant group-hover/item:text-primary transition-colors line-clamp-1">{course.name}</span>
                                </Link>
                              </li>
                            ))}
                            {category.courses.length > 3 && (
                              <li className="pt-2 mt-2">
                                <Link 
                                  to="/academy" 
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
          className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <Link
          to="/login"
          className="text-on-surface font-semibold px-4 py-2.5 bg-surface text-[15px] rounded-sm border border-outline-variant hover:bg-surface-container transition-colors shadow-sm"
        >
          Log in
        </Link>
        <Link
          to="/signup"
          className="bg-primary hover:bg-primary/95 text-white font-semibold text-[15px] px-4 py-2.5 rounded-sm transition-colors shadow-sm"
        >
          Sign up
        </Link>
      </div>

      {/* Mobile controls */}
      <div className="flex lg:hidden items-center gap-2">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors"
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
          className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors ml-1"
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
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-full mt-3 left-0 w-full max-h-[75vh] overflow-y-auto bg-surface-container/95 backdrop-blur-xl rounded-sm border border-outline-variant shadow-2xl p-6 flex flex-col gap-4 lg:hidden"
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
                                    to={`/academy/course/${course.id}`}
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
                                    to="/academy" 
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
      { name: 'Enterprise Cloud', to: '/solutions' },
      { name: 'AI & Data Science', to: '/solutions' },
      { name: 'Custom Software', to: '/solutions' },
      { name: 'Cybersecurity', to: '/solutions' },
    ],
    Courses: [
      { name: 'Full-Stack Immersive', to: '/academy' },
      { name: 'Cloud Engineering', to: '/academy' },
      { name: 'UI/UX Design', to: '/academy' },
      { name: 'Cyber Bootcamps', to: '/academy' },
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
          <p>© {new Date().getFullYear()} Technospyre IT Solutions & Academy. All rights reserved.</p>
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
