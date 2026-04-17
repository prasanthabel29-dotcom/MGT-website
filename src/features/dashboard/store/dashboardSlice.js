import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { dashboardService } from '../services/dashboardService';

// ─── Thunks ─────────────────────────────────────────────────────────────────

export const fetchDashboardStats = createAsyncThunk(
  'dashboard/fetchStats',
  async (_, { rejectWithValue }) => {
    try {
      return await dashboardService.getStats();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ─── Slice ──────────────────────────────────────────────────────────────────

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    stats: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearDashboard: (state) => {
      state.stats = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardStats.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDashboardStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stats = action.payload;
      })
      .addCase(fetchDashboardStats.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearDashboard } = dashboardSlice.actions;

// Selectors
export const selectDashboardStats = (state) => state.dashboard.stats;
export const selectDashboardLoading = (state) => state.dashboard.isLoading;
export const selectDashboardError = (state) => state.dashboard.error;

export default dashboardSlice.reducer;
