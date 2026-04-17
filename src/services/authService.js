import apiClient from './apiClient';

// Helper to simulate network delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const authService = {
  /**
   * Authenticates a user with email and password.
   * Mocked for local testing.
   */
  login: async (credentials) => {
    await delay(1000); // simulate network request
    if (credentials.email === 'admin@company.com') {
      return {
        user: { id: 1, name: 'Admin User', email: 'admin@company.com', role: 'ADMIN' },
        token: 'mock-jwt-token-abc123',
        refreshToken: 'mock-refresh-token-xyz789'
      };
    }
    throw { response: { data: { message: 'For testing, please use email: admin@company.com' } } };
  },

  /**
   * Registers a new user account.
   */
  register: async (data) => {
    await delay(1000);
    return {
      user: { id: 2, name: data.name, email: data.email, role: 'USER' },
      token: 'mock-jwt-token-new',
      refreshToken: 'mock-refresh-token-new'
    };
  },

  /**
   * Refreshes the access token using the refresh token.
   */
  refreshToken: async (refreshToken) => {
    await delay(500);
    return { token: 'mock-new-jwt-token' };
  },

  /**
   * Logs the current user out on the server.
   */
  logout: async () => {
    await delay(500);
    return true;
  },

  /**
   * Fetches the currently authenticated user's profile.
   */
  getMe: async () => {
    await delay(500);
    return { id: 1, name: 'Admin User', email: 'admin@company.com', role: 'ADMIN' };
  },

  forgotPassword: async () => delay(800),
  resetPassword: async () => delay(800),
};
