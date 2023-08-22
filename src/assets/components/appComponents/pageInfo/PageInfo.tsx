import styles from "./pageInfo.module.css";
import { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";

interface Props {
  buttonText: string;
  children: React.ReactNode;
}

function PageInfo({ buttonText, children }: Props) {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* SHOW INFO BUTTON */}
      <a
        href="#pageInfo"
        onClick={() => setShow(!show)}
        className={`${show ? styles.hideInfoButton : styles.showInfoButton}`}
      >
        {show ? (
          <>
            <MinusCircleIcon className={styles.icon} />
            {buttonText}
            <MinusCircleIcon className={styles.icon} />
          </>
        ) : (
          <>
            <PlusCircleIcon className={styles.icon} />
            {buttonText}
            <PlusCircleIcon className={styles.icon} />
          </>
        )}
      </a>

      {/* INFO */}
      {show && (
        <div id="pageInfo" className={styles.pageInfoContainer}>
          {children}
        </div>
      )}
    </>
  );
}

export default PageInfo;
