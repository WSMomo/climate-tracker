import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { InfoComponentsType } from "../global/types/infoComponentsType";

export interface DataState {
  isClientApiActived: boolean;
  showSidebar: boolean;
  temperature: InfoComponentsType[];
  co2: InfoComponentsType[];
  methane: InfoComponentsType[];
  no2: InfoComponentsType[];
  arctic: InfoComponentsType[];
  allDataLoaded: boolean;
}

const initialState: DataState = {
  isClientApiActived: false,
  showSidebar: false,
  temperature: [],
  co2: [],
  methane: [],
  no2: [],
  arctic: [],
  allDataLoaded: false,
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
    setTemperature: (state, action: PayloadAction<InfoComponentsType[]>) => {
      state.temperature = action.payload;
    },
    setCo2: (state, action: PayloadAction<InfoComponentsType[]>) => {
      state.co2 = action.payload;
    },
    setMethane: (state, action: PayloadAction<InfoComponentsType[]>) => {
      state.methane = action.payload;
    },
    setNo2: (state, action: PayloadAction<InfoComponentsType[]>) => {
      state.no2 = action.payload;
    },
    setArctic: (state, action: PayloadAction<InfoComponentsType[]>) => {
      state.arctic = action.payload;
    },
    setAllDataLoaded: (state) => {
      state.allDataLoaded = true;
    },
  },
});

// Action creators are generated for each case reducer function

export const {
  setIsClientApiActived,
  setShowSidebar,
  setTemperature,
  setCo2,
  setMethane,
  setNo2,
  setArctic,
  setAllDataLoaded,
} = dataSlice.actions;

export default dataSlice.reducer;
