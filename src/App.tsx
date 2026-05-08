import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load the 3D background for better initial load performance
const ThreeBackground = lazy(() => import('./components/ThreeBackground'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-primary selection:bg-white/20 selection:text-white">
        {/* Three.js Background */}
        <Suspense fallback={null}>
          <ThreeBackground />
        </Suspense>

        {/* Global Noise Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] bg-noise"></div>

        <Navbar />
        <main className="relative z-10">
          <Hero />
          <TechStack />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;