import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiLayout,
} from 'react-icons/fi';

interface Skill {
  name: string;
  proficiency: number;
  level: 'Expert' | 'Advanced' | 'Intermediate';
}

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: Skill[];
  description?: string;
}

const SkillsSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const skillsData: SkillCategory[] = [
    {
      category: 'Frontend Development',
      icon: <FiLayout size={24} />,
      description: 'UI/UX & Interactive Experiences',
      skills: [
        { name: 'React.js', proficiency: 95, level: 'Expert' },
        { name: 'JavaScript', proficiency: 98, level: 'Expert' },
        { name: 'HTML5 & CSS3', proficiency: 96, level: 'Expert' },
        { name: 'Responsive Design', proficiency: 93, level: 'Advanced' },
        { name: 'Axios', proficiency: 93, level: 'Advanced' },
        { name: 'Framer Motion', proficiency: 93, level: 'Advanced' },

      ],
    },
    {
      category: 'Backend Development',
      icon: <FiCode size={24} />,
      description: 'Server-side & API Solutions',
      skills: [
        { name: 'Laravel', proficiency: 94, level: 'Expert' },
        { name: 'PHP', proficiency: 93, level: 'Expert' },
        { name: 'Java', proficiency: 85, level: 'Advanced' },
        { name: 'Python', proficiency: 88, level: 'Advanced' },
        { name: 'APIs', proficiency: 95, level: 'Expert' },
      ],
    },
    {
      category: 'Databases & Data',
      icon: <FiDatabase size={24} />,
      description: 'Data Architecture & Optimization',
      skills: [
        { name: 'MySQL', proficiency: 93, level: 'Expert' },
        { name: 'MongoDB', proficiency: 88, level: 'Advanced' },
        { name: 'SQL', proficiency: 88, level: 'Advanced' },
        { name: 'PlSQL', proficiency: 88, level: 'Advanced' },
        { name: 'SQL Optimization', proficiency: 89, level: 'Advanced' },
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: <FiGitBranch size={24} />,
      description: 'Version Control & Deployment',
      skills: [
        { name: 'Git & GitHub', proficiency: 96, level: 'Expert' },
        { name: 'Agile/Scrum', proficiency: 90, level: 'Advanced' },
        { name: 'Jira', proficiency: 88, level: 'Advanced' },
      ],
    },
  ];

  const getLevelColor = (level: 'Expert' | 'Advanced' | 'Intermediate') => {
    switch (level) {
      case 'Expert':
        return 'from-neon-blue to-cyan-400';
      case 'Advanced':
        return 'from-cyan-400 to-blue-400';
      case 'Intermediate':
        return 'from-blue-400 to-cyan-300';
    }
  };

  // Proficiency Bar Component
  const ProficiencyBar: React.FC<{ proficiency: number; level: 'Expert' | 'Advanced' | 'Intermediate' }> = ({ proficiency, level }) => (
    <div className="w-full h-2 bg-dark-bg/50 rounded-full overflow-hidden border border-neon-blue/10">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${proficiency}%` }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className={`h-full bg-gradient-to-r ${getLevelColor(level)} shadow-lg shadow-neon-blue/50 rounded-full`}
      />
    </div>
  );

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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
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

                    {/* Category Description */}
                    {category.description && (
                      <p className="text-sm text-text-muted/70 mb-8 italic">{category.description}</p>
                    )}

                    {/* Skills List */}
                    <div className="grid grid-cols-2 gap-6">
                      {category.skills.map((skill, skillIdx) => (
                        <motion.div
                          key={skillIdx}
                          custom={skillIdx}
                          variants={skillVariants}
                          initial="hidden"
                          animate={inView ? 'visible' : 'hidden'}
                          className="group/skill"
                        >
                          <span className="text-text-light font-semibold group-hover/skill:text-neon-blue transition-colors duration-300 block mb-3">
                            {skill.name}
                          </span>
                          <ProficiencyBar proficiency={skill.proficiency} level={skill.level} />
                        </motion.div>
                      ))}
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

export default SkillsSection;
