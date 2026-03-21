import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:oualizakaria5@gmail.com', label: 'Email' },
  ];

  return (
    <footer style={{ backgroundColor: '#111632', borderTop: '1px solid rgba(0, 217, 255, 0.2)', padding: '48px 0', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', marginBottom: '32px' }}>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', background: 'linear-gradient(135deg, #00d9ff, #0099cc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>ZAO</h3>
            <p style={{ color: '#a0aec0', fontSize: '14px' }}>
              Building innovative solutions through modern technology and creative thinking.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 style={{ color: '#e0e7ff', fontWeight: '600', marginBottom: '16px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link} style={{ marginBottom: '8px' }}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    style={{ color: '#a0aec0', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#00d9ff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#a0aec0'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 style={{ color: '#e0e7ff', fontWeight: '600', marginBottom: '16px' }}>Technologies</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['React.js', 'Laravel', 'CSS', 'MongoDB'].map((tech) => (
                <li key={tech} style={{ marginBottom: '8px' }}>
                  <span style={{ color: '#a0aec0', fontSize: '14px' }}>{tech}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, rgba(0, 217, 255, 0.2), rgba(0, 217, 255, 0.4), rgba(0, 217, 255, 0.2))', marginBottom: '32px' }}></div>

        {/* Bottom Section */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ color: '#a0aec0', fontSize: '14px' }}
          >
            © {currentYear} Zakaria Ait Ahmad Ouali. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', gap: '16px' }}
          >
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '1px solid rgba(0, 217, 255, 0.2)', color: '#00d9ff', textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.4)'; e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.2)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'none', position: 'fixed', bottom: '32px', right: '32px', width: '48px', height: '48px', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '1px solid rgba(0, 217, 255, 0.2)', color: '#00d9ff', backgroundColor: 'transparent', cursor: 'pointer', transition: 'all 0.3s ease', zIndex: 50 }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.4)'; e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.2)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
          className="scroll-to-top"
        >
          <svg
            style={{ width: '24px', height: '24px' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7-7m0 0l-7 7m7-7v12"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
