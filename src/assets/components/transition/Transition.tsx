import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "./transition.module.css";
interface Props {
  children: ReactNode;
}
function Transition({ children }: Props) {
  return (
    <motion.div
      className={styles.transition}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}

export default Transition;
