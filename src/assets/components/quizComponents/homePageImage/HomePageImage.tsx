import styles from "./homePageImage.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  getResultsData,
  resultsSentencesType,
} from "../../../global/quiz/results";
import { checkScoreResult } from "../../../global/quiz/utility";
export default function HomePageImage() {
  // LANGUAGE
  const language = useSelector((state: RootState) => state.language.language);
  const resultsSentences: resultsSentencesType = getResultsData(language);

  //REDUX
  const highestScore = useSelector(
    (state: RootState) => state.quiz.highestScore
  );
  const attempt = useSelector((state: RootState) => state.quiz.attempt);

  // FIND IMAGE PATH
  const scoreResult = checkScoreResult(highestScore);
  const imageByScore = resultsSentences[scoreResult].image;
  const homeImage = attempt > 0 ? imageByScore : "/img/quiz/question_mark.png";

  return <img className={styles.img} src={homeImage} alt="Food Quiz" />;
}
