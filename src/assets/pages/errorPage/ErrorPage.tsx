import styles from "./errorPage.module.css";
import { useTranslation } from "react-i18next";
function ErrorPage() {
  const { t } = useTranslation("appTranslation");
  return (
    <div className={styles.container}>
      <div className={styles.errorMessage}>{t("errorPage")}</div>
      <a
        href="https://climate-tracker.vercel.app/"
        className={styles.refreshButton}
      >
        {t("refreshButton")}
      </a>
    </div>
  );
}

export default ErrorPage;
