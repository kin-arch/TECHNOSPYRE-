import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar, Footer } from './components/Layout';
import { SmoothScroll, ScrollToTop, ScrollToTopButton } from './components/Scroll';
import LoadingScreen from './components/LoadingScreen';
import { ThemeProvider } from './components/ThemeProvider';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import CourseDetail from './pages/CourseDetail';
import ProductDetail from './pages/ProductDetail';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [transitionDone, setTransitionDone] = React.useState(false);

  React.useEffect(() => {
    // Matches progress bar duration (1.5s) + delay (0.4s) + short pause (0.3s)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    // Hide native scrollbar during loading and transition to prevent layout shifts
    if (!transitionDone) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [transitionDone]);

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light">
        <Router>
          <ScrollToTop />
          <LoadingScreen loading={loading} />
          
          {/* Render main content conditionally, ensuring it mounts only when loading is done to allow smooth layoutId transition */}
          <AnimatePresence>
            {!loading && (
              <motion.div
                key="main-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                onAnimationComplete={() => setTransitionDone(true)}
              >
                <ScrollToTopButton />
                <SmoothScroll>
                  <MainLayout>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/products/:id" element={<ProductDetail />} />
                      <Route path="/courses" element={<Courses />} />
                      <Route path="/courses/:id" element={<CourseDetail />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </MainLayout>
                </SmoothScroll>
              </motion.div>
            )}
          </AnimatePresence>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}
