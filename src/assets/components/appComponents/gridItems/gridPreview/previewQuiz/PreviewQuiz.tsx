import { Link } from "react-router-dom";
import styles from "../preview.module.css";
import { useTranslation } from "react-i18next";
import HomePageImage from "../../../../quizComponents/homePageImage/HomePageImage";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import {
  getResultsData,
  resultsSentencesType,
} from "../../../../../global/quiz/results";
import { checkScoreResult } from "../../../../../global/quiz/utility";

export function PreviewQuiz() {
  const { t } = useTranslation("appTranslation");
  const language = useSelector((state: RootState) => state.language.language);
  const resultsSentences: resultsSentencesType = getResultsData(language);
  const highestScore = useSelector(
    (state: RootState) => state.quiz.highestScore
  );
  const attempt = useSelector((state: RootState) => state.quiz.attempt);

  // USER INFO
  const scoreResult = checkScoreResult(highestScore);
  const titleByScore = resultsSentences[scoreResult].sentence;

  return (
    <Link to="/quiz" className={`${styles.container} `}>
      <h2 className={styles.title}>Quiz</h2>
      <div className={styles.quizMain}>
        <HomePageImage />
        {attempt > 0 ? (
          <>
            <h2 className={styles.title}>{titleByScore}</h2>
          </>
        ) : (
          <div className={styles.quizDescription}>{t("homeQuizItem")}</div>
        )}
      </div>
    </Link>
  );
}
