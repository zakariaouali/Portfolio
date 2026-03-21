import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/zakariaouali', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/zakaria-ait-ahmad-ouali', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:oualizakaria5@gmail.com', label: 'Email' },
  ];

  return (
    <footer style={{ backgroundColor: '#0a0e27', borderTop: '1px solid rgba(0, 217, 255, 0.2)', padding: '64px 0 24px 0', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
        {/* Main Footer Content */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '48px', marginBottom: '48px' }}>
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '700', 
              color: '#e0e7ff',
              marginBottom: '16px',
              letterSpacing: '0.5px'
            }}>About</h3>
            <p style={{ 
              color: '#a0aec0', 
              fontSize: '14px', 
              lineHeight: '1.6',
              margin: 0
            }}>
              Full-stack developer passionate about building scalable applications and solving complex problems through clean, modern code.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 style={{ color: '#e0e7ff', fontWeight: '700', marginBottom: '16px', fontSize: '16px', letterSpacing: '0.5px' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['About', 'Skills', 'Projects', 'Certificates', 'Contact'].map((link) => (
                <li key={link} style={{ marginBottom: '12px' }}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    style={{ 
                      color: '#a0aec0', 
                      textDecoration: 'none', 
                      fontSize: '14px', 
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#00d9ff';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#a0aec0';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#00d9ff', opacity: 0.6 }} />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 style={{ color: '#e0e7ff', fontWeight: '700', marginBottom: '16px', fontSize: '16px', letterSpacing: '0.5px' }}>Tech Stack</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['React.js', 'Laravel', 'TypeScript', 'Node.js'].map((tech) => (
                <li key={tech} style={{ marginBottom: '12px' }}>
                  <span style={{ 
                    color: '#a0aec0', 
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#00d9ff', opacity: 0.6 }} />
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 style={{ color: '#e0e7ff', fontWeight: '700', marginBottom: '16px', fontSize: '16px', letterSpacing: '0.5px' }}>Get In Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="mailto:oualizakaria5@gmail.com"
                style={{
                  color: '#a0aec0',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#00d9ff'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#a0aec0'}
              >
                oualizakaria5@gmail.com
              </a>
              <p style={{ color: '#7a86c4', fontSize: '13px', margin: 0 }}>
                Available for freelance work and collaborations
              </p>
            </div>
          </motion.div>
        </div>

        {/* Gradient Divider */}
        <div style={{ 
          height: '1px', 
          background: 'linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.3), transparent)',
          marginBottom: '32px'
        }} />

        {/* Bottom Section */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px'
        }}>
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', gap: '12px' }}
          >
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{ 
                    width: '44px', 
                    height: '44px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    borderRadius: '10px', 
                    border: '1.5px solid rgba(0, 217, 255, 0.3)',
                    color: '#00d9ff', 
                    textDecoration: 'none', 
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    background: 'rgba(0, 217, 255, 0.05)'
                  }}
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.6)';
                    e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.15)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.3)';
                    e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.05)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ 
              color: '#7a86c4', 
              fontSize: '13px',
              margin: 0,
              textAlign: 'center',
              letterSpacing: '0.3px'
            }}
          >
            © {currentYear} All rights reserved. Crafted with passion and modern technology.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
