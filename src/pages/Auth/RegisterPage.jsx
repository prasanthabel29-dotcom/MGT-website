import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';
import { registerSchema } from '../../utils/validators';
import { yupResolver } from '../../utils/yupResolver';
import { useApi } from '../../hooks/useApi';
import { useDispatch } from 'react-redux';
import { showNotification } from '../../store/slices/uiSlice';
import styles from './LoginPage.module.scss'; // Reusing Login styles for Auth forms

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { execute: registerUser, isLoading, error } = useApi(authService.register);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
      dispatch(showNotification({ type: 'success', message: 'Registration successful. Please log in.' }));
      navigate('/login');
    } catch (err) {
      // Error is handled by useApi and displayed below
    }
  };

  return (
    <div className={styles.form}>
      <h2>Create Account</h2>
      <p className={styles.subtitle}>Join us today! Fill in your details below.</p>

      {error && <div className={styles.alert}>{error}</div>}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.field}>
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" placeholder="John Doe" {...register('name')} aria-invalid={!!errors.name} />
          {errors.name && <span className={styles.error}>{errors.name.message}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@company.com" {...register('email')} aria-invalid={!!errors.email} />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="••••••••" {...register('password')} aria-invalid={!!errors.password} />
          {errors.password && <span className={styles.error}>{errors.password.message}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" type="password" placeholder="••••••••" {...register('confirmPassword')} aria-invalid={!!errors.confirmPassword} />
          {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword.message}</span>}
        </div>

        <button type="submit" disabled={isLoading} className={styles.submit} style={{ marginTop: '1rem' }}>
          {isLoading ? 'Creating account…' : 'Register'}
        </button>
      </form>

      <p className={styles.footer}>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
