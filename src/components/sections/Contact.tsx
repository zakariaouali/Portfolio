import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const ContactSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to a backend or email service
    console.log('Form submitted:', formState);
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

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

  const contactInfo = [
    {
      icon: <FiMail size={32} />,
      title: 'Email',
      value: 'oualizakaria5@gmail.com',
      link: 'mailto:oualizakaria5@gmail.com',
    },
    {
      icon: <FiPhone size={32} />,
      title: 'Phone',
      value: '+212 605689787',
      link: 'tel:+212605689787',
    },
    {
      icon: <FiMapPin size={32} />,
      title: 'Location',
      value: 'Marrakech, Morocco',
      link: '#',
    },
  ];

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
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-text-muted mt-4 text-lg">
              Have a question or want to collaborate? Feel free to reach out!
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-blue-dark mt-4 mx-auto"></div>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                variants={itemVariants}
                href={info.link}
                whileHover={{ y: -5 }}
                className="glass-effect p-8 rounded-lg border border-neon-blue/20 hover:border-neon-blue/40 transition-all text-center"
              >
                <div className="text-neon-blue mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-text-light mb-2">
                  {info.title}
                </h3>
                <p className="text-text-muted hover:text-neon-blue transition-colors">
                  {info.value}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto glass-effect p-8 rounded-lg border border-neon-blue/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-text-light font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-neon-blue/30 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-neon-blue/60 transition-all"
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
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-neon-blue/30 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-neon-blue/60 transition-all"
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
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-bg border border-neon-blue/30 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-neon-blue/60 transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue-dark to-neon-blue text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                {submitted ? 'Message Sent!' : 'Send Message'} <FiSend size={18} />
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-neon-blue/10 border border-neon-blue/30 rounded-lg text-neon-blue text-center"
                >
                  Thank you! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mt-12 flex justify-center gap-6">
            {[
              { name: 'GitHub', url: 'https://github.com' },
              { name: 'LinkedIn', url: 'https://linkedin.com' },
              { name: 'Twitter', url: 'https://twitter.com' },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-6 py-2 border-2 border-neon-blue text-neon-blue rounded-lg hover:bg-neon-blue/10 transition-all"
              >
                {social.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
