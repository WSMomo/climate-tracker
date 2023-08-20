import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Accordion from "./Accordion";
import WrongAnswer from "./WrongAnswer";
import { RootState } from "../../redux/store";
import Separator from "../separator/Separator";

export default function WrongAnswerRender() {
  const { t } = useTranslation("quizTranslation", { keyPrefix: "quiz" });
  const wrongAnswers = useSelector(
    (state: RootState) => state.quiz.wrongAnswers
  );
  return (
    <>
      {/* only if user has answered at least one question incorrectly */}
      {wrongAnswers.length > 0 && (
        <>
          <Separator />
          <Accordion title={t("wrongAnswersAccordionTitle")}>
            {wrongAnswers.map((questionNumber) => (
              <WrongAnswer
                questionNumber={questionNumber}
                key={questionNumber}
              />
            ))}
          </Accordion>
        </>
      )}
    </>
  );
}
