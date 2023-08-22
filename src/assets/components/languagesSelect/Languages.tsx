import styles from "./languages.module.css";
import i18n from "../../../i18n";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setLanguage } from "../../redux/languagesReducer";
import { useEffect } from "react";

export default function Languages() {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.language);

  function handleLanguage() {
    const selectedLanguage = language === "en" ? "it" : "en";
    dispatch(setLanguage(selectedLanguage));
  }

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleLanguage}>
        {language.toUpperCase()}
      </button>
    </div>
  );
}
