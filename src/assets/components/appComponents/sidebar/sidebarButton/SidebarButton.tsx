import { useDispatch } from "react-redux";
import styles from "./sidebarButton.module.css";
import { setShowSidebar } from "../../../../redux/dataSlice";
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
