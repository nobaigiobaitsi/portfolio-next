'use client';

import { motion } from 'framer-motion';

export default function AnimatedSection({ children, className = "" }) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.section>
  );
}