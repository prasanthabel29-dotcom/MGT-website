import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 404 Not Found Page
 */
function NotFoundPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '2rem',
      background: 'var(--color-bg)'
    }}>
      <h1 style={{ fontSize: '6rem', fontWeight: 'bold', color: 'var(--color-primary)', margin: 0 }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Page Not Found</h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '400px' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        style={{
          padding: '0.75rem 1.5rem',
          background: 'var(--color-primary)',
          color: 'white',
          borderRadius: 'var(--radius-md)',
          textDecoration: 'none',
          fontWeight: '500'
        }}
      >
        Go to Dashboard
      </Link>
    </div>
  );
}

export default NotFoundPage;
