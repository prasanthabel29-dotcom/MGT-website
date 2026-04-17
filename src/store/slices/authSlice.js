import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, refreshTokenThunk, logoutThunk } from '../thunks/authThunks';

const initialState = {
  user: null,
  token: localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN_KEY) || null,
  refreshToken: localStorage.getItem(import.meta.env.VITE_REFRESH_TOKEN_KEY) || null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token, refreshToken } = action.payload;
      state.user = user;
      state.token = token;
      state.refreshToken = refreshToken;
      state.isAuthenticated = true;
      localStorage.setItem(import.meta.env.VITE_AUTH_TOKEN_KEY, token);
      localStorage.setItem(import.meta.env.VITE_REFRESH_TOKEN_KEY, refreshToken);
    },
    clearAuth: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem(import.meta.env.VITE_AUTH_TOKEN_KEY);
      localStorage.removeItem(import.meta.env.VITE_REFRESH_TOKEN_KEY);
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Login
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isAuthenticated = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Refresh Token
    builder
      .addCase(refreshTokenThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
      })
      .addCase(refreshTokenThunk.rejected, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      });

    // Logout
    builder.addCase(logoutThunk.fulfilled, (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    });
  },
});

export const { setCredentials, clearAuth, setUser } = authSlice.actions;

// Selectors
export const selectCurrentUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthToken = (state) => state.auth.token;
export const selectAuthLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;
