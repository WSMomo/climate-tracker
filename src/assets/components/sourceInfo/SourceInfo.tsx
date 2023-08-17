import styles from "./sourceInfo.module.css";

interface Props {
  children: React.ReactNode;
}

function SourceInfo({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}

export default SourceInfo;
