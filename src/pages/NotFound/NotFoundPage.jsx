import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

/**
 * 404 Not Found Page
 */
function NotFoundPage() {
  return (
    <motion.div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '2rem',
        background: 'var(--color-bg)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h1
        style={{
          fontSize: 'clamp(3.25rem, 14vw, 6rem)',
          fontWeight: 'bold',
          color: 'var(--color-primary)',
          margin: 0,
          lineHeight: 1,
        }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      >
        404
      </motion.h1>
      <motion.h2
        style={{
          fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
          marginBottom: '1rem',
          color: 'var(--color-text)',
          padding: '0 12px',
          lineHeight: 1.3,
        }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.35 }}
      >
        Page Not Found
      </motion.h2>
      <motion.p
        style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '400px' }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16, duration: 0.35 }}
      >
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </motion.p>
      <MotionLink
        to="/"
        style={{
          padding: '0.75rem 1.5rem',
          background: 'var(--color-primary)',
          color: 'white',
          borderRadius: 'var(--radius-md)',
          textDecoration: 'none',
          fontWeight: '500'
        }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.35 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
      >
        Go to Dashboard
      </MotionLink>
    </motion.div>
  );
}

export default NotFoundPage;
