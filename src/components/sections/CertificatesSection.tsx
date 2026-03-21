import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward } from 'react-icons/fi';

interface Certificate {
  title: string;
  issuer: string;
  issueDate?: string;
  image?: string;
}

const CertificatesSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const certificatesData: Certificate[] = [
    {
      title: 'Interactivity with JavaScript',
      issuer: 'University of Michigan',
      issueDate: 'Feb 2025',
      image: 'public/certificates/js.PNG',
    },
    {
      title: 'Introduction à la programmation orientée objet (en C++)',
      issuer: 'École polytechnique fédérale de Lausanne, EPFL',
      issueDate: 'Oct 2025',
      image: 'public/certificates/c++.PNG',
    },
    {
      title: 'The Unix Workbench',
      issuer: 'United Latino Students Association',
      issueDate: 'Nov 2025',
      image: 'public/certificates/unix.PNG',
    },
    {
      title: 'SQL for Data Science',
      issuer: 'Great Learning',
      image: 'public/certificates/sql.PNG',
    },
    {
      title: 'HTML and CSS in depth',
      issuer: 'Meta',
      image: 'public/certificates/htmlcss.PNG',
    },
    {
      title: 'Introduction to Web Development with HTML, CSS, JavaScript',
      issuer: 'IBM',
      image: 'public/certificates/htmlcssjs.PNG',
    },
    {
      title: 'Python Essentials 1',
      issuer: 'Cisco',
      issueDate: 'Oct 2024',
      image: 'public/certificates/python.PNG',
    },
    {
      title: 'JavaScript Essentials 1',
      issuer: 'Cisco',
      issueDate: 'Sep 2024',
      image: 'public/certificates/jsCisco.PNG',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const certificateVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.05,
      },
    }),
  };

  return (
    <section id="certificates" className="py-28 px-4 md:px-8 bg-dark-bg relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="flex flex-col gap-4">
              <p className="text-neon-blue text-sm font-semibold tracking-widest uppercase">Professional Credentials</p>
              <h2 className="text-5xl md:text-6xl font-bold text-text-light leading-tight">
                Certifications & <span className="gradient-text">Credentials</span>
              </h2>
              <p className="text-text-muted text-lg max-w-3xl leading-relaxed pt-2">
                Industry-recognized certifications demonstrating continuous learning and expertise across various technologies and platforms.
              </p>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-neon-blue via-cyan-400 to-transparent mt-8 rounded-full"></div>
          </motion.div>

          {/* Certificates Grid */}
          <motion.div variants={containerVariants} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {certificatesData.map((cert, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={certificateVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -8 }}
                style={{
                  height: '100%',
                }}
              >
                <div style={{
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#111232',
                  border: '1px solid rgba(0, 217, 255, 0.15)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(0, 217, 255, 0.4)';
                  el.style.backgroundColor = '#161a3a';
                  el.style.boxShadow = '0 12px 40px rgba(0, 217, 255, 0.15), inset 0 0 20px rgba(0, 217, 255, 0.05)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(0, 217, 255, 0.15)';
                  el.style.backgroundColor = '#111232';
                  el.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
                }}
                >
                  {/* Certificate Image Container */}
                  {cert.image && (
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      height: '220px',
                      overflow: 'hidden',
                      backgroundColor: '#0a0e27',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLImageElement).style.transform = 'scale(1.08)';
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLImageElement).style.transform = 'scale(1)';
                        }}
                      />
                      {/* Overlay Gradient */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, transparent 50%, rgba(10, 14, 39, 0.8) 100%)',
                        pointerEvents: 'none',
                      }} />
                      {/* Badge */}
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        padding: '6px 14px',
                        backgroundColor: 'rgba(0, 217, 255, 0.2)',
                        border: '1.5px solid rgba(0, 217, 255, 0.5)',
                        borderRadius: '20px',
                        color: '#00d9ff',
                        fontSize: '11px',
                        fontWeight: '700',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '0 4px 12px rgba(0, 217, 255, 0.1)',
                      }}>
                        Certified
                      </div>
                    </div>
                  )}

                  {/* Content Section */}
                  <div style={{
                    flex: 1,
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                    {/* Top Content */}
                    <div>
                      {/* Icon + Title */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '14px',
                        marginBottom: '16px',
                      }}>
                        <div style={{
                          padding: '10px',
                          borderRadius: '10px',
                          background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.2), rgba(0, 150, 200, 0.1))',
                          color: '#00d9ff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          border: '1px solid rgba(0, 217, 255, 0.2)',
                          transition: 'all 0.3s ease',
                        }}>
                          <FiAward size={20} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <h3 style={{
                            fontSize: '16px',
                            fontWeight: '700',
                            color: '#e0e7ff',
                            marginBottom: '6px',
                            lineHeight: '1.4',
                            letterSpacing: '0.3px',
                          }}>
                            {cert.title}
                          </h3>
                          <p style={{
                            fontSize: '13px',
                            color: '#a0aee0',
                            fontWeight: '600',
                            lineHeight: '1.5',
                          }}>
                            {cert.issuer}
                          </p>
                        </div>
                      </div>

                      {/* Divider */}
                      <div style={{
                        height: '1px',
                        background: 'linear-gradient(90deg, rgba(0, 217, 255, 0.2), transparent)',
                        margin: '16px 0',
                      }} />

                      {/* Issuer Details */}
                      <div style={{
                        fontSize: '12px',
                        color: '#7a86c4',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}>
                        <span style={{
                          display: 'inline-block',
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#00d9ff',
                        }} />
                        Professional Credential
                      </div>
                    </div>

                    {/* Bottom - Date */}
                    {cert.issueDate && (
                      <div style={{
                        marginTop: '16px',
                        paddingTop: '16px',
                        borderTop: '1px solid rgba(0, 217, 255, 0.1)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                        <span style={{
                          fontSize: '11px',
                          color: '#7a86c4',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          fontWeight: '600',
                        }}>
                          Issued
                        </span>
                        <span style={{
                          fontSize: '12px',
                          color: '#00d9ff',
                          fontWeight: '700',
                        }}>
                          {cert.issueDate}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
