import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// APP
import enAppTranslation from "./assets/translations/appTranslations/en.json";
import itAppTranslation from "./assets/translations/appTranslations/it.json";

// CLIMATE EVENTS
import enArcticTranslation from "./assets/translations/appTranslations/arctic/arctic_en.json";
import itArcticTranslation from "./assets/translations/appTranslations/arctic/arctic_it.json";
import enCo2Translation from "./assets/translations/appTranslations/co2/co2_en.json";
import itCo2Translation from "./assets/translations/appTranslations/co2/co2_it.json";
import enMethaneTranslation from "./assets/translations/appTranslations/methane/methane_en.json";
import itMethaneTranslation from "./assets/translations/appTranslations/methane/methane_it.json";
import enNo2Translation from "./assets/translations/appTranslations/no2/no2_en.json";
import itNo2Translation from "./assets/translations/appTranslations/no2/no2_it.json";
import enTemperatureTranslation from "./assets/translations/appTranslations/temperature/temperature_en.json";
import itTemperatureTranslation from "./assets/translations/appTranslations/temperature/temperature_it.json";

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
      co2: enCo2Translation,
      methane: enMethaneTranslation,
      no2: enNo2Translation,
      temperature: enTemperatureTranslation,

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
      co2: itCo2Translation,
      methane: itMethaneTranslation,
      no2: itNo2Translation,
      temperature: itTemperatureTranslation,

      // QUIZ
      quizTranslation: itQuizTranslation,
      questions: itQuizTranslations,
      results: itResultsTranslations,
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
