import { createSlice } from "@reduxjs/toolkit";

const initialState = { feedBack: false };

const CartFeedbackSlice = createSlice({
  name: "feedBack",
  initialState,
  reducers: {
    feedBackVisibil(state) {
      state.feedBack = !state.feedBack;
    },
  },
});

export const {feedBackVisibil} = CartFeedbackSlice.actions;

export default CartFeedbackSlice.reducer;
