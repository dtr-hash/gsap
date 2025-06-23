import React from 'react';
import { motion } from 'framer-motion';

const HeaderSection: React.FC = () => {
  return (
    <motion.section
      id="header"
      className="full-vh"
      initial={{}}
    >
      <motion.h1
        className="centered-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        Im here
      </motion.h1>
    </motion.section>
  );
};

export default HeaderSection; 