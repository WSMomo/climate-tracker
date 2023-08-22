import styles from "./quiz.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import QuizQuestions from "./quizQuestions/QuizQuestions";
import QuizHome from "./quizHome/QuizHome";
import Result from "./quizResult/Result";
import ReturnAtHomeButton from "../../components/quizComponents/returnAtHomeButton/ReturnAtHomeButton";
import Transition from "../../components/transition/Transition";
import ActionsButtons from "../../components/actionsButtons/ActionsButtons";

export default function Quiz() {
  const isStarted = useSelector((state: RootState) => state.quiz.isStarted);
  const isFinished = useSelector((state: RootState) => state.quiz.isFinished);
  const isHomeVisible = !isStarted && !isFinished;
  const isQuizVisible = isStarted && !isFinished;
  const isResultVisible = isFinished;
  return (
    <Transition>
      <div className={styles.quiz}>
        <div className={styles.navbar}>
          <ReturnAtHomeButton />
          <ActionsButtons />
        </div>
        {isHomeVisible && <QuizHome />}
        {isQuizVisible && <QuizQuestions />}
        {isResultVisible && <Result />}
      </div>
    </Transition>
  );
}
