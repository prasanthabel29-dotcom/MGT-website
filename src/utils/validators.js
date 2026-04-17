import * as yup from 'yup';

// ─── Common Field Schemas ────────────────────────────────────────────────────

export const emailSchema = yup
  .string()
  .email('Enter a valid email address')
  .required('Email is required');

export const passwordSchema = yup
  .string()
  .min(8, 'Password must be at least 8 characters')
  .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
  .matches(/[0-9]/, 'Must contain at least one number')
  .required('Password is required');

export const requiredString = (label = 'Field') =>
  yup.string().trim().required(`${label} is required`);

// ─── Form Schemas ────────────────────────────────────────────────────────────

export const loginSchema = yup.object({
  email: emailSchema,
  password: yup.string().required('Password is required'),
});

export const registerSchema = yup.object({
  name: requiredString('Name').min(2, 'Name must be at least 2 characters'),
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

export const forgotPasswordSchema = yup.object({
  email: emailSchema,
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Resolves a yup schema for use with react-hook-form's resolver.
 * Usage: resolver: yupResolver(loginSchema)
 */
export { yupResolver } from './yupResolver';
