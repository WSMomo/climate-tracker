import { useTranslation } from "react-i18next";
import styles from "./homeDescription.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

function HomeDescription() {
  const { t } = useTranslation("appTranslation");
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
  return (
    <div className={styles.container} id="#home">
      <h1 className={styles.title}>{t("title")}</h1>
      <h2 className={styles.subtitle}>{t("subtitle")}</h2>
      <p className={styles.content}>{t("content")}</p>
      <p className={styles.cta}>{t("cta")}</p>
      <div className={styles.icon}>
        <a href="#grids">
          <svg
            fill={darkMode ? "#FFF" : "#000"}
            version="1.1"
            id="Layer_1"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333     c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333     z" />
              <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17     l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17     C369.42,189.917,355.913,189.917,347.582,198.248z" />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default HomeDescription;
