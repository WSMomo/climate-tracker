import styles from "./answers.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { RootState } from "../../../redux/store";
import { getQuizData } from "../../../global/quiz/questions";
import {
  setCurrentCorrectAnswer,
  setCurrentUserAnswer,
} from "../../../redux/quizReducer";
import Answer from "../answer/Answer";
export default function Answers() {
  const dispatch = useDispatch();
  const index = useSelector((state: RootState) => state.quiz.index); // current index

  // LANGUAGE
  const language = useSelector((state: RootState) => state.language.language);
  const quizData = getQuizData(language);

  // update current correct answer when index changes
  useEffect(() => {
    dispatch(setCurrentCorrectAnswer(quizData[index].answer));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div className={styles.answers}>
      {quizData[index].options.map((option, optionIndex) => (
        <Answer
          key={optionIndex}
          index={optionIndex}
          handleUpdateUserAnswer={() =>
            dispatch(setCurrentUserAnswer(optionIndex))
          }
        >
          {option}
        </Answer>
      ))}
    </div>
  );
}
