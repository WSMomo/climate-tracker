import styles from "./resultRender.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  getResultsData,
  resultsSentencesType,
} from "../../../global/quiz/results";
import { checkScoreResult } from "../../../global/quiz/utility";
import { QUIZ_LENGTH } from "../../../global/quiz/data";
import Separator from "../../separator/Separator";

export default function ResultRender() {
  const language = useSelector((state: RootState) => state.language.language);
  const score = useSelector((state: RootState) => state.quiz.score);
  const resultsSentences: resultsSentencesType = getResultsData(language);

  // SCORE INFO
  const scoreResult = checkScoreResult(score);

  return (
    <>
      <div>
        {score}/{QUIZ_LENGTH}
      </div>
      <Separator />
      <div className={styles.container}>
        <h2 className={styles.sentence}>
          {resultsSentences[scoreResult].sentence}
        </h2>
        <img
          className={styles.img}
          src={resultsSentences[scoreResult].image}
          alt={resultsSentences[scoreResult].sentence}
        />
        <p className={styles.description}>
          {resultsSentences[scoreResult].description}
        </p>
      </div>
    </>
  );
}
