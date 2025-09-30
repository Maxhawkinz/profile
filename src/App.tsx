import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  useEffect(() => {
    // Apply dark theme to the document
    document.documentElement.classList.add('dark');
    
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Hide default cursor for custom cursor effect
    document.body.style.cursor = 'none';
    
    // Add custom CSS for better scrolling and performance
    const style = document.createElement('style');
    style.textContent = `
      * {
        scroll-behavior: smooth;
      }
      
      /* Hide scrollbar while keeping functionality */
      ::-webkit-scrollbar {
        width: 6px;
      }
      
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      
      ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.4);
      }
      
      /* Optimize animations */
      * {
        will-change: auto;
      }
      
      /* Custom selection colors */
      ::selection {
        background: rgba(255, 255, 255, 0.2);
        color: white;
      }
      
      /* Ensure smooth font rendering */
      body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      /* Add subtle gradient background */
      body {
        background: linear-gradient(135deg, #1a1612 0%, #2a2118 50%, #1a1612 100%);
        min-height: 100vh;
      }
      
      /* Add some glow effects for dark theme */
      .glow {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
      }
      
      /* Ensure interactive elements show pointer cursor */
      a, button, [role="button"] {
        cursor: none !important;
      }
      
      /* Mobile cursor override */
      @media (pointer: coarse) {
        body {
          cursor: auto !important;
        }
        
        a, button, [role="button"] {
          cursor: pointer !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Custom Cursor - Only on desktop */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Page Transition */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Hero />
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <About />
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Skills />
          </motion.div>

          {/* Awards Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Awards />
          </motion.div>

          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Projects />
          </motion.div>

          {/* Resume Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Resume />
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Contact />
          </motion.div>
        </main>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Footer />
        </motion.div>
      </motion.div>

      {/* Floating Action Button - Mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="fixed bottom-6 right-6 z-40 md:hidden"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center"
        >
          ↑
        </motion.button>
      </motion.div>

      {/* Loading overlay for better UX */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed inset-0 bg-background z-50 pointer-events-none"
      />
    </div>
  );
}