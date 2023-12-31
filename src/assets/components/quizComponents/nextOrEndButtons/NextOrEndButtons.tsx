import styles from "./nextOrEndButtons.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "../../../redux/store";
import { QUIZ_LENGTH } from "../../../global/quiz/data";
import { nextQuestion, showResults } from "../../../redux/quizReducer";
import NextButton from "../nextButton/NextButton";

export default function NextOrEndButtons() {
  const dispatch = useDispatch();
  const { t } = useTranslation("quizTranslation", { keyPrefix: "quiz" });
  const index = useSelector((state: RootState) => state.quiz.index);
  const answersClicked = useSelector(
    (state: RootState) => state.quiz.answersClicked
  );

  return (
    <div className={styles.container}>
      {index === QUIZ_LENGTH - 1 ? (
        <NextButton
          disabled={!answersClicked}
          onClick={() => dispatch(showResults(true))}
        >
          {t("showResultsButton")}
        </NextButton>
      ) : (
        <NextButton
          disabled={!answersClicked}
          onClick={() => dispatch(nextQuestion())}
        >
          {t("nextQuestionButton")}
        </NextButton>
      )}
    </div>
  );
}
