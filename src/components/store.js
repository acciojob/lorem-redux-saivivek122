import { configureStore } from "@reduxjs/toolkit";
import loremReducer from "./loremSlice";

const default configureStore({
  reducer: {
    lorem: loremReducer,
  },
});

export default store;
