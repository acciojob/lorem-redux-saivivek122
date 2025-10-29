import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchLorem = createAsyncThunk("lorem/fetchLorem", () => {
  return fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => new Promise((resolve) => setTimeout(() => resolve(data), 100)));
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
