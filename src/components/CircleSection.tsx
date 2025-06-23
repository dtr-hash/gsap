import React from 'react';
import { motion } from 'framer-motion';

const CircleSection: React.FC = () => {
  return (
    <motion.section className="flex-section full-vh" id="">
      {[0, 1, 2].map((i) => (
        <motion.div
          className="circle-box"
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.15 }}
        />
      ))}
    </motion.section>
  );
};

export default CircleSection; 