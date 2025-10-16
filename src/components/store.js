import { configureStore } from "@reduxjs/toolkit";
import loremReducer from "./loremSlice";

export default configureStore({
  reducer: {
    lorem: loremReducer,
  },
});


