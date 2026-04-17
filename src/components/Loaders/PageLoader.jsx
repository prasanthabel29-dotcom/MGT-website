function PageLoader() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontSize: '1.2rem',
      color: 'var(--color-primary)',
    }}>
      <div className="spinner" />
      Loading…
    </div>
  );
}

export default PageLoader;
