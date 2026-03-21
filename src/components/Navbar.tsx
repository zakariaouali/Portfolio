import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavLink {
  id: string;
  name: string;
}

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks: NavLink[] = [
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'certificates', name: 'Certificates' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -120 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        top: '20px',
        left: '0',
        right: '0',
        margin: '0 auto',
        width: 'fit-content',
        zIndex: 50,
      }}
    >
      {/* Floating Container */}
      <motion.div
        style={{
          borderRadius: '50px',
          padding: '12px 24px',
          background: 'rgba(10, 14, 39, 0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 217, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(0, 217, 255, 0.1)',
        }}
        whileHover={{
          boxShadow: '0 12px 40px 0 rgba(0, 217, 255, 0.2)',
          border: '1px solid rgba(0, 217, 255, 0.3)',
        }}
        transition={{ duration: 0.3 }}
      >
        <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
        }}>
          {/* Desktop Navigation */}
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={{
                padding: '10px 20px',
                borderRadius: '30px',
                background: activeSection === link.id
                  ? 'linear-gradient(135deg, rgba(0, 217, 255, 0.3), rgba(0, 153, 204, 0.2))'
                  : 'transparent',
                color: activeSection === link.id ? '#00d9ff' : 'rgba(224, 231, 255, 0.6)',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 300ms ease',
                border: activeSection === link.id
                  ? '1px solid rgba(0, 217, 255, 0.4)'
                  : '1px solid transparent',
              }}
              whileHover={{
                background: activeSection === link.id
                  ? 'linear-gradient(135deg, rgba(0, 217, 255, 0.4), rgba(0, 153, 204, 0.25))'
                  : 'rgba(0, 217, 255, 0.1)',
                color: '#00d9ff',
                scale: 1.08,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {link.name}
            </motion.button>
          ))}

          {/* Mobile Menu Button */}
          <motion.button
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '30px',
              border: '1px solid rgba(0, 217, 255, 0.2)',
              background: 'transparent',
              color: '#00d9ff',
              cursor: 'pointer',
              marginLeft: '8px',
            }}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{
              background: 'rgba(0, 217, 255, 0.1)',
              border: '1px solid rgba(0, 217, 255, 0.4)',
            }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        style={{
          display: isOpen ? 'block' : 'none',
          marginTop: '12px',
          borderRadius: '30px',
          padding: '16px',
          background: 'rgba(10, 14, 39, 0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 217, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(0, 217, 255, 0.1)',
          minWidth: '200px',
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={{
                padding: '12px 20px',
                borderRadius: '24px',
                border: activeSection === link.id
                  ? '1px solid rgba(0, 217, 255, 0.4)'
                  : '1px solid transparent',
                background: activeSection === link.id
                  ? 'rgba(0, 217, 255, 0.15)'
                  : 'transparent',
                color: activeSection === link.id ? '#00d9ff' : 'rgba(224, 231, 255, 0.6)',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 300ms ease',
              }}
              whileHover={{
                background: 'rgba(0, 217, 255, 0.2)',
                color: '#00d9ff',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
