import enResultsInfo from "../../translations/quizTranslations/result_en.json";
import itResultsInfo from "../../translations/quizTranslations/result_it.json";

export type resultsSentencesType = {
  [key: string]: {
    sentence: string;
    description: string;
    image: string;
  };
};

export function getResultsData(language: string): resultsSentencesType {
  switch (language) {
    case "en":
      return enResultsInfo;
    case "it":
      return itResultsInfo;
    default:
      return enResultsInfo;
  }
}
