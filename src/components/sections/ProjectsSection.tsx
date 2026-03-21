import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
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
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
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

  const projectsData: Project[] = [
    {
      title: 'Medical Appointment Platform',
      description:
        'Full-stack medical platform allowing patients to explore services and book appointments online with appointment management and automatic email notifications.',
      technologies: ['React', 'Laravel', 'MySQL', 'Stripe', 'Email Service'],
      image: 'https://via.placeholder.com/600x350?text=Medical+Appointment',
      featured: true,
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Money Mate – Budget App',
      description:
        'Application to manage personal finances with expense tracking, category system and budget calculations.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'TailwindCSS'],
      image: 'https://via.placeholder.com/600x350?text=Money+Mate',
      featured: true,
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'SaaS Data Management - Yes to the Net',
      description:
        'Internship project building a SaaS platform used to centralize, secure and organize client data and documents.',
      technologies: ['React', 'Laravel', 'PostgreSQL', 'AWS', 'Docker'],
      image: 'https://via.placeholder.com/600x350?text=SaaS+Platform',
      featured: true,
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'IBK Bakery International Website',
      description:
        'Website presenting services and products of an international bakery with modern UI and online ordering capabilities.',
      technologies: ['React', 'JavaScript', 'TailwindCSS', 'Firebase'],
      image: 'https://via.placeholder.com/600x350?text=IBK+Bakery',
      featured: false,
      github: 'https://github.com',
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
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-dark-card h-72 flex-shrink-0">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
