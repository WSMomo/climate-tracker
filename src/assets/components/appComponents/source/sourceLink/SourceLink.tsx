import styles from "./sourceLink.module.css";

interface Props {
  url: string;
  children?: React.ReactNode;
}
function SourceLink({ url, children }: Props) {
  return (
    <a href={url} target="_blank" className={styles.link}>
      {children ? children : url}
    </a>
  );
}

export default SourceLink;
