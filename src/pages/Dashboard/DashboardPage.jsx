import React from 'react';
import { useDashboard } from '@features/dashboard/hooks/useDashboard';
import styles from './DashboardPage.module.scss';

function StatCard({ label, value, trend }) {
  return (
    <div className={styles.card}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value ?? '—'}</span>
      {trend !== undefined && (
        <span className={`${styles.trend} ${trend >= 0 ? styles.up : styles.down}`}>
          {trend >= 0 ? '▲' : '▼'} {Math.abs(trend)}%
        </span>
      )}
    </div>
  );
}

function DashboardPage() {
  const { stats, isLoading, error, refresh } = useDashboard();

  if (isLoading) return <div className={styles.loading}>Loading dashboard…</div>;
  if (error) return (
    <div className={styles.error}>
      <p>Failed to load: {error}</p>
      <button onClick={refresh}>Retry</button>
    </div>
  );

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Dashboard</h1>
        <button onClick={refresh} className={styles.refreshBtn}>↻ Refresh</button>
      </div>

      <div className={styles.grid}>
        <StatCard label="Total Users"   value={stats?.totalUsers}   trend={stats?.usersTrend} />
        <StatCard label="Active Sessions" value={stats?.activeSessions} trend={stats?.sessionsTrend} />
        <StatCard label="Revenue"       value={`$${stats?.revenue?.toLocaleString() ?? 0}`} trend={stats?.revenueTrend} />
        <StatCard label="Open Tickets"  value={stats?.openTickets}  trend={stats?.ticketsTrend} />
      </div>
    </div>
  );
}

export default DashboardPage;
