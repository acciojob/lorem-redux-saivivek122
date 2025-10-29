import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import "regenerator-runtime/runtime";

// Fetch single post with shorter delay so Cypress doesn't timeout
export const fetchLorem = createAsyncThunk("lorem/fetchLorem", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();

  // small artificial delay (optional)
  await new Promise((resolve) => setTimeout(resolve, 100)); 
  return data;
});

const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    data: null,
    loading: true, // start in loading state immediately
    error: null,
  },
  reducers: {},
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
