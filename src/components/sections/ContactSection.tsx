import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const ContactSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open email client
    const mailtoLink = `mailto:oualizakaria5@gmail.com?subject=${encodeURIComponent(
      `Contact from ${formData.name}`
    )}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-dark-bg relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-text-muted mt-4 text-lg">
              Have a project in mind? Let's collaborate and build something amazing together.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-blue-dark mt-4 mx-auto"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-text-light mb-8">
                Contact Information
              </h3>

              {/* Email */}
              <motion.a
                whileHover={{ x: 10 }}
                href="mailto:oualizakaria5@gmail.com"
                className="flex gap-4 items-start p-6 glass-effect rounded-lg border border-neon-blue/20 hover:border-neon-blue/40 transition-all group"
              >
                <div className="text-neon-blue mt-1 group-hover:scale-110 transition-transform">
                  <FiMail size={24} />
                </div>
                <div>
                  <p className="text-text-light font-semibold">Email</p>
                  <p className="text-text-muted group-hover:text-neon-blue transition-colors">
                    oualizakaria5@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                whileHover={{ x: 10 }}
                href="tel:+212605689787"
                className="flex gap-4 items-start p-6 glass-effect rounded-lg border border-neon-blue/20 hover:border-neon-blue/40 transition-all group"
              >
                <div className="text-neon-blue mt-1 group-hover:scale-110 transition-transform">
                  <FiPhone size={24} />
                </div>
                <div>
                  <p className="text-text-light font-semibold">Phone</p>
                  <p className="text-text-muted group-hover:text-neon-blue transition-colors">
                    +212 605689787
                  </p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex gap-4 items-start p-6 glass-effect rounded-lg border border-neon-blue/20 hover:border-neon-blue/40 transition-all group"
              >
                <div className="text-neon-blue mt-1 group-hover:scale-110 transition-transform">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <p className="text-text-light font-semibold">Location</p>
                  <p className="text-text-muted">Marrakech, Morocco</p>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-text-light font-semibold mb-4">Connect With Me</p>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/zakariaouali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass-effect rounded-lg border border-neon-blue/20 text-neon-blue hover:border-neon-blue/40 hover:bg-neon-blue/10 transition-all"
                  >
                    <FiGithub size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/zakaria-ait-ahmad-ouali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass-effect rounded-lg border border-neon-blue/20 text-neon-blue hover:border-neon-blue/40 hover:bg-neon-blue/10 transition-all"
                  >
                    <FiLinkedin size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="glass-effect p-8 rounded-lg border border-neon-blue/20 space-y-6"
            >
              {/* Name Input */}
              <div>
                <label className="block text-text-light font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-neon-blue/20 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-text-light font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-neon-blue/20 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-text-light font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-bg border border-neon-blue/20 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue-dark to-neon-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                {submitted ? 'Opening email client...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
