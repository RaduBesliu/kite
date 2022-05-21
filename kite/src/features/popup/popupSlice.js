import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { open: false },
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setPopupState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPopupState } = popupSlice.actions;
export default popupSlice.reducer;
