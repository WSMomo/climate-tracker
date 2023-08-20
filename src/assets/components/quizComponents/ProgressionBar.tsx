import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { QUIZ_LENGTH } from "../../global/quiz/data";

export default function ProgressionBar() {
  const progression = useSelector((state: RootState) => state.quiz.progression);
  const index = useSelector((state: RootState) => state.quiz.index);
  return (
    <div className="w-5/6 flex flex-col items-center justify-center">
      <div className="w-fit border border-text-color text-text-color my-4 p-2">
        {index + 1}/{QUIZ_LENGTH}
      </div>
      <div className="w-4/5 bg-secondary-color border-text-color border-[1px] h-4">
        <div
          className={`h-full bg-text-color`}
          style={{ width: `${progression}%` }}
        ></div>
      </div>
    </div>
  );
}
