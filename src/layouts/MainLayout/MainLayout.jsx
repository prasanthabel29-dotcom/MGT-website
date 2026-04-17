import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import styles from './MainLayout.module.scss';

/**
 * MainLayout - Authenticated app shell with sidebar and top header.
 */
function MainLayout() {
  return (
    <div className={styles.shell}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
