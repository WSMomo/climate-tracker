import Separator from "../../../separator/Separator";
import styles from "./sourceInfo.module.css";

interface Props {
  children?: React.ReactNode;
}

function SourceInfo({ children }: Props) {
  return (
    <>
      <Separator />

      <div className={styles.container}>
        Sources: <br />
        <a
          href="https://global-warming.org/"
          target="_blank"
          className={styles.link}
        >
          global-warming.org
        </a>
        {children}
      </div>
    </>
  );
}

export default SourceInfo;
