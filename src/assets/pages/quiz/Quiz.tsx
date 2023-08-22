import styles from "./quiz.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import QuizQuestions from "./quizQuestions/QuizQuestions";
import QuizHome from "./quizHome/QuizHome";
import Result from "./quizResult/Result";
import ReturnAtHomeButton from "../../components/quizComponents/returnAtHomeButton/ReturnAtHomeButton";
import Transition from "../../components/Transition/Transition";

export default function Quiz() {
  const isStarted = useSelector((state: RootState) => state.quiz.isStarted);
  const isFinished = useSelector((state: RootState) => state.quiz.isFinished);

  return (
    <Transition>
      <div className={styles.quiz}>
        <ReturnAtHomeButton />
        {!isStarted && !isFinished && <QuizHome />}
        {isStarted && !isFinished && <QuizQuestions />}
        {isFinished && <Result />}
      </div>
    </Transition>
  );
}
