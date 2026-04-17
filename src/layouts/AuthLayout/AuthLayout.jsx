import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.scss';

/**
 * AuthLayout - Centered card layout for login/register pages.
 */
function AuthLayout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <span>🏢</span>
          <h1>EnterpriseApp</h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
