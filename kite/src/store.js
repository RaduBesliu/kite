// Libraries
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import filterReducer from "./features/filter/filterSlice";
import popupReducer from "./features/popup/popupSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    popup: popupReducer,
  },
});
