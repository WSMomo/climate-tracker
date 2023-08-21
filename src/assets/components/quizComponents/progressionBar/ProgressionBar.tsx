import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { QUIZ_LENGTH } from "../../../global/quiz/data";
import styles from "./progressionBar.module.css";

export default function ProgressionBar() {
  const progression = useSelector((state: RootState) => state.quiz.progression);
  const index = useSelector((state: RootState) => state.quiz.index);
  return (
    <div className={styles.container}>
      <div className={styles.index}>
        {index + 1}/{QUIZ_LENGTH}
      </div>
      <div className={styles.progressionBar}>
        <div
          className={styles.progression}
          style={{ width: `${progression}%` }}
        ></div>
      </div>
    </div>
  );
}
