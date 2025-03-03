import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSwapiData } from "../services/swapiService";

export const getSwapiInfo = createAsyncThunk(
  "swapi/getInfo",
  async (url, { rejectWithValue }) => {
    try {
      return await fetchSwapiData(url);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const swapiSlice = createSlice({
  name: "swapi",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearData: (state) => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSwapiInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSwapiInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getSwapiInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearData } = swapiSlice.actions;
export default swapiSlice.reducer;