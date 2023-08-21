import styles from "./loader.module.css";

import ClientApi from "../../clientApi/ClientApi";

function Loader() {
  return (
    <ClientApi>
      <div className={styles.loader} role="status"></div>
    </ClientApi>
  );
}

export default Loader;
