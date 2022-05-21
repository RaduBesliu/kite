// Libraries
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import filterReducer from "./features/filter/filterSlice";
import popupReducer from "./features/popup/popupSlice";
import addSpotSlice from "./features/addSpot/addSpotSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    popup: popupReducer,
    addSpot: addSpotSlice,
  },
});
