import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isPopupOpen: false,
    name: "",
    country: "",
    month: "",
    lat: 0,
    long: 0,
  },
};

export const addSpotSlice = createSlice({
  name: "addSpot",
  initialState,
  reducers: {
    setNewSpot: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setNewSpot } = addSpotSlice.actions;
export default addSpotSlice.reducer;
