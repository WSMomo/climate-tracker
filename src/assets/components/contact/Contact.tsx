import styles from "./contact.module.css";

interface Props {
  contactKey: {
    title: string;
    img: string;
    url: string;
  };
}
export function Contact({ contactKey }: Props) {
  return (
    <div className={styles.container}>
      <a href={contactKey.url} target="_blank">
        <img
          src={contactKey.img}
          alt={contactKey.title}
          className={styles.img}
        />
      </a>
    </div>
  );
}
