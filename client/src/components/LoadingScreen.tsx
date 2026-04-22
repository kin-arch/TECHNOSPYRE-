import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

const LoadingScreen = ({ loading }: { loading: boolean }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center gap-5"
        >
          <motion.div
            layoutId="site-logo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            // className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-primary font-headline"
          >
            <img src="/CompanyLogo.png" alt="Logo" className="w-72 h-72" />
          </motion.div>

          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="text-surface font-headline tracking-[0.2em] uppercase text-sm"
          >
            Initializing Experience...
          </motion.div>
          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-48 sm:w-64 h-1.5 bg-surface-gray mt-8 rounded-sm overflow-hidden"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-primary"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;



