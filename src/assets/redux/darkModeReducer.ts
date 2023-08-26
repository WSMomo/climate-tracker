import { createSlice } from "@reduxjs/toolkit";

function getPreferredColorScheme(): boolean {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return true; //dark
  } else {
    return false; //light
  }
}

// IF FIRST ACCESS GET THE SYSTEM PREFERENCE THEME
// ELSE GET THE SAVED THEME
function getInitialDarkModeState(): boolean {
  const savedMode = localStorage.getItem("darkMode");
  console.log(savedMode);
  console.log(getPreferredColorScheme());
  console.log(savedMode ? JSON.parse(savedMode) : getPreferredColorScheme());
  return savedMode ? JSON.parse(savedMode) : getPreferredColorScheme();
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
