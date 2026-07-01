import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { loginSchema } from '../../utils/validators';
import { yupResolver } from '../../utils/yupResolver';
import styles from './LoginPage.module.scss';

function LoginPage() {
  const { login, isLoading, error } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data) => login(data);

  return (
    <div className={styles.form}>
      <h2>Sign In</h2>
      <p className={styles.subtitle}>Welcome back! Please enter your credentials.</p>

      {error && <div className={styles.alert}>{error}</div>}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            {...register('email')}
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            {...register('password')}
            aria-invalid={!!errors.password}
          />
          {errors.password && <span className={styles.error}>{errors.password.message}</span>}
        </div>

        <div className={styles.forgot}>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <button type="submit" disabled={isLoading} className={styles.submit}>
          {isLoading ? 'Signing in…' : 'Sign In'}
        </button>
      </form>

      <p className={styles.footer}>
        Don&apos;t have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default LoginPage;
