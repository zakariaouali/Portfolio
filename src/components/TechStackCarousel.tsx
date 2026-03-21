import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiLaravel,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPython,
  SiJavascript,
  SiPhpmyadmin,


} from 'react-icons/si';
import './TechStackCarousel.css';

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const TechStackCarousel: React.FC = () => {
  const techStack: TechItem[] = [
    { name: 'React', icon: <SiReact />, color: '#61DAFB' },
    { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20' },
    { name: 'PHP', icon: <SiPhp />, color: '#777BB4' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#ffea00' },
    { name: 'PhpMyAdmin', icon: <SiPhpmyadmin />, color: '#ff9900' },

    { name: 'MongoDB', icon: <SiMongodb />, color: '#13AA52' },
    { name: 'MySQL', icon: <SiMysql />, color: '#00758F' },
    { name: 'Git', icon: <SiGit />, color: '#F1502F' },
    { name: 'CSS', icon: <span>CSS</span>, color: '#1572B6' },
    { name: 'Python', icon: <SiPython />, color: 'rgb(255, 168, 37)' },
    
  ];

  // Duplicate for seamless scroll
  const doubledStack = [...techStack, ...techStack];

  return (
    <div style={{ padding: '48px 16px', background: `linear-gradient(to right, #0a0e27, #111632, #0a0e27)`, overflow: 'hidden' }}>
      <div style={{ maxWidth: '1792px', margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center', color: '#a0aec0', fontSize: '14px', fontWeight: '600', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Technologies I Work With
        </h3>

        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <motion.div
            style={{ display: 'flex', gap: '32px' }}
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {doubledStack.map((tech, idx) => (
              <motion.div
                key={idx}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 'max-content' }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <div 
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', paddingLeft: '24px', paddingRight: '24px', paddingTop: '16px', paddingBottom: '16px', borderRadius: '8px', background: 'rgba(17, 22, 50, 0.5)', border: '1px solid rgba(0, 217, 255, 0.1)', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.4)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.1)'; }}
                  className="tech-card"
                >
                  <div
                    style={{ fontSize: '30px', transition: 'all 0.3s ease', color: tech.color }}
                    className="tech-icon"
                  >
                    {tech.icon}
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#a0aec0', whiteSpace: 'nowrap', transition: 'color 0.3s ease' }} className="tech-name">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays for smooth edge effect */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '128px', background: 'linear-gradient(to right, #0a0e27, rgba(10, 14, 39, 0.5), transparent)', pointerEvents: 'none', zIndex: 10 }}></div>
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '128px', background: 'linear-gradient(to left, #0a0e27, rgba(10, 14, 39, 0.5), transparent)', pointerEvents: 'none', zIndex: 10 }}></div>
        </div>
      </div>
    </div>
  );
};

export default TechStackCarousel;
