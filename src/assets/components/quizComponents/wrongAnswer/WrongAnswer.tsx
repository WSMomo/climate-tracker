import styles from "./wrongAnswer.module.css";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "../../../redux/store";
import { getQuizData } from "../../../global/quiz/questions";
import Separator from "../../separator/Separator";

type Props = {
  questionNumber: number;
};

export default function WrongAnswer({ questionNumber }: Props) {
  // LANGUAGE
  const { t } = useTranslation("quizTranslation", { keyPrefix: "quiz" });
  const language = useSelector((state: RootState) => state.language.language);
  const quizData = getQuizData(language);

  // QUESTION/ANSWERS DATA
  const question = quizData[questionNumber].question;
  const answers = quizData[questionNumber].options;
  const correctAnswerIndex = quizData[questionNumber].answer;
  const correctAnswer = answers[correctAnswerIndex];

  return (
    <div>
      <Separator />
      <ul className={styles.container}>
        <li>
          <div>{question}</div>
          <div className={styles.correctAnswerSentence}>
            {t("correctAnswer")}
            <span className={styles.correctAnswer}> {correctAnswer}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
