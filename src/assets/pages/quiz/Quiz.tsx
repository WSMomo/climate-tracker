import { useSelector } from "react-redux";

import QuizQuestions from "./quiQuestions/QuizQuestions";
import QuizHome from "./quizHome/QuizHome";
import Result from "./quizResult/Result";
import { RootState } from "../../redux/store";
import ReturnAtHomeButton from "../../components/quizComponents/returnAtHomeButton/ReturnAtHomeButton";

import styles from "./quiz.module.css";

export default function Quiz() {
  const isStarted = useSelector((state: RootState) => state.quiz.isStarted);
  const isFinished = useSelector((state: RootState) => state.quiz.isFinished);

  return (
    <div className={styles.quiz}>
      <ReturnAtHomeButton />
      {!isStarted && !isFinished && <QuizHome />}
      {isStarted && !isFinished && <QuizQuestions />}
      {isFinished && <Result />}
    </div>
  );
}
