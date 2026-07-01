import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../../services/authService';
import logger from '../../utils/logger';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await authService.login(credentials);
      localStorage.setItem(import.meta.env.VITE_AUTH_TOKEN_KEY || 'token', data.token);
      localStorage.setItem(import.meta.env.VITE_REFRESH_TOKEN_KEY || 'refreshToken', data.refreshToken);
      return data;
    } catch (error) {
      logger.error('Login failed', error);
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const refreshTokenThunk = createAsyncThunk(
  'auth/refreshToken',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { refreshToken } = getState().auth;
      const data = await authService.refreshToken(refreshToken);
      return data;
    } catch (error) {
      logger.error('Token refresh failed', error);
      return rejectWithValue(error.response?.data?.message || 'Token refresh failed');
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async () => {
    try {
      await authService.logout();
    } catch (error) {
      logger.warn('Logout API call failed, clearing local session anyway', error);
    } finally {
      localStorage.removeItem(import.meta.env.VITE_AUTH_TOKEN_KEY || 'token');
      localStorage.removeItem(import.meta.env.VITE_REFRESH_TOKEN_KEY || 'refreshToken');
    }
    return null;
  }
);
