// Libraries
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import filterReducer from "./features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});
