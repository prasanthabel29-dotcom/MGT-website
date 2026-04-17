import apiClient from '../../../services/apiClient';

export const dashboardService = {
  /** Fetches high-level KPI statistics for the dashboard. */
  getStats: () => apiClient.get('/dashboard/stats'),

  /** Fetches recent activity feed. */
  getActivityFeed: (params) => apiClient.get('/dashboard/activity', { params }),

  /** Fetches chart data for a given metric. */
  getChartData: (metric, range) => apiClient.get(`/dashboard/charts/${metric}`, { params: { range } }),
};
