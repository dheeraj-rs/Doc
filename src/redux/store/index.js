import { configureStore } from "@reduxjs/toolkit";
import activeScreenReducer from "../features";

export const store = configureStore({
  reducer: {
    screen: activeScreenReducer,
    
  },
});
