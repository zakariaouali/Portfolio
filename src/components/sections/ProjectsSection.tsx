import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiPhp,
  SiJavascript,
  SiTailwindcss,
  SiVuedotjs,
  SiPhpmyadmin,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

// Map tech names to React Icon components
const getTechIcon = (tech: string): React.ReactNode => {
  const iconMap: Record<string, React.ReactNode> = {
    'React': <SiReact />,
    'React.js': <SiReact />,
    'TypeScript': <SiTypescript />,
    'Node.js': <SiNodedotjs />,
    'Laravel': <SiLaravel />,
    'PHP': <SiPhp />,
    'MySQL': <SiMysql />,
    'MongoDB': <SiMongodb />,
    'PostgreSQL': <SiPostgresql />,
    'Docker': <SiDocker />,
    'AWS': <FaAws />,
    'Vue.js': <SiVuedotjs />,
    "phpMyAdmin": <SiPhpmyadmin/>,
    'Firebase': (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 12l5-8v4l3-4v12H7z" opacity="0.8"/>
      </svg>
    ),
    
    'JavaScript': <SiJavascript />,
    'TailwindCSS': <SiTailwindcss />,
    'Stripe': (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.76 7.53c-.38-1.45-1.68-2.42-3.28-2.42-1.84 0-3.35 1.51-3.35 3.35 0 1.6.99 2.98 2.42 3.35.96.3 1.97.3 2.93 0 1.43-.37 2.42-1.76 2.42-3.35 0-.61-.15-1.19-.42-1.7h-3.35v1.28h1.63z" />
      </svg>
    ),
    'Email Service': (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      </svg>
    ),
  };

  return iconMap[tech] || tech;
};

const ProjectsSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});

  const getImageIndex = (projectIdx: number): number => {
    return currentImageIndex[projectIdx] ?? 0;
  };

  const nextImage = (projectIdx: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIdx]: ((prev[projectIdx] ?? 0) + 1) % totalImages,
    }));
  };

  const prevImage = (projectIdx: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIdx]: (prev[projectIdx] ?? 0) === 0 ? totalImages - 1 : (prev[projectIdx] ?? 0) - 1,
    }));
  };

  const goToImage = (projectIdx: number, imageIdx: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIdx]: imageIdx,
    }));
  };

  const projectsData: Project[] = [
    
    {
      title: 'Money Mate – Budget App',
      description:
        'Application to manage personal finances with expense tracking, category system and budget calculations.',
      technologies: ['React.js','Laravel', 'MySQL', 'TailwindCSS',"phpMyAdmin"],
      images: [
        '/moneyMate.jpeg',
        '/moneymate/signup.jfif',
        '/moneymate/dashboard.jfif',
        '/moneymate/goals.jfif',
        '/moneymate/payments.jfif',
        '/moneymate/subscription.jfif',


      ],
      featured: true,
      github: 'https://github.com/zakariaouali/Budget',
      demo: 'https://example.com',
    },
    {
      title: 'SaaS Data Management - Yes to the Net',
      description:
        'Internship project building a SaaS platform used to centralize, secure and organize client data and documents.',
      technologies: ['Vue.js','Laravel', 'MySQL', 'TailwindCSS',"phpMyAdmin"],
      images: [
        '/yesGed.PNG',
        '/dashboard_overview.PNG',
        '/dashboard_Team.PNG',
        '/FIELDS.PNG',
        
      ],
      featured: true,
      github: 'https://github.com/zakariaouali/YesGed-Page',
      demo: 'https://zakariaouali.github.io/YesGed-Page/',
    },
    {
      title: 'IBK Bakery International Website',
      description:
        'Website presenting services and products of an international bakery with modern UI and online ordering capabilities.',
      technologies: ['React', 'Laravel', 'TailwindCSS', 'MySQL', 'phpMyAdmin'],
      images: [
        '/IBK.jpeg',
        '/IBK/hero.PNG',
        '/IBK/panier.PNG',
        '/IBK/products.PNG',
        '/IBK/specials.PNG',
      ],
      featured: false,
      github: 'https://github.com/zakariaouali/IBKBakery',
      demo: 'https://ibkbakery.com',
    },
    {
      title: 'Medical Appointment Platform',
      description:
        'Full-stack medical platform to handle appointments that received online with the option of making new appointment directy and handle all of them in one place with automatic email notifications.',
      technologies: ['Laravel', 'MySQL', 'phpMyAdmin',"css", 'Email Service'],
      images: [
        '/appointments.PNG',
        '/appointments2.PNG',
        '/appointments3.PNG',
      ],
      featured: true,
      github: 'https://github.com/zakariaouali/Appointments',
      demo: 'https://example.com',
    },
    {
      title: 'Website for a Doctor',
      description:
        'Medical platform allowing patients to explore services and book appointments online with appointment management and automatic email notifications.',
      technologies: ['React','API',"css", 'Email Service'],
      images: [
        '/Dr/home.PNG',
        '/Dr/data.PNG',
        '/Dr/location.PNG',
        '/Dr/app.PNG',
      ],
      featured: true,
      github: 'https://github.com/zakariaouali/DrDaggouj',
      demo: 'https://zakariaouali.github.io/DrDouggouj/',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-dark-bg relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="inline-block mb-4">
              <span style={{
                display: 'inline-block',
                padding: '8px 16px',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(0, 150, 200, 0.05))',
                border: '1px solid rgba(0, 217, 255, 0.3)',
                color: '#00d9ff',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}>
                ✨ Portfolio Highlights
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-text-light mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl">
              Transforming ideas into scalable, production-ready solutions. Each project showcases modern development practices and architectural excellence.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-blue-dark mt-8 rounded-full"></div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projectsData.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl h-full backdrop-blur-xl border border-neon-blue/20 hover:border-neon-blue/50 bg-gradient-to-br from-slate-900/40 to-slate-800/20 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col">
                  {/* Image Container */}
                  <div style={{
                    position: 'relative',
                    backgroundColor: '#111232',
                    height: '256px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                    {/* Background Gradient */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(0, 150, 200, 0.05) 100%)',
                      zIndex: 1,
                      pointerEvents: 'none',
                    }} />

                    {/* Image */}
                    <motion.img
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3, type: 'tween' }}
                      src={project.images[getImageIndex(idx)]}
                      alt={`${project.title} screenshot`}
                      style={{
                        position: 'relative',
                        zIndex: 2,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />

                    {/* Vignette */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 14, 39, 0.3) 100%)',
                      pointerEvents: 'none',
                      zIndex: 3,
                    }} />

                    {/* Controls */}
                    {project.images.length > 1 && (
                      <>
                        <motion.button
                          whileHover={{ scale: 1.2, x: -4 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => prevImage(idx, project.images.length)}
                          style={{
                            position: 'absolute',
                            left: '12px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 20,
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(0, 150, 200, 0.1))',
                            border: '1.5px solid rgba(0, 217, 255, 0.4)',
                            color: '#00d9ff',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 16px rgba(0, 217, 255, 0.2)',
                            backdropFilter: 'blur(8px)',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 217, 255, 0.25), rgba(0, 150, 200, 0.15))';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 217, 255, 0.3)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(0, 150, 200, 0.1))';
                            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 217, 255, 0.2)';
                          }}
                          aria-label="Previous"
                        >
                          <FiChevronLeft size={18} />
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.2, x: 4 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => nextImage(idx, project.images.length)}
                          style={{
                            position: 'absolute',
                            right: '12px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 20,
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(0, 150, 200, 0.1))',
                            border: '1.5px solid rgba(0, 217, 255, 0.4)',
                            color: '#00d9ff',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 16px rgba(0, 217, 255, 0.2)',
                            backdropFilter: 'blur(8px)',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 217, 255, 0.25), rgba(0, 150, 200, 0.15))';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 217, 255, 0.3)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(0, 150, 200, 0.1))';
                            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 217, 255, 0.2)';
                          }}
                          aria-label="Next"
                        >
                          <FiChevronRight size={18} />
                        </motion.button>

                        {/* Indicators */}
                        <div style={{
                          position: 'absolute',
                          bottom: '12px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          zIndex: 20,
                          display: 'flex',
                          gap: '6px',
                          padding: '6px 10px',
                          background: 'rgba(10, 14, 39, 0.6)',
                          backdropFilter: 'blur(8px)',
                          borderRadius: '20px',
                          border: '1px solid rgba(0, 217, 255, 0.2)',
                        }}>
                          {project.images.map((_, imgIdx) => (
                            <motion.button
                              key={imgIdx}
                              onClick={() => goToImage(idx, imgIdx)}
                              style={{
                                width: getImageIndex(idx) === imgIdx ? '24px' : '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: getImageIndex(idx) === imgIdx 
                                  ? 'linear-gradient(135deg, #00d9ff, #00a8cc)' 
                                  : 'rgba(0, 217, 255, 0.3)',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: getImageIndex(idx) === imgIdx ? '0 0 12px rgba(0, 217, 255, 0.5)' : 'none',
                              }}
                            />
                          ))}
                        </div>

                        {/* Counter */}
                        <div style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          zIndex: 20,
                          padding: '4px 10px',
                          borderRadius: '16px',
                          background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(10, 14, 39, 0.7))',
                          border: '1px solid rgba(0, 217, 255, 0.3)',
                          backdropFilter: 'blur(8px)',
                          color: '#00d9ff',
                          fontSize: '11px',
                          fontWeight: '600',
                        }}>
                          {getImageIndex(idx) + 1} / {project.images.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#e0e7ff',
                        marginBottom: '8px',
                        transition: 'color 0.3s ease',
                      }}
                      className="group-hover:text-neon-blue">
                        {project.title}
                      </h3>

                      <p style={{
                        color: '#a0aec0',
                        fontSize: '13px',
                        lineHeight: '1.5',
                        marginBottom: '12px',
                      }}>
                        {project.description}
                      </p>
                    </div>

                    <div style={{
                      height: '1px',
                      background: 'linear-gradient(90deg, rgba(0, 217, 255, 0.2), transparent)',
                      margin: '12px 0',
                    }} />

                    <div style={{
                      marginBottom: '14px',
                    }}>
                      <p style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        color: '#7a86c4',
                        letterSpacing: '0.4px',
                        textTransform: 'uppercase',
                        marginBottom: '10px'
                      }}>
                        Tech Stack
                      </p>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px'
                      }}>
                        {project.technologies.map((tech, i) => (
                          <div
                            key={i}
                            style={{
                              padding: '8px 12px',
                              borderRadius: '10px',
                              background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(0, 150, 200, 0.08))',
                              border: '1.5px solid rgba(0, 217, 255, 0.35)',
                              color: '#00d9ff',
                              fontSize: '18px',
                              fontWeight: '600',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'default',
                              transition: 'all 0.2s ease',
                              minWidth: '48px',
                              height: '48px',
                            }}
                            title={tech}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 217, 255, 0.25), rgba(0, 150, 200, 0.15))';
                              e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.6)';
                              e.currentTarget.style.transform = 'scale(1.1)';
                              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 217, 255, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(0, 150, 200, 0.08))';
                              e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.35)';
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            {getTechIcon(tech)}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{
                      display: 'flex',
                      gap: '10px',
                      marginTop: 'auto',
                    }}>
                      {project.github && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            padding: '8px 12px',
                            background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(0, 150, 200, 0.08))',
                            border: '1.5px solid rgba(0, 217, 255, 0.4)',
                            color: '#00d9ff',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '12px',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 217, 255, 0.25), rgba(0, 150, 200, 0.15))';
                            e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.7)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 217, 255, 0.25)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(0, 150, 200, 0.08))';
                            e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.4)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <FiGithub size={14} /> Code
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            padding: '8px 12px',
                            background: 'linear-gradient(135deg, #00d9ff, #00a8cc)',
                            border: '1.5px solid rgba(0, 217, 255, 0.8)',
                            color: '#0a0e27',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            fontWeight: '700',
                            fontSize: '12px',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 2px 8px rgba(0, 217, 255, 0.2)',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 217, 255, 0.4)';
                            e.currentTarget.style.background = 'linear-gradient(135deg, #00e8ff, #00b8d4)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 217, 255, 0.2)';
                            e.currentTarget.style.background = 'linear-gradient(135deg, #00d9ff, #00a8cc)';
                          }}
                        >
                          <FiExternalLink size={14} /> Live
                        </motion.a>
                      )}
                    </div>
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

export default ProjectsSection;
