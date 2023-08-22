import styles from "./returnAtHomeButton.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { returnAtHome } from "../../../redux/quizReducer";
import { HomeIcon } from "@heroicons/react/24/outline";

function ReturnAtHomeButton() {
  const dispatch = useDispatch();

  return (
    <Link
      to="/"
      onClick={() => dispatch(returnAtHome())}
      className={styles.button}
      title="Return at Home"
    >
      <HomeIcon className={styles.icon} />
    </Link>
  );
}

export default ReturnAtHomeButton;
