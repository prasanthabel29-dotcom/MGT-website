import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: localStorage.getItem('theme') || 'light', // 'light' | 'dark'
  sidebarCollapsed: false,
  globalLoading: false,
  notification: null, // { type: 'success'|'error'|'info', message: '' }
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('theme', state.theme);
    },
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
    setGlobalLoading: (state, action) => {
      state.globalLoading = action.payload;
    },
    showNotification: (state, action) => {
      state.notification = action.payload; // { type, message }
    },
    clearNotification: (state) => {
      state.notification = null;
    },
  },
});

export const {
  toggleTheme,
  setTheme,
  toggleSidebar,
  setGlobalLoading,
  showNotification,
  clearNotification,
} = uiSlice.actions;

// Selectors
export const selectTheme = (state) => state.ui.theme;
export const selectSidebarCollapsed = (state) => state.ui.sidebarCollapsed;
export const selectGlobalLoading = (state) => state.ui.globalLoading;
export const selectNotification = (state) => state.ui.notification;

export default uiSlice.reducer;
