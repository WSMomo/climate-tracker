import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// APP
import enAppTranslation from "./assets/translations/appTranslations/en.json";
import itAppTranslation from "./assets/translations/appTranslations/it.json";

// CLIMATE EVENTS
import enArcticTranslation from "./assets/translations/appTranslations/arctic/arctic_en.json";
import itArcticTranslation from "./assets/translations/appTranslations/arctic/arctic_it.json";

// QUIZ
import enQuizTranslation from "./assets/translations/quizTranslations/quiz_en.json";
import itQuizTranslation from "./assets/translations/quizTranslations/quiz_it.json";
import enQuizTranslations from "./assets/translations/quizTranslations/questions_en.json";
import itQuizTranslations from "./assets/translations/quizTranslations/questions_it.json";
import enResultsTranslations from "./assets/translations/quizTranslations/result_en.json";
import itResultsTranslations from "./assets/translations/quizTranslations/result_it.json";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      // APP
      appTranslation: enAppTranslation,

      // CLIMATE EVENTS
      arctic: enArcticTranslation,

      // QUIZ
      quizTranslation: enQuizTranslation,
      questions: enQuizTranslations,
      results: enResultsTranslations,
    },
    it: {
      // APP
      appTranslation: itAppTranslation,

      // CLIMATE EVENTS
      arctic: itArcticTranslation,

      // QUIZ
      quizTranslation: itQuizTranslation,
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
