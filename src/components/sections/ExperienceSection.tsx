import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  highlights: string[];
}

const ExperienceSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const experiences: Experience[] = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Yes to the Net',
      period: 'May 2025 – June 2025',
      description: [
        'Worked on development of a SaaS platform for document and data management',
        'Participated in the design, implementation and delivery in an Agile team',
        'Collaborated with team members to deliver high-quality code and solutions',
      ],
      highlights: [
        'Built responsive UI components',
        'Implemented RESTful APIs',
        'Database optimization',
        'Agile workflow experience',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-dark-card relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-blue-dark mt-4"></div>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-effect p-8 rounded-lg border border-neon-blue/20 hover:border-neon-blue/40 transition-all"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-text-light">
                      {exp.role}
                    </h3>
                    <p className="text-neon-blue font-semibold text-lg">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-text-muted font-semibold mt-2 md:mt-0">
                    {exp.period}
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-neon-blue/20 to-transparent mb-6"></div>

                {/* Description */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-text-muted">
                        <span className="text-neon-blue flex-shrink-0">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highlights */}
                <div>
                  <p className="text-text-light font-semibold mb-3">Key Achievements</p>
                  <div className="flex flex-wrap gap-3">
                    {exp.highlights.map((highlight, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-blue-dark/20 text-neon-blue rounded-full text-sm border border-neon-blue/30 hover:border-neon-blue/60 transition-all"
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Timeline */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-3xl font-bold text-text-light mb-8">
              <span className="gradient-text">Education</span>
            </h3>

            <div className="space-y-6">
              {[
                {
                  title: 'Engineering Cycle – Computer Science & Networks',
                  school: 'Moroccan School of Engineering Sciences',
                  period: '2025 – Present',
                },
                {
                  title: 'Specialized Technician Diploma – Digital Development',
                  school: 'ISTA NTIC Syba',
                  period: '2023 – 2025',
                },
                {
                  title: 'Baccalaureate – Physical Sciences',
                  school: 'Lycée Cady Ayad',
                  period: '2023',
                },
              ].map((edu, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="glass-effect p-6 rounded-lg border border-neon-blue/20 hover:border-neon-blue/40 transition-all"
                >
                  <h4 className="text-xl font-bold text-text-light mb-2">
                    {edu.title}
                  </h4>
                  <p className="text-neon-blue font-semibold mb-2">{edu.school}</p>
                  <p className="text-text-muted text-sm">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
