import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

/**
 * RoleGuard - Renders children only if the current user has an allowed role.
 *
 * @param {{ allowed: string[] }} props
 */
function RoleGuard({ allowed = [] }) {
  const { hasAnyRole, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!hasAnyRole(allowed)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

export default RoleGuard;
