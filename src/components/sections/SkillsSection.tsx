import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiLayout,
} from 'react-icons/fi';

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillsSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const skillsData: SkillCategory[] = [
    {
      category: 'Frontend Development',
      icon: <FiLayout size={24} />,
      skills: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS', 'Responsive Design'],
    },
    {
      category: 'Backend Development',
      icon: <FiCode size={24} />,
      skills: ['Laravel', 'PHP', 'Java', 'Python', 'RESTful APIs', 'Microservices', 'Server Architecture'],
    },
    {
      category: 'Databases & Data',
      icon: <FiDatabase size={24} />,
      skills: ['MySQL', 'MongoDB', 'Database Design', 'SQL Optimization', 'Data Modeling'],
    },
    {
      category: 'Tools & Version Control',
      icon: <FiGitBranch size={24} />,
      skills: ['Git', 'GitHub', 'GitLab', 'CI/CD Pipelines', 'Docker', 'Agile/Scrum', 'Jira'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: i * 0.04,
      },
    }),
  };

  return (
    <section id="skills" className="py-28 px-4 md:px-8 bg-dark-card relative z-10">
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
              <p className="text-neon-blue text-sm font-semibold tracking-widest uppercase">Technical Proficiency</p>
              <h2 className="text-5xl md:text-6xl font-bold text-text-light leading-tight">
                Skills & <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-text-muted text-lg max-w-3xl leading-relaxed pt-2">
                A comprehensive overview of the technologies and methodologies I've mastered to deliver robust, scalable solutions.
              </p>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-neon-blue via-cyan-400 to-transparent mt-8 rounded-full"></div>
          </motion.div>

          {/* Skills Categories */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          >
            {skillsData.map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group"
              >
                <div className="relative">
                  {/* Subtle background gradient on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-neon-blue/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  <div className="border border-neon-blue/15 rounded-xl p-8 bg-dark-bg/50 backdrop-blur-xl transition-all duration-500 group-hover:border-neon-blue/30 group-hover:bg-dark-bg/70">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-10">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-neon-blue/20 to-cyan-500/10 text-neon-blue transition-all duration-300 group-hover:scale-110">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-text-light tracking-tight">{category.category}</h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIdx) => (
                        <motion.div
                          key={skillIdx}
                          custom={skillIdx}
                          variants={skillVariants}
                          initial="hidden"
                          animate={inView ? 'visible' : 'hidden'}
                          className="flex items-center gap-3 group/skill"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-neon-blue to-cyan-400 group-hover/skill:scale-125 transition-transform duration-300"></div>
                          <span className="text-text-muted group-hover/skill:text-text-light transition-colors duration-300 font-medium text-base">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent mb-20"></div>

          {/* Additional Competencies */}
          <motion.div variants={itemVariants}>
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-text-light mb-2">Professional Competencies</h3>
              <p className="text-text-muted text-base">Core competencies and additional expertise</p>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
            >
              {[
                'System Design',
                'Problem Solving',
                'Code Quality',
                'Performance Optimization',
                'Testing & QA',
                'Clean Code',
                'Team Leadership',
                'Agile/Scrum',
                'API Design',
                'Security Best Practices',
                'Scalable Architecture',
                'Technical Documentation',
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={skillVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  whileHover={{ y: -2 }}
                  className="group/competency"
                >
                  <div className="border border-neon-blue/15 rounded-lg p-5 bg-dark-bg/40 backdrop-blur-sm hover:bg-dark-bg/60 hover:border-neon-blue/30 transition-all duration-300 flex items-center justify-center text-center h-full">
                    <p className="text-text-muted group-hover/competency:text-neon-blue transition-colors duration-300 font-medium text-sm">
                      {skill}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
