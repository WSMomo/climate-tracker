import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getQuizData } from "../../global/quiz/questions";

export default function Question() {
  // LANGUAGE
  const language = useSelector((state: RootState) => state.language.language);
  const quizData = getQuizData(language);

  const index = useSelector((state: RootState) => state.quiz.index);

  return (
    <div className="text-lg p-2 mt-4 text-center text-text-color">
      {quizData[index].question}
    </div>
  );
}
