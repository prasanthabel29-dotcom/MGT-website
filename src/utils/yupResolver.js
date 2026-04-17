/**
 * Minimal yupResolver adapter for react-hook-form.
 * Avoids needing the @hookform/resolvers package.
 *
 * Usage:
 *   import { yupResolver } from '@/utils/validators';
 *   const { register } = useForm({ resolver: yupResolver(schema) });
 */
export function yupResolver(schema) {
  return async (data) => {
    try {
      const values = await schema.validate(data, { abortEarly: false });
      return { values, errors: {} };
    } catch (err) {
      const errors = err.inner.reduce((acc, e) => {
        if (e.path) {
          acc[e.path] = { type: 'validation', message: e.message };
        }
        return acc;
      }, {});
      return { values: {}, errors };
    }
  };
}
