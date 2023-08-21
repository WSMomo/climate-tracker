import styles from "./siderbar.module.css";
import { useSelector } from "react-redux";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SidebarLink from "../sidebarLink/SidebarLink";
import { RootState } from "../../../redux/store";
import SidebarButton from "../sidebarButton/SidebarButton";

function Sidebar() {
  const showSidebar = useSelector((state: RootState) => state.data.showSidebar);
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
            <SidebarLink routeLink="/temperature">Temperature</SidebarLink>
            <SidebarLink routeLink="/co2">Co2</SidebarLink>
            <SidebarLink routeLink="/methane">Methane</SidebarLink>
            <SidebarLink routeLink="/no2">No2</SidebarLink>
            <SidebarLink routeLink="/arctic">Arctic</SidebarLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
