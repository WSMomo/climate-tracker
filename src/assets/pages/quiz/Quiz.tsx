import { useDispatch, useSelector } from "react-redux";

import QuizQuestions from "./QuizQuestions";
import QuizHome from "./Home";
import Languages from "./Languages";
import Result from "./Result";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import { restart } from "../../redux/quizReducer";

export default function Quiz() {
  const isStarted = useSelector((state: RootState) => state.quiz.isStarted);
  const isFinished = useSelector((state: RootState) => state.quiz.isFinished);
  const languagesSelected = useSelector(
    (state: RootState) => state.quiz.languagesSelected
  );

  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-main-color">
      {!languagesSelected ? (
        <Languages />
      ) : (
        <>
          {!isStarted && !isFinished && <QuizHome />}
          {isStarted && !isFinished && <QuizQuestions />}
          {isFinished && <Result />}
          <Link to="/" onClick={() => dispatch(restart())}>
            Return at Home
          </Link>
        </>
      )}
    </div>
  );
}
