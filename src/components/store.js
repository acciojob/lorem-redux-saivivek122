import { configureStore} from "@reduxjs/toolkit";
import loremReducer from "./loremSlice.js"
const export store = configureStore({
reducer: {
lorem: loremSlice.reducer,
},
});
