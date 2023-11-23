import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activescreen: 1,
  totalpage:0
};

const activeScreenSlice = createSlice({
  name: "activescreen",
  initialState,
  reducers: {
    setActiveState: (state, action) => {
      state.activescreen = action.payload;
    },
    setTotalPage: (state, action) => {
      state.totalpage = action.payload;
    },
  },
});

export const { setActiveState,setTotalPage } = activeScreenSlice.actions;

export default activeScreenSlice.reducer;
