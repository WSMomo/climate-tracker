import { createSlice } from "@reduxjs/toolkit";

function getInitialDarkModeState(): boolean {
  const savedMode = localStorage.getItem("darkMode");
  return savedMode ? JSON.parse(savedMode) : false;
}

export interface DarkModeInterface {
  darkMode: boolean;
}

const initialState: DarkModeInterface = {
  darkMode: getInitialDarkModeState(),
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    },
  },
});

export const { setDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
