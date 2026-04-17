import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectCurrentUser,
  selectIsAuthenticated,
  selectAuthLoading,
  selectAuthError,
} from '../store/slices/authSlice';
import { loginThunk, logoutThunk } from '../store/thunks/authThunks';

/**
 * useAuth - Custom hook for authentication state and actions.
 *
 * @returns {{
 *   user: object|null,
 *   isAuthenticated: boolean,
 *   isLoading: boolean,
 *   error: string|null,
 *   login: (credentials: object) => Promise<void>,
 *   logout: () => Promise<void>,
 *   hasRole: (role: string) => boolean,
 * }}
 */
export function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const login = async (credentials) => {
    const result = await dispatch(loginThunk(credentials));
    if (loginThunk.fulfilled.match(result)) {
      navigate('/dashboard');
    }
  };

  const logout = async () => {
    await dispatch(logoutThunk());
    navigate('/login');
  };

  const hasRole = (role) => {
    if (!user) return false;
    return Array.isArray(user.roles)
      ? user.roles.includes(role)
      : user.role === role;
  };

  const hasAnyRole = (roles = []) => roles.some((r) => hasRole(r));

  const hasPermission = (permission) => {
    if (!user?.permissions) return false;
    return user.permissions.includes(permission);
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    hasRole,
    hasAnyRole,
    hasPermission,
  };
}
