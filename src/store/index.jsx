import CartSlice from "./CartSlice";
import ToggleCartSlice from "./ToggleCartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { toggleCart: ToggleCartSlice, cart: CartSlice },
});

export default store;
