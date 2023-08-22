import styles from "./accordion.module.css";
import { useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Accordion({ title, children }: Props) {
  const [isHidden, setIsHidden] = useState(true);
  function handleClick() {
    setIsHidden(!isHidden);
  }

  return (
    <div
      className={`
        ${styles.accordion} 
        ${isHidden ? styles.hiddenAccordion : styles.visibleAccordion}`}
    >
      {/* ACCORDION TITLE */}
      <h2 onClick={handleClick} className={styles.title}>
        {title}
      </h2>
      {/* ACCORDION DESCRIPTION */}
      <div
        className={`${isHidden ? styles.hiddenContent : ""} ${styles.content}`}
      >
        {children}
      </div>
    </div>
  );
}
