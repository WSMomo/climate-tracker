// DarkMode.tsx

import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

interface Props {
  children: React.ReactNode;
}

function DarkMode({ children }: Props) {
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return <div className={darkMode ? "dark" : ""}>{children}</div>;
}

export default DarkMode;
