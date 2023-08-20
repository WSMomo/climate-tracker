import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./assets/translations/quizTranslations/quiz_en.json";
import itTranslation from "./assets/translations/quizTranslations/quiz_it.json";
import enQuizTranslations from "./assets/translations/quizTranslations/questions_en.json";
import itQuizTranslations from "./assets/translations/quizTranslations/questions_it.json";
import enResultsTranslations from "./assets/translations/quizTranslations/result_en.json";
import itResultsTranslations from "./assets/translations/quizTranslations/result_it.json";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
      questions: enQuizTranslations,
      results: enResultsTranslations,
    },
    it: {
      translation: itTranslation,
      questions: itQuizTranslations,
      results: itResultsTranslations,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
