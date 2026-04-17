import '@testing-library/jest-dom';

// Polyfills or mocks for browser APIs can go here
if (typeof window !== 'undefined') {
  // Mock matchMedia
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
}
