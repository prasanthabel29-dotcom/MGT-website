import React from 'react';

/**
 * Empty stub for the Admin-only Users page.
 */
function UsersPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>User Management</h1>
      <p style={{ color: 'var(--color-text-muted)' }}>
        This page is protected by the RoleGuard. Only users with the <strong>ADMIN</strong> role can see this.
      </p>
      
      <div style={{ marginTop: '2rem', padding: '1rem', border: '1px dashed var(--color-border)', borderRadius: '8px' }}>
        <p>Implementation pending...</p>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--color-text-muted)' }}>
          <li>Data table with pagination</li>
          <li>Search & filtering</li>
          <li>Edit user role modal</li>
          <li>Delete user confirmation</li>
        </ul>
      </div>
    </div>
  );
}

export default UsersPage;
