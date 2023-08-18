import styles from "./pagetitle.module.css";

interface Props {
  children: React.ReactNode;
}

function PageTitle({ children }: Props) {
  return <h2 className={styles.title}>{children}</h2>;
}

export default PageTitle;
