import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TechStackCarousel from './components/TechStackCarousel';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import CertificatesSection from './components/sections/CertificatesSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Track active section on scroll
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'certificates', 'projects', 'experience', 'contact'];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: '#0a0e27', color: '#e0e7ff', overflowX: 'hidden' }}>
      <Loading isLoading={isLoading} />
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <TechStackCarousel />
      <AboutSection />
      <SkillsSection />
      <CertificatesSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
