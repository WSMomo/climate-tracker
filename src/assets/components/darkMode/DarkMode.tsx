import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface Props {
  children: React.ReactNode;
}

function DarkMode({ children }: Props) {
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

  return <div className={darkMode ? "dark" : ""}>{children}</div>;
}

export default DarkMode;
