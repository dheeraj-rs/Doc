import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activescreen: 1,
  totalpage: 0,
  popup: null,
  value: false,
};

const ScreenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setActiveState: (state, action) => {
      state.activescreen = action.payload;
    },
    setTotalPage: (state, action) => {
      state.totalpage = action.payload;
    },
    addAge: (state, action) => {
      state.value = action.payload;
    },
    isPage: (state, action) => {
      state.popup = action.payload;
    },
  },
});

export const { setActiveState, setTotalPage, addAge, isPage } =
  ScreenSlice.actions;

export default ScreenSlice.reducer;
