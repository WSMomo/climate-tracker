import styles from "./siderbar.module.css";
import { useSelector } from "react-redux";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SidebarLink from "../sidebarLink/SidebarLink";
import { RootState } from "../../../redux/store";
import SidebarButton from "../sidebarButton/SidebarButton";
import { useTranslation } from "react-i18next";

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
          <SidebarButton>
            <XMarkIcon className={styles.icon} />
          </SidebarButton>
          <div className={styles.sidebar}>
            <SidebarLink routeLink="/">Home</SidebarLink>
            <SidebarLink routeLink="/temperature">
              {t("temperature")}
            </SidebarLink>
            <SidebarLink routeLink="/co2">{t("co2")}</SidebarLink>
            <SidebarLink routeLink="/methane">{t("methane")}</SidebarLink>
            <SidebarLink routeLink="/no2">{t("no2")}</SidebarLink>
            <SidebarLink routeLink="/arctic">{t("arctic")}</SidebarLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
