import ManageCartSlice from "./ManageCartSlice";
import ToggleCartSlice from "./ToggleCartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { toggleCart: ToggleCartSlice, cart: ManageCartSlice },
});

export default store;
