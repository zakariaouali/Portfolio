import React from 'react';
import { motion } from 'framer-motion';
import './Loading.css';

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#0a0e27', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        {/* Animated Logo */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ fontSize: '48px', fontWeight: 'bold', background: 'linear-gradient(135deg, #00d9ff, #0099cc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Welcome
        </motion.div>

        {/* Loading Spinner */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {[0, 1, 2].map((idx) => (
            <motion.div
              key={idx}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: idx * 0.1,
              }}
              style={{ width: '12px', height: '12px', backgroundColor: '#00d9ff', borderRadius: '50%' }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ color: '#a0aec0', fontSize: '14px' }}
        >
          Loading portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loading;
