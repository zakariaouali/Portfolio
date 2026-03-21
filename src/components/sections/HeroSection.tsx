import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';
import ParticlesBackground from '../ParticlesBackground';

const HeroSection: React.FC = () => {

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Zakaria-Ait-Ahmad-Ouali-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '80px',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}
    >
      <style>{`
        @media (max-width: 1024px) {
          #hero-main-container {
            gap: 40px !important;
          }
          .hero-content {
            max-width: 100% !important;
          }
        }

        @media (max-width: 768px) {
          #hero-main-container {
            flex-direction: column !important;
            gap: 32px !important;
            justify-content: center !important;
          }
          .hero-image-container {
            flex: 0 !important;
            min-height: 0 !important;
          }
          section#home {
            padding-top: 100px !important;
            padding-bottom: 60px !important;
          }
        }

        @media (max-width: 640px) {
          section#home {
            padding-left: 16px !important;
            padding-right: 16px !important;
            padding-top: 80px !important;
            min-height: auto;
          }
          #hero-main-container {
            gap: 24px !important;
          }
          .hero-content {
            gap: 20px !important;
          }
          .cta-buttons {
            gap: 12px !important;
            flex-direction: column !important;
          }
          .cta-buttons button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
      <ParticlesBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 10,
        }}
      >

        {/* MAIN CONTAINER - FLEX ROW */}
        <div id="hero-main-container" style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '60px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>

          {/* TEXT AND BUTTONS - LEFT */}
          <motion.div className="hero-content" style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            maxWidth: '550px',
          }}>

            {/* HERO NAME AND INTRO */}
            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

              <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Orbitron:wght@400;700;900&display=swap');

                .hero-name {
                  font-family: 'Orbitron', 'Space Grotesk', sans-serif;
                  font-weight: 900;
                  letter-spacing: 2px;
                  font-size: clamp(2.5rem, 7vw, 4rem);
                  background: linear-gradient(135deg, #00d9ff 0%, #0099cc 45%, #00d9ff 100%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  text-transform: uppercase;
                  line-height: 1.15;
                  margin: 0;
                }

                .hero-subtitle {
                  font-family: 'Space Grotesk', sans-serif;
                  font-size: clamp(1.5rem, 4vw, 2.2rem);
                  font-weight: 600;
                  color: #e0e7ff;
                  line-height: 1.3;
                  margin: 0;
                  letter-spacing: 0.3px;
                }

                .hero-meta {
                  font-size: 0.95rem;
                  color: rgba(160, 174, 192, 0.8);
                  font-weight: 500;
                  letter-spacing: 0.5px;
                  margin: 0;
                }
              `}</style>

              <h1 className="hero-name">Zakaria</h1>
              <h2 className="hero-subtitle">Ait Ahmad Ouali</h2>
              <p className="hero-meta">Full Stack Developer · Software Engineering Student</p>

            </motion.div>

            {/* BIO/DESCRIPTION */}
            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'rgba(224, 231, 255, 0.85)',
                margin: 0,
                fontWeight: 400,
                letterSpacing: '0.3px',
              }}>
                I craft elegant digital solutions with modern technologies. Passionate about creating seamless user experiences and solving complex problems through clean, maintainable code.
              </p>

              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: 'rgba(160, 174, 192, 0.75)',
                margin: 0,
                fontWeight: '500',
              }}>
                Based in Morocco • Available for Remote & Freelance
              </p>

            </motion.div>

            {/* CTA BUTTONS */}
            <motion.div
              className="cta-buttons"
              variants={itemVariants}
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                paddingTop: '16px',
                alignItems: 'center',
              }}
            >

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                style={{
                  padding: '14px 32px',
                  background: 'linear-gradient(135deg, #00d9ff 0%, #0099cc 100%)',
                  color: '#0a0e27',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 10px 30px rgba(0, 217, 255, 0.2)',
                  letterSpacing: '0.3px',
                }}
              >
                View Projects <FiArrowRight size={18} style={{ marginLeft: '4px' }} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                style={{
                  padding: '14px 28px',
                  border: '2px solid rgba(0, 217, 255, 0.5)',
                  color: '#00d9ff',
                  background: 'rgba(0, 217, 255, 0.05)',
                  borderRadius: '10px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                  letterSpacing: '0.3px',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0, 217, 255, 0.12)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 217, 255, 0.8)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0, 217, 255, 0.05)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 217, 255, 0.5)';
                }}
              >
                <FiMail size={18} /> Contact
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadCV}
                style={{
                  padding: '14px 28px',
                  border: '2px solid rgba(0, 217, 255, 0.25)',
                  color: 'rgba(0, 217, 255, 0.7)',
                  background: 'transparent',
                  borderRadius: '10px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                  letterSpacing: '0.3px',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 217, 255, 0.5)';
                  (e.currentTarget as HTMLElement).style.color = '#00d9ff';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0, 217, 255, 0.08)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 217, 255, 0.25)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(0, 217, 255, 0.7)';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                <FiDownload size={18} /> Resume
              </motion.button>

            </motion.div>

          </motion.div>

          {/* IMAGE - RIGHT */}
          <motion.div
            className="hero-image-container"
            variants={imageVariants}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              minHeight: '400px',
            }}
          >

            <div className="relative" style={{
              width: 'clamp(240px, 50vw, 450px)',
              height: 'clamp(240px, 50vw, 450px)',
              position: 'relative',
            }}>

              {/* ANIMATED GLOW RING */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                style={{
                  background: 'conic-gradient(from 0deg, #00d9ff, #0099cc, #00d9ff)',
                  padding: '4px',
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: '4px',
                  borderRadius: '50%',
                  background: '#0a0e27',
                }}></div>
              </motion.div>

              {/* ENHANCED GLOW */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  inset: '-16px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0, 217, 255, 0.3), rgba(0, 217, 255, 0.05))',
                  filter: 'blur(30px)',
                  opacity: 0.7,
                }}
              ></motion.div>

              {/* PROFILE IMAGE */}
              <motion.div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid rgba(0, 217, 255, 0.4)',
                }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <img
                  src="public/profile.jpg"
                  alt="Zakaria Ait Ahmad Ouali"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(0, 153, 204, 0.08))',
                }}></div>

              </motion.div>

              {/* FLOATING ACCENT DOTS */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '-12px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#00d9ff',
                  boxShadow: '0 0 20px rgba(0, 217, 255, 0.6)',
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  opacity: [1, 0.4, 1],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '-8px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'rgba(0, 217, 255, 0.7)',
                  boxShadow: '0 0 15px rgba(0, 217, 255, 0.4)',
                }}
                animate={{
                  y: [0, 15, 0],
                  x: [0, -10, 0],
                  opacity: [1, 0.3, 1],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />

            </div>

          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};

export default HeroSection;