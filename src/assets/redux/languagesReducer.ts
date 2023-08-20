import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type LanguagesReducerTypes = {
  language: string;
  languagesSelected: boolean;
};

const initialState: LanguagesReducerTypes = {
  language: "en",
  languagesSelected: false,
};

export const languagesSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      state.languagesSelected = true;
    },
  },
});

export const { setLanguage } = languagesSlice.actions;

export default languagesSlice.reducer;
