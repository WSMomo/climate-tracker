import Answers from "../../components/quizComponents/answers/Answers";
import NextOrEndButtons from "../../components/quizComponents/nextOrEndButtons/NextOrEndButtons";
import ProgressionBar from "../../components/quizComponents/progressionBar/ProgressionBar";
import Question from "../../components/quizComponents/question/Question";
import Separator from "../../components/separator/Separator";

export default function QuizQuestions() {
  return (
    <>
      <div className="bg-main-color text-secondary-color w-4/5 md:w-3/5 max-w-screen-md min-h-fit p-4 flex flex-col items-center justify-center">
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
