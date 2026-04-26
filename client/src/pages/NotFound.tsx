import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowLeft, Search, Sparkles } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles size={12} />
            Error 404
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground mb-4">
            Lost in <span className="text-secondary">Space?</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-lg mx-auto leading-relaxed">
            Oops! The page you're looking for has drifted away. It might have been moved, deleted, or never existed in this dimension.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-sm font-bold uppercase tracking-wider text-sm transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] active:scale-95"
            >
              <Home size={18} />
              Back to Home
            </Link>
            
            <Link
              to="/products"
              className="flex items-center gap-2 px-8 py-4 bg-surface-container border border-outline-variant text-foreground rounded-sm font-bold uppercase tracking-wider text-sm transition-all hover:bg-surface-container-high active:scale-95"
            >
              <Search size={18} />
              Explore Products
            </Link>
          </div>
        </motion.div>

        {/* Floating Icons for Aesthetic */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-10 text-primary/20 hidden md:block"
        >
          <Search size={80} />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-10 -left-10 text-secondary/20 hidden md:block"
        >
          <ArrowLeft size={80} />
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
