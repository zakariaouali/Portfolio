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
        'public/moneyMate.jpeg',
        'public/moneymate/signup.jfif',
        'public/moneymate/dashboard.jfif',
        'public/moneymate/goals.jfif',
        'public/moneymate/payments.jfif',
        'public/moneymate/subscription.jfif',


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
        'public/yesGed.PNG',
        'public/dashboard_overview.PNG',
        'public/dashboard_Team.PNG',
        'public/FIELDS.PNG',
        
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
        'public/IBK.jpeg',
        'public/IBK/hero.PNG',
        'public/IBK/panier.PNG',
        'public/IBK/products.PNG',
        'public/IBK/specials.PNG',
      ],
      featured: false,
      github: 'https://github.com/zakariaouali/IBKBakery',
      demo: 'https://ibkbakery.com',
    },
    {
      title: 'Medical Appointment Platform',
      description:
        'Full-stack medical platform allowing patients to explore services and book appointments online with appointment management and automatic email notifications.',
      technologies: ['Laravel', 'MySQL', 'phpMyAdmin',"css", 'Email Service'],
      images: [
        'public/appointments.PNG',
        'public/appointments2.PNG',
        'public/appointments3.PNG',
      ],
      featured: true,
      github: 'https://github.com/zakariaouali/Appointments',
      demo: 'https://example.com',
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
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-text-light mb-2">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-text-muted text-lg">
              A selection of my best work showcasing modern development practices
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-blue-dark mt-6 rounded-full"></div>
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
                whileHover={{ y: -10 }}
                className="group h-full"
              >
                <div className="card h-full flex flex-col overflow-hidden">
                  {/* Image Container with Carousel */}
                  <div style={{
                    position: 'relative',
                    backgroundColor: '#111232',
                    height: '288px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {/* Images Wrapper */}
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      overflow: 'hidden',
                    }}>
                    <motion.div
                      key={getImageIndex(idx)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        src={project.images[getImageIndex(idx)]}
                        alt={`${project.title} - Screenshot ${getImageIndex(idx) + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </motion.div>

                    {/* Navigation Buttons - Show only if multiple images */}
                    {project.images.length > 1 && (
                      <>
                        {/* Previous Button */}
                        <motion.button
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => prevImage(idx, project.images.length)}
                          style={{
                            position: 'absolute',
                            left: '16px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 20,
                            padding: '10px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.2), rgba(0, 150, 200, 0.15))',
                            border: '2px solid rgba(0, 217, 255, 0.4)',
                            color: '#00d9ff',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 217, 255, 0.4), rgba(0, 150, 200, 0.3))';
                            e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.8)';
                            e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 217, 255, 0.6), inset 0 0 20px rgba(0, 217, 255, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 217, 255, 0.2), rgba(0, 150, 200, 0.15))';
                            e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.4)';
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.2)';
                          }}
                          aria-label="Previous image"
                        >
                          <FiChevronLeft size={24} />
                        </motion.button>

                        {/* Next Button */}
                        <motion.button
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => nextImage(idx, project.images.length)}
                          style={{
                            position: 'absolute',
                            right: '16px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 20,
                            padding: '10px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.2), rgba(0, 150, 200, 0.15))',
                            border: '2px solid rgba(0, 217, 255, 0.4)',
                            color: '#00d9ff',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 217, 255, 0.4), rgba(0, 150, 200, 0.3))';
                            e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.8)';
                            e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 217, 255, 0.6), inset 0 0 20px rgba(0, 217, 255, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 217, 255, 0.2), rgba(0, 150, 200, 0.15))';
                            e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.4)';
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.2)';
                          }}
                          aria-label="Next image"
                        >
                          <FiChevronRight size={24} />
                        </motion.button>

                        {/* Image Indicators */}
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 20,
                            display: 'flex',
                            gap: '10px',
                            padding: '8px 12px',
                            background: 'rgba(10, 14, 39, 0.5)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '20px',
                            border: '1px solid rgba(0, 217, 255, 0.2)',
                          }}
                        >
                          {project.images.map((_, imgIdx) => (
                            <motion.button
                              key={imgIdx}
                              onClick={() => goToImage(idx, imgIdx)}
                              whileHover={{ scale: 1.4 }}
                              whileTap={{ scale: 0.8 }}
                              style={{
                                width: getImageIndex(idx) === imgIdx ? '28px' : '10px',
                                height: '10px',
                                borderRadius: '50%',
                                background: getImageIndex(idx) === imgIdx 
                                  ? 'linear-gradient(135deg, #00d9ff, #00a8cc)' 
                                  : 'rgba(0, 217, 255, 0.3)',
                                border: getImageIndex(idx) === imgIdx ? '2px solid #00d9ff' : '1px solid rgba(0, 217, 255, 0.5)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: getImageIndex(idx) === imgIdx ? '0 0 15px rgba(0, 217, 255, 0.5)' : 'none',
                              }}
                              onMouseEnter={(e) => {
                                if (getImageIndex(idx) !== imgIdx) {
                                  e.currentTarget.style.background = 'rgba(0, 217, 255, 0.6)';
                                  e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 217, 255, 0.3)';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (getImageIndex(idx) !== imgIdx) {
                                  e.currentTarget.style.background = 'rgba(0, 217, 255, 0.3)';
                                  e.currentTarget.style.boxShadow = 'none';
                                }
                              }}
                              aria-label={`Go to image ${imgIdx + 1}`}
                            />
                          ))}
                        </div>

                        {/* Image Counter */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '16px',
                            right: '16px',
                            zIndex: 20,
                            padding: '6px 14px',
                            borderRadius: '25px',
                            background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(10, 14, 39, 0.7))',
                            border: '1.5px solid rgba(0, 217, 255, 0.3)',
                            backdropFilter: 'blur(10px)',
                            color: '#00d9ff',
                            fontSize: '12px',
                            fontWeight: '600',
                            letterSpacing: '0.5px',
                            boxShadow: '0 4px 15px rgba(0, 217, 255, 0.1)',
                          }}
                        >
                          {getImageIndex(idx) + 1} / {project.images.length}
                        </div>
                      </>
                    )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-text-light mb-3 group-hover:text-neon-blue transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies - Icons */}
                    <div className="mb-6 pb-6 border-b border-neon-blue/10">
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.2, y: -5 }}
                            className="p-2 rounded-lg bg-neon-blue/10 border border-neon-blue/30 hover:border-neon-blue/60 hover:bg-neon-blue/20 transition-all text-neon-blue cursor-default"
                            title={tech}
                          >
                            <div className="w-6 h-6 flex items-center justify-center text-lg">
                              {getTechIcon(tech)}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4">
                      {project.github && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-neon-blue/10 text-neon-blue rounded-lg hover:bg-neon-blue/20 border border-neon-blue/30 hover:border-neon-blue/60 transition-all font-semibold"
                        >
                          <FiGithub size={18} /> Code
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-blue-dark to-neon-blue text-white rounded-lg hover:shadow-lg transition-all font-semibold"
                        >
                          <FiExternalLink size={18} /> Demo
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
