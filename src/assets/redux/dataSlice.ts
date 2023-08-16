import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface DataState {
  value: number;
}

const initialState: DataState = {
  value: 0,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function

// export const {  } = dataSlice.actions;

export default dataSlice.reducer;
