import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import {
  getResultsData,
  resultsSentencesType,
} from "../../global/quiz/results";
import { checkScoreResult } from "../../global/quiz/utility";
import { QUIZ_LENGTH } from "../../global/quiz/data";
import Separator from "../separator/Separator";

export default function ResultRender() {
  const language = useSelector((state: RootState) => state.quiz.language);
  const score = useSelector((state: RootState) => state.quiz.score);
  const resultsSentences: resultsSentencesType = getResultsData(language);

  // SCORE INFO
  const scoreResult = checkScoreResult(score);

  return (
    <>
      <div className="text-text-color">
        {score}/{QUIZ_LENGTH}
      </div>
      <Separator />
      <div className="flex flex-col justify-center items-center text-center px-14 text-text-color">
        <h2 className="p-4 text-3xl">
          {resultsSentences[scoreResult].sentence}
        </h2>
        <img
          className="w-1/6 m-4"
          src={resultsSentences[scoreResult].image}
          alt={resultsSentences[scoreResult].sentence}
        />
        <p className="text-lg">{resultsSentences[scoreResult].description}</p>
      </div>
    </>
  );
}
