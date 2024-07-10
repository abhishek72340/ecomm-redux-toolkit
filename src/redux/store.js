import { configureStore } from "@reduxjs/toolkit";
import FetchProductSlice from "../redux/slices/FetchProduct";
export const store = configureStore({
  reducer: {
    fetchProduct: FetchProductSlice,
  },
});
