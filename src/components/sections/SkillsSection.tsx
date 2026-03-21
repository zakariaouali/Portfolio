import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiLayout,
  FiCpu,
  FiUsers,
  FiShield,
  FiZap,
} from 'react-icons/fi';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiPython,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

interface SkillWithIcon {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  color: string;
  skills: SkillWithIcon[];
}

interface CoreSkill {
  name: string;
  level: number;
  label: string;
}

interface Competency {
  label: string;
  icon: React.ReactNode;
}

const SkillsSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillsData: SkillCategory[] = [
    {
      category: 'Frontend Development',
      icon: <FiLayout size={20} />,
      color: '#00d9ff',
      skills: [
        { name: 'React.js', icon: <SiReact /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'HTML5', icon: <SiHtml5 /> },
        { name: 'CSS3', icon: <SiCss /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      ],
    },
    {
      category: 'Backend Development',
      icon: <FiCode size={20} />,
      color: '#00d9ff',
      skills: [
        { name: 'Laravel', icon: <SiLaravel /> },
        { name: 'PHP', icon: <SiPhp /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'RESTful APIs', icon: <FiCode size={14} /> },
        { name: 'Microservices', icon: <FiCpu size={14} /> },
      ],
    },
    {
      category: 'Databases & Data',
      icon: <FiDatabase size={20} />,
      color: '#00d9ff',
      skills: [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Database Design', icon: <FiDatabase size={14} /> },
        { name: 'SQL Optimization', icon: <FiZap size={14} /> },
        { name: 'Data Modeling', icon: <FiCpu size={14} /> },
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: <FiGitBranch size={20} />,
      color: '#00d9ff',
      skills: [
        { name: 'Git', icon: <SiGit /> },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'GitLab', icon: <SiGitlab /> },
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'CI/CD', icon: <FiZap size={14} /> },
        { name: 'Agile/Scrum', icon: <FiUsers size={14} /> },
      ],
    },
  ];

  const coreSkills: CoreSkill[] = [
    { name: 'React.js / TypeScript', level: 88, label: 'Advanced' },
    { name: 'Laravel / PHP', level: 85, label: 'Advanced' },
    { name: 'Database Design', level: 80, label: 'Proficient' },
    { name: 'RESTful API Design', level: 85, label: 'Advanced' },
    { name: 'Git & Version Control', level: 90, label: 'Expert' },
    { name: 'Docker / DevOps', level: 72, label: 'Proficient' },
  ];

  const competencies: Competency[] = [
    { label: 'System Design', icon: <FiCpu size={16} /> },
    { label: 'Problem Solving', icon: <FiZap size={16} /> },
    { label: 'Code Quality', icon: <FiShield size={16} /> },
    { label: 'Performance Optimization', icon: <FiZap size={16} /> },
    { label: 'Testing & QA', icon: <FiShield size={16} /> },
    { label: 'Clean Code', icon: <FiCode size={16} /> },
    { label: 'Team Leadership', icon: <FiUsers size={16} /> },
    { label: 'Agile / Scrum', icon: <FiUsers size={16} /> },
    { label: 'API Design', icon: <FiCode size={16} /> },
    { label: 'Security Practices', icon: <FiShield size={16} /> },
    { label: 'Scalable Architecture', icon: <FiCpu size={16} /> },
    { label: 'Tech Documentation', icon: <FiCode size={16} /> },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const stats = [
    { value: '3+', label: 'Years Coding' },
    { value: '10+', label: 'Projects Built' },
    { value: '4+', label: 'Frameworks' },
    { value: '100%', label: 'Passion' },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* ── Header ── */}
          <motion.div variants={itemVariants} className="skills-header">
            <span className="skills-eyebrow">Technical Arsenal</span>
            <h2 className="skills-title">
              Skills &amp; <span className="gradient-text">Expertise</span>
            </h2>
            <p className="skills-description">
              A curated overview of the technologies, frameworks, and methodologies I use to
              craft robust, scalable, and maintainable software solutions.
            </p>
            <div className="skills-accent-line" />
          </motion.div>

          {/* ── Stats Strip ── */}
          <motion.div variants={itemVariants} className="skills-stats">
            {stats.map((stat, idx) => (
              <div key={idx} className="skills-stat-item">
                <span className="skills-stat-value gradient-text">{stat.value}</span>
                <span className="skills-stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* ── Category Cards ── */}
          <motion.div variants={containerVariants} className="skills-categories-grid">
            {skillsData.map((category, idx) => (
              <motion.div key={idx} variants={cardVariants} className="skill-category-card">
                {/* Card top accent */}
                <div className="skill-card-accent" />

                {/* Card Header */}
                <div className="skill-card-header">
                  <div className="skill-card-icon-wrap">
                    {category.icon}
                  </div>
                  <h3 className="skill-card-title">{category.category}</h3>
                </div>

                {/* Divider */}
                <div className="skill-card-divider" />

                {/* Skill Pills */}
                <div className="skill-pills-grid">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      className="skill-pill"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.18 }}
                    >
                      <span className="skill-pill-icon">{skill.icon}</span>
                      <span className="skill-pill-name">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Divider ── */}
          <motion.div variants={itemVariants} className="skills-section-divider" />

          {/* ── Core Proficiencies ── */}
          <motion.div variants={itemVariants} className="skills-proficiencies">
            <div className="skills-sub-header">
              <h3 className="skills-sub-title">Core Proficiencies</h3>
              <p className="skills-sub-desc">Skill levels based on project experience and continuous learning</p>
            </div>
            <div className="proficiency-list">
              {coreSkills.map((skill, idx) => (
                <div key={idx} className="proficiency-item">
                  <div className="proficiency-meta">
                    <span className="proficiency-name">{skill.name}</span>
                    <span className="proficiency-label-badge">{skill.label}</span>
                  </div>
                  <div className="proficiency-bar-track">
                    <motion.div
                      className="proficiency-bar-fill"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.1, delay: idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                    <span className="proficiency-percentage">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Divider ── */}
          <motion.div variants={itemVariants} className="skills-section-divider" />

          {/* ── Professional Competencies ── */}
          <motion.div variants={itemVariants}>
            <div className="skills-sub-header">
              <h3 className="skills-sub-title">Professional Competencies</h3>
              <p className="skills-sub-desc">Core soft skills and methodologies I bring to every project</p>
            </div>
            <motion.div variants={containerVariants} className="competencies-list">
              {competencies.map((comp, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="competency-card"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="competency-icon">{comp.icon}</span>
                  <span className="competency-label">{comp.label}</span>
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
