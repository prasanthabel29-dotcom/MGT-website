/**
 * logger - A lightweight, leveled logging utility.
 *
 * Reads VITE_LOG_LEVEL from environment.
 * Levels: debug < info < warn < error
 * In production, only 'warn' and 'error' are emitted.
 */

const LOG_LEVELS = { debug: 0, info: 1, warn: 2, error: 3 };

const configuredLevel = import.meta.env.VITE_LOG_LEVEL || (import.meta.env.DEV ? 'debug' : 'warn');
const minLevel = LOG_LEVELS[configuredLevel] ?? 1;

const isProd = import.meta.env.PROD;

const format = (level, message, data) => {
  const ts = new Date().toISOString();
  return data !== undefined
    ? [`[${ts}] [${level.toUpperCase()}] ${message}`, data]
    : [`[${ts}] [${level.toUpperCase()}] ${message}`];
};

const logger = {
  debug(message, data) {
    if (isProd || LOG_LEVELS.debug < minLevel) return;
    console.debug(...format('debug', message, data));
  },
  info(message, data) {
    if (LOG_LEVELS.info < minLevel) return;
    console.info(...format('info', message, data));
  },
  warn(message, data) {
    if (LOG_LEVELS.warn < minLevel) return;
    console.warn(...format('warn', message, data));
  },
  error(message, data) {
    console.error(...format('error', message, data));
    // TODO: Send to Sentry / Datadog in production
    // if (isProd) Sentry.captureException(data instanceof Error ? data : new Error(message));
  },
};

export default logger;
