import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setAnswersClicked } from "../../../redux/quizReducer";
import styles from "./answer.module.css";
type Props = {
  index: number;
  children: React.ReactNode;
  handleUpdateUserAnswer: () => void;
};

export default function Answer({
  children,
  handleUpdateUserAnswer,
  index,
}: Props) {
  const dispatch = useDispatch();

  const currentUserAnswer = useSelector(
    (state: RootState) => state.quiz.currentUserAnswer
  );

  function handleClick() {
    dispatch(setAnswersClicked(true));
    handleUpdateUserAnswer();
  }

  return (
    <div
      className={`${currentUserAnswer === index && styles.selectedAnswer}
         ${currentUserAnswer != index && styles.notSelectedAnswer} ${
        styles.answer
      }`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
