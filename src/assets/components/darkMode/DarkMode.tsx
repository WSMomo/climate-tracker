// DarkMode.tsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setDarkMode } from "../../redux/darkModeReducer";

interface Props {
  children: React.ReactNode;
}

function DarkMode({ children }: Props) {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <button
        className="fixed bg-red-500"
        onClick={() => dispatch(setDarkMode())}
      >
        Dark Mode
      </button>
      {children}
    </div>
  );
}

export default DarkMode;
