import { useDispatch } from "react-redux";
import ResultRender from "../../../components/quizComponents/resultRender/ResultRender";
import ActionButton from "../../../components/quizComponents/actionButton/ActionButton";
import WrongAnswerRender from "../../../components/quizComponents/wrongAnswerRender/WrongAnswerRender";
import { useTranslation } from "react-i18next";
import { restart } from "../../../redux/quizReducer";
import styles from "./result.module.css";

export default function Result() {
  // REDUX
  const dispatch = useDispatch();

  // LANGUAGE
  const { t } = useTranslation("quizTranslation", { keyPrefix: "quiz" });
  return (
    <div className={styles.result}>
      <ResultRender />
      <ActionButton handleClick={() => dispatch(restart())}>
        {t("restartButton")}
      </ActionButton>
      {/* only if user has answered at least one question incorrectly */}
      <WrongAnswerRender />
    </div>
  );
}
