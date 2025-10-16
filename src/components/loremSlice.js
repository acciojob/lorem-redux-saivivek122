import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLorem = createAsyncThunk("lorem/fetchLorem", async () => {
  const response = await fetch("https://api.lorem.com/ipsum");
  const data = await response.json();
  return data;
});

const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLorem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLorem.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLorem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default loremSlice.reducer;
