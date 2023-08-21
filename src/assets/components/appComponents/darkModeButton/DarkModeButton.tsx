import { useDispatch, useSelector } from "react-redux";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";

import styles from "./darkModeButton.module.css";
import { RootState } from "../../../redux/store";
import { setDarkMode } from "../../../redux/darkModeReducer";

function DarkModeButton() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

  return (
    <button
      className={styles.container}
      onClick={() => dispatch(setDarkMode())}
    >
      {darkMode ? (
        <MoonIcon className={styles.icon} />
      ) : (
        <SunIcon className={styles.icon} />
      )}
    </button>
  );
}

export default DarkModeButton;
