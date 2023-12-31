import styles from "./contact.module.css";

interface Props {
  contactKey: {
    title: string;
    img: string;
    url: string;
  };
}
function Contact({ contactKey }: Props) {
  return (
    <div className={styles.container}>
      <a
        href={contactKey.url}
        target="_blank"
        title={`Visit my ${contactKey.title}`}
      >
        <img
          src={contactKey.img}
          alt={contactKey.title}
          className={styles.img}
        />
      </a>
    </div>
  );
}

export default Contact;
