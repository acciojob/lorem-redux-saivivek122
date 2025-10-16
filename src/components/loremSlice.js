import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchLorem = createAsyncThunk("lorem/fetchLorem", async () => {
const res = await fetch("https://api.lorem.com/ipsum");
if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);
const data = await res.json();

return {
title: data.title ?? "",
body: data.body ?? JSON.stringify(data),
};
});


const loremSlice = createSlice({
name: "lorem",
initialState: {
title: "",
body: "",
loading: false,
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
state.title = action.payload.title;
state.body = action.payload.body;
})
.addCase(fetchLorem.rejected, (state, action) => {
state.loading = false;
state.error = action.error?.message ?? "Failed to fetch";
});
},
});
export default loremSlice.reducer;
