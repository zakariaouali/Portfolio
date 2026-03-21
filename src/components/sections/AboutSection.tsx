import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

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
    <section id="about" className="py-20 px-4 md:px-8 bg-dark-bg relative z-10">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-blue-dark mt-4"></div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-text-muted text-lg leading-relaxed">
                I'm an <span className="text-neon-blue font-semibold">Engineering student in Computer Science & Networks</span> with a
                specialized diploma in <span className="text-neon-blue font-semibold">Digital Development</span>.
              </p>

              <p className="text-text-muted text-lg leading-relaxed">
                My journey in tech has been driven by a passion for building innovative solutions
                that solve real-world problems. Through professional internships and personal projects,
                I've gained solid experience in full-stack development.
              </p>

              <p className="text-text-muted text-lg leading-relaxed">
                I specialize in creating scalable, maintainable code using modern technologies and
                best practices. I believe in continuous learning and staying updated with the latest
                industry trends.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-6 rounded-lg text-center"
                >
                  <p className="text-3xl font-bold text-neon-blue">10+</p>
                  <p className="text-text-muted">Projects Completed</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-6 rounded-lg text-center"
                >
                  <p className="text-3xl font-bold text-neon-blue">2+</p>
                  <p className="text-text-muted">Years Experience</p>
                </motion.div>
              </div>
            </div>

            {/* Right side - Tech Stack Preview */}
            <motion.div
              variants={itemVariants}
              className="glass-effect p-8 rounded-lg border border-neon-blue/20"
            >
              <h3 className="text-2xl font-bold text-text-light mb-6">Quick Facts</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-neon-blue font-semibold mb-2">Education</p>
                  <p className="text-text-muted">
                    Engineering Cycle - Computer Science & Networks
                  </p>
                  <p className="text-text-muted text-sm">Moroccan School of Engineering Sciences (2025 - Present)</p>
                </div>

                <div className="border-t border-neon-blue/20 pt-4">
                  <p className="text-neon-blue font-semibold mb-2">Experience</p>
                  <p className="text-text-muted">
                    Full Stack Developer Intern at Yes to the Net
                  </p>
                  <p className="text-text-muted text-sm">May 2025 - June 2025</p>
                </div>

                <div className="border-t border-neon-blue/20 pt-4">
                  <p className="text-neon-blue font-semibold mb-2">Location</p>
                  <p className="text-text-muted">Marrakech, Morocco</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
