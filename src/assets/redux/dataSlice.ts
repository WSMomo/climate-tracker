import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { temperatureType } from "../global/types/temperatureType";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface DataState {
  isClientApiActived: boolean;
  showSidebar: boolean;
  temperature: temperatureType[];
}

const initialState: DataState = {
  isClientApiActived: false,
  showSidebar: false,
  temperature: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setIsClientApiActived: (state) => {
      state.isClientApiActived = true;
    },
    setShowSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
    setTemperature: (state, action: PayloadAction<temperatureType[]>) => {
      state.temperature = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export const { setIsClientApiActived, setShowSidebar, setTemperature } =
  dataSlice.actions;

export default dataSlice.reducer;
