import styles from "./loader.module.css";

import ClientApi from "../../clientApi/ClientApi";
import Sidebar from "../sidebar/Sidebar";

function Loader() {
  return (
    <ClientApi>
      <Sidebar />
      <div className={styles.loader} role="status"></div>
    </ClientApi>
  );
}

export default Loader;
