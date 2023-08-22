import styles from "./sidebarLink.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setShowSidebar } from "../../../redux/dataReducer";

interface Props {
  routeLink: string;
  children: React.ReactNode;
}
function SidebarLink({ routeLink, children }: Props) {
  const dispatch = useDispatch();
  return (
    <Link
      to={routeLink}
      className={styles.link}
      onClick={() => dispatch(setShowSidebar())}
    >
      {children}
    </Link>
  );
}

export default SidebarLink;
