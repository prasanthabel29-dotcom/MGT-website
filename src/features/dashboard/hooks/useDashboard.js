import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDashboardStats,
  selectDashboardStats,
  selectDashboardLoading,
  selectDashboardError,
} from '../store/dashboardSlice';

/**
 * useDashboard - Encapsulates dashboard data fetching and state.
 *
 * @returns {{ stats, isLoading, error, refresh }}
 */
export function useDashboard() {
  const dispatch = useDispatch();
  const stats = useSelector(selectDashboardStats);
  const isLoading = useSelector(selectDashboardLoading);
  const error = useSelector(selectDashboardError);

  useEffect(() => {
    dispatch(fetchDashboardStats());
  }, [dispatch]);

  const refresh = () => dispatch(fetchDashboardStats());

  return { stats, isLoading, error, refresh };
}
