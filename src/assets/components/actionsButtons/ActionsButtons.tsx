import styles from "./actionsButtons.module.css";
import DarkModeButton from "../appComponents/darkModeButton/DarkModeButton";
import Languages from "../languagesSelect/Languages";

function ActionsButtons() {
  return (
    <div className={styles.actions}>
      <Languages />
      <DarkModeButton />
    </div>
  );
}

export default ActionsButtons;
