import { useDispatch, useSelector } from "react-redux";
import i18n from "../../../i18n";
import styles from "./languages.module.css";
import { RootState } from "../../redux/store";
import { setLanguage } from "../../redux/languagesReducer";
import { useEffect } from "react";

export default function Languages() {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.language);

  function handleLanguageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedLanguage = event.target.value;
    dispatch(setLanguage(selectedLanguage));
  }

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className={styles.container}>
      <select
        name="languages"
        id="languages"
        onChange={handleLanguageChange}
        value={language}
        className={styles.select}
      >
        <option value="en">EN</option>
        <option value="it">IT</option>
      </select>
    </div>
  );
}
