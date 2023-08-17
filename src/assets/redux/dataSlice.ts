import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { temperatureType } from "../global/types/temperatureType";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface DataState {
  showSidebar: boolean;
  co2: temperatureType[];
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
    setCo2: (state, action: PayloadAction<temperatureType[]>) => {
      state.co2 = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export const { setShowSidebar, setCo2 } = dataSlice.actions;

export default dataSlice.reducer;
