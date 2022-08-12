import { configureStore } from "@reduxjs/toolkit";
import storeItemsReducer from "./features/storeItemsSlice";

export const store = configureStore({
  reducer: {
    storeItems: storeItemsReducer,
  },
});
