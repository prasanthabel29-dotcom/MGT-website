import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSidebarCollapsed } from '../../store/slices/uiSlice';
import { useAuth } from '../../hooks/useAuth';
import { ROLES } from '../../constants/roles';
import styles from './Sidebar.module.scss';

function Sidebar() {
  const collapsed = useSelector(selectSidebarCollapsed);
  const { hasRole } = useAuth();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    // Admin only route
    ...(hasRole(ROLES.ADMIN) ? [{ path: '/users', label: 'Users', icon: '👥' }] : []),
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.logo}>
        <span className={styles.icon}>🏢</span>
        {!collapsed && <span className={styles.text}>EnterpriseApp</span>}
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            title={collapsed ? item.label : undefined}
          >
            <span className={styles.linkIcon}>{item.icon}</span>
            {!collapsed && <span className={styles.linkLabel}>{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
