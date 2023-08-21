import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface DarkModeInterface {
  darkMode: boolean;
}

const getInitialDarkModeState = (): boolean => {
  const savedMode = localStorage.getItem("darkMode");
  return savedMode ? JSON.parse(savedMode) : false;
};

const initialState: DarkModeInterface = {
  darkMode: getInitialDarkModeState(),
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setSavedDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

export const { setDarkMode, setSavedDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
