import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectAuthToken } from '../store/slices/authSlice';

/**
 * ProtectedRoute - Redirects unauthenticated users to /login.
 * Preserves the intended location so users can be redirected back after login.
 */
function ProtectedRoute() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const token = useSelector(selectAuthToken);
  const location = useLocation();

  const isAuthed = isAuthenticated || !!token;

  if (!isAuthed) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
