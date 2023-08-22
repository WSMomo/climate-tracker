import styles from "./quizQuestions.module.css";
import Answers from "../../../components/quizComponents/answers/Answers";
import NextOrEndButtons from "../../../components/quizComponents/nextOrEndButtons/NextOrEndButtons";
import ProgressionBar from "../../../components/quizComponents/progressionBar/ProgressionBar";
import Question from "../../../components/quizComponents/question/Question";
import Separator from "../../../components/separator/Separator";
export default function QuizQuestions() {
  return (
    <>
      <div className={styles.questions}>
        <ProgressionBar />
        <Question />
        <Separator />
        <Answers />
        <Separator />
        <NextOrEndButtons />
      </div>
    </>
  );
}
