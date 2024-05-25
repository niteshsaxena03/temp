import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/HomeSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
