import { Link } from "react-router-dom";
import styles from "./xsidebarLink.module.css";
import { useDispatch } from "react-redux";
import { setShowSidebar } from "../../../redux/dataSlice";

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
