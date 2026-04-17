import { useState, useCallback, useRef } from 'react';
import logger from '../utils/logger';

/**
 * useApi - Generic hook for calling async API functions with loading/error state.
 *
 * @param {Function} apiFn - The async API function to call
 * @returns {{
 *   data: any,
 *   isLoading: boolean,
 *   error: string|null,
 *   execute: (...args: any[]) => Promise<any>,
 *   reset: () => void,
 * }}
 *
 * @example
 * const { data, isLoading, error, execute } = useApi(userService.getAll);
 * useEffect(() => { execute(); }, []);
 */
export function useApi(apiFn) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);

  const execute = useCallback(
    async (...args) => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);
      setError(null);

      try {
        const result = await apiFn(...args);
        setData(result);
        return result;
      } catch (err) {
        if (err.name !== 'AbortError') {
          const msg = err.message || 'Something went wrong';
          setError(msg);
          logger.error('[useApi] Error', msg);
        }
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [apiFn]
  );

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setIsLoading(false);
  }, []);

  return { data, isLoading, error, execute, reset };
}
