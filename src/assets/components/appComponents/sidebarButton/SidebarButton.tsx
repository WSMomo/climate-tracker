import styles from "./sidebarButton.module.css";
import { useDispatch } from "react-redux";
import { setShowSidebar } from "../../../redux/dataReducer";
interface Props {
  children: React.ReactNode;
}

function SidebarButton({ children }: Props) {
  const dispatch = useDispatch();
  return (
    <button
      className={styles.sidebarButton}
      onClick={() => dispatch(setShowSidebar())}
    >
      {children}
    </button>
  );
}

export default SidebarButton;
