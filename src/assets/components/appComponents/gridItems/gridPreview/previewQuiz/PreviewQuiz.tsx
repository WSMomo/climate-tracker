import { Link } from "react-router-dom";
import styles from "../preview.module.css";
import { useTranslation } from "react-i18next";
import HomePageImage from "../../../../quizComponents/HomePageImage";

export function PreviewQuiz() {
  const { t } = useTranslation("appTranslation");
  return (
    <Link to="/quiz" className={styles.container}>
      <h2 className={styles.title}>Quiz</h2>
      <div className={styles.quizMain}>
        <HomePageImage />
        <div className={styles.quizDescription}>{t("homeQuizItem")}</div>
      </div>
    </Link>
  );
}
