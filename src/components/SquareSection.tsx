import React from 'react';
import { motion } from 'framer-motion';

const SquareSection: React.FC = () => {
  return (
    <motion.section className="flex-section full-vh" id="">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          className="square-box"
          key={i}
          initial={{ opacity: 0, rotate: -180 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: 'backOut', delay: i * 0.2 }}
        />
      ))}
    </motion.section>
  );
};

export default SquareSection; 