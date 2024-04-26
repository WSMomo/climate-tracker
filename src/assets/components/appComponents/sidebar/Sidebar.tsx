import styles from "./siderbar.module.css";
import { useSelector } from "react-redux";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { RootState } from "../../../redux/store";

import SidebarLink from "../sidebarLink/SidebarLink";
import SidebarButton from "../sidebarButton/SidebarButton";
import Languages from "../../languagesSelect/Languages";
import DarkModeButton from "../darkModeButton/DarkModeButton";

function Sidebar() {
  const showSidebar = useSelector((state: RootState) => state.data.showSidebar);
  const [t] = useTranslation("appTranslation");
  return (
    <>
      {/* HIDE SIDEBAR */}
      {!showSidebar && (
        <SidebarButton>
          <Bars3Icon className={styles.icon} />
        </SidebarButton>
      )}
      {/* VISIBLE SIDEBAR */}
      {showSidebar && (
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <div>
              <SidebarButton>
                <XMarkIcon className={styles.icon} />
              </SidebarButton>
            </div>
            <SidebarLink routeLink="/">Home</SidebarLink>
            <SidebarLink routeLink="/quiz">Quiz</SidebarLink>
            <SidebarLink routeLink="/temperature">
              {t("temperature")}
            </SidebarLink>
            <SidebarLink routeLink="/co2">{t("co2")}</SidebarLink>
            <SidebarLink routeLink="/methane">{t("methane")}</SidebarLink>
            <SidebarLink routeLink="/no2">{t("no2")}</SidebarLink>
            {/* <SidebarLink routeLink="/arctic">{t("arctic")}</SidebarLink> */}
            <div className={styles.actions}>
              <Languages />
              <DarkModeButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
