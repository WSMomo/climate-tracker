import { useState } from "react";
import styles from "../page.module.css";
interface Props {
  buttonText: string;
  children: React.ReactNode;
}

function PageInfo({ buttonText, children }: Props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <a
        href="#pageInfo"
        onClick={() => setShow(!show)}
        className={`${show ? styles.hideInfoButton : styles.showInfoButton}`}
      >
        {buttonText}
      </a>
      {show && (
        <div id="pageInfo" className={styles.pageInfoContainer}>
          {children}
        </div>
      )}
    </>
  );
}

export default PageInfo;
