import styles from "./loader.module.css";

import ClientApi from "../../clientApi/ClientApi";
import { useTranslation } from "react-i18next";

function Loader() {
  const { t } = useTranslation("appTranslation");

  function refresh() {
    return window.location.reload();
  }

  return (
    <ClientApi>
      <div className={styles.container}>
        <div className={styles.loaderAnimation} role="status"></div>
        <button onClick={refresh} className={styles.refreshButton}>
          {t("refreshButton")}
        </button>
      </div>
    </ClientApi>
  );
}

export default Loader;
