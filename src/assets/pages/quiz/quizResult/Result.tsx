import styles from "./result.module.css";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { restart } from "../../../redux/quizReducer";

import ResultRender from "../../../components/quizComponents/resultRender/ResultRender";
import ActionButton from "../../../components/quizComponents/actionButton/ActionButton";
import WrongAnswerRender from "../../../components/quizComponents/wrongAnswerRender/WrongAnswerRender";
import Transition from "../../../components/Transition/Transition";

export default function Result() {
  // REDUX
  const dispatch = useDispatch();

  // LANGUAGE
  const { t } = useTranslation("quizTranslation", { keyPrefix: "quiz" });
  return (
    <Transition>
      <div className={styles.result}>
        <ResultRender />
        <ActionButton handleClick={() => dispatch(restart())}>
          {t("restartButton")}
        </ActionButton>
        {/* only if user has answered at least one question incorrectly */}
        <WrongAnswerRender />
      </div>
    </Transition>
  );
}
