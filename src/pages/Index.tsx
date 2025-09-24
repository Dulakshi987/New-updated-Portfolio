import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Blogs from '@/components/Blogs';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      
      <Blogs />
      <Reviews />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs md:text-sm">
              © 2025 Dulakshi Keshani. All rights reserved. 
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
