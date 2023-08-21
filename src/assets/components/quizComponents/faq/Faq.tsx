import { useTranslation } from "react-i18next";

import Accordion from "../accordion/Accordion";

export default function Faq() {
  const { t } = useTranslation("quizTranslation", { keyPrefix: "quiz" });
  return (
    <>
      <Accordion title={t("howAccordionTitle")}>
        {t("howAccordionDescription")}
      </Accordion>
      <Accordion title={t("whyAccordionTitle")}>
        {t("whyAccordionDescription")}
      </Accordion>
      <Accordion title={t("howScoreAccordionTitle")}>
        {t("howScoreAccordionDescription")}
      </Accordion>
    </>
  );
}
