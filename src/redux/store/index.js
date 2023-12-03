import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "../features/ScreenSlice";
export const store = configureStore({
  reducer: {
    screen: screenReducer,
  },
});
