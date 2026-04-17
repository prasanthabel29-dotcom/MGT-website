/**
 * appConfig - Central app configuration derived from environment variables.
 * Import this instead of accessing import.meta.env directly in components.
 */
export const APP_CONFIG = {
  APP_NAME: import.meta.env.VITE_APP_NAME || 'EnterpriseApp',
  APP_VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',
  APP_ENV: import.meta.env.VITE_APP_ENV || 'development',

  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
  API_TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT || '30000', 10),

  AUTH_TOKEN_KEY: import.meta.env.VITE_AUTH_TOKEN_KEY || 'auth_token',
  REFRESH_TOKEN_KEY: import.meta.env.VITE_REFRESH_TOKEN_KEY || 'refresh_token',

  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,

  FEATURE_FLAGS: {
    DARK_MODE: import.meta.env.VITE_FF_DARK_MODE === 'true',
    ANALYTICS: import.meta.env.VITE_FF_ANALYTICS === 'true',
  },
};
