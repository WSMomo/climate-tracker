import styles from "./loader.module.css";

import ClientApi from "../../clientApi/ClientApi";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function Loader() {
  const { t } = useTranslation("appTranslation");
  const [showRefreshButton, setShowRefreshButton] = useState(false);

  function refresh() {
    return window.location.reload();
  }

  useEffect(() => {
    const timeourId = setTimeout(() => {
      setShowRefreshButton(true);
    }, 5000);

    return () => clearTimeout(timeourId);
  });

  return (
    <ClientApi>
      <div className={styles.container}>
        {showRefreshButton ? (
          <button onClick={refresh} className={styles.refreshButton}>
            {t("refreshButton")}
          </button>
        ) : (
          <div className={styles.loaderAnimation} role="status"></div>
        )}
      </div>
    </ClientApi>
  );
}

export default Loader;
