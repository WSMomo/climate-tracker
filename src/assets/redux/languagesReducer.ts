import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type LanguagesReducerTypes = {
  language: string;
  languagesSelected: boolean;
};

function getInitalLanguageState(): string {
  const savedLanguage = localStorage.getItem("language");
  return savedLanguage ? JSON.parse(savedLanguage) : "en";
}

const initialState: LanguagesReducerTypes = {
  language: getInitalLanguageState(),
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
