import { useSelector } from "react-redux";

import QuizQuestions from "./QuizQuestions";
import QuizHome from "./QuizHome";
import Result from "./Result";
import { RootState } from "../../redux/store";
import ReturnAtHomeButton from "../../components/quizComponents/ReturnAtHomeButton";

export default function Quiz() {
  const isStarted = useSelector((state: RootState) => state.quiz.isStarted);
  const isFinished = useSelector((state: RootState) => state.quiz.isFinished);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-main-color w-full">
      <ReturnAtHomeButton />
      {!isStarted && !isFinished && <QuizHome />}
      {isStarted && !isFinished && <QuizQuestions />}
      {isFinished && <Result />}
    </div>
  );
}
