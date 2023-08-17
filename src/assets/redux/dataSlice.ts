import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface DataState {
  showSidebar: boolean;
  co2: object[];
}

const initialState: DataState = {
  showSidebar: false,
  co2: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setShowSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
    setCo2: (state, action: PayloadAction<object[]>) => {
      state.co2 = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export const { setShowSidebar, setCo2 } = dataSlice.actions;

export default dataSlice.reducer;
