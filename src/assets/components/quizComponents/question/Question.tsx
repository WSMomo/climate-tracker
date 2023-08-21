import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { getQuizData } from "../../../global/quiz/questions";
import styles from "./question.module.css";

export default function Question() {
  // LANGUAGE
  const language = useSelector((state: RootState) => state.language.language);
  const quizData = getQuizData(language);

  const index = useSelector((state: RootState) => state.quiz.index);

  return <div className={styles.question}>{quizData[index].question}</div>;
}
