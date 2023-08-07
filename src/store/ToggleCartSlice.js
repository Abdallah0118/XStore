import { createSlice } from "@reduxjs/toolkit";

const ToggleCartSlice = createSlice({
  name: "toggleCart",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    close(state) {
      state.cartIsVisible = false;
    },
  },
});

export const toggleCartActions = ToggleCartSlice.actions;

export default ToggleCartSlice.reducer;
