import React from 'react';
import { motion } from 'framer-motion';

const RectSection: React.FC = () => {
  return (
    <motion.section className="flex-section full-vh" id="">
      <motion.div
        className="rect-box"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      <motion.div
        className="rect-box"
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      />
    </motion.section>
  );
};

export default RectSection; 