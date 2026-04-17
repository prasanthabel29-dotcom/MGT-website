import axios from 'axios';
import { APP_CONFIG } from '../config/appConfig';
import logger from '../utils/logger';

let store;
export const injectStore = (_store) => {
  store = _store;
};

const apiClient = axios.create({
  baseURL: APP_CONFIG.API_BASE_URL,
  timeout: APP_CONFIG.API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// ─── Request Interceptor ─────────────────────────────────────────────────────
apiClient.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    logger.debug(`[API] ${config.method?.toUpperCase()} ${config.url}`, config.params || {});
    return config;
  },
  (error) => {
    logger.error('[API] Request error', error);
    return Promise.reject(error);
  }
);

// ─── Response Interceptor ────────────────────────────────────────────────────
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

apiClient.interceptors.response.use(
  (response) => {
    logger.debug(`[API] Response ${response.status}`, response.config.url);
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return apiClient(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const { refreshTokenThunk } = await import('../store/thunks/authThunks');
        const result = await store.dispatch(refreshTokenThunk());
        const newToken = result.payload?.token;
        processQueue(null, newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        store.dispatch({ type: 'auth/clearAuth' });
        window.location.href = '/login';
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    const message =
      error.response?.data?.message || error.message || 'An unexpected error occurred';
    logger.error(`[API] Error ${error.response?.status}`, message);
    return Promise.reject({ ...error, message });
  }
);

export default apiClient;
