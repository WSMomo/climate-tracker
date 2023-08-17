import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TemperatureType } from "../global/types/temperatureType";
import { Co2Type } from "../global/types/co2Type";
import { MethaneType } from "../global/types/methaneType";
import { No2Type } from "../global/types/no2Type";
import { ArcticType } from "../global/types/arcticType";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface DataState {
  isClientApiActived: boolean;
  showSidebar: boolean;
  temperature: TemperatureType[];
  co2: Co2Type[];
  methane: MethaneType[];
  no2: No2Type[];
  arctic: ArcticType[];
}

const initialState: DataState = {
  isClientApiActived: false,
  showSidebar: false,
  temperature: [],
  co2: [],
  methane: [],
  no2: [],
  arctic: [],
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
    setTemperature: (state, action: PayloadAction<TemperatureType[]>) => {
      state.temperature = action.payload;
    },
    setCo2: (state, action: PayloadAction<Co2Type[]>) => {
      state.co2 = action.payload;
    },
    setMethane: (state, action: PayloadAction<Co2Type[]>) => {
      state.methane = action.payload;
    },
    setNo2: (state, action: PayloadAction<Co2Type[]>) => {
      state.no2 = action.payload;
    },
    setArctic: (state, action: PayloadAction<Co2Type[]>) => {
      state.arctic = action.payload;
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
} = dataSlice.actions;

export default dataSlice.reducer;
