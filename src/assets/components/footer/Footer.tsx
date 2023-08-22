import styles from "./footer.module.css";
import Contact from "../appComponents/contact/Contact";
import DarkModeButton from "../appComponents/darkModeButton/DarkModeButton";
import Languages from "../languagesSelect/Languages";
import LinkedinIcon from "/img/contacts/linkedin.png";
import GithubIcon from "/img/contacts/gitHub.png";
import WsMomoIcon from "/img/contacts/marcoMomoHome.png";
import ReturnToTheTop from "../appComponents/returnToTheTop/ReturnToTheTop";

const contacts = {
  linkedin: {
    title: "linkedin",
    img: LinkedinIcon,
    url: "https://www.linkedin.com/in/marco-momo-61b08a159/",
  },
  github: {
    title: "github",
    img: GithubIcon,
    url: "https://github.com/wsmomo/",
  },
  website: {
    title: "portfolio",
    img: WsMomoIcon,
    url: "https://wsmomo.github.io/Portfolio-Marco-Momo/",
  },
};

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.actions}>
          <Languages />
          <DarkModeButton />
          <ReturnToTheTop />
        </div>
        <div className={styles.contacts}>
          {Object.keys(contacts).map((contactKey) => {
            const contact = contacts[contactKey as keyof typeof contacts];
            return <Contact contactKey={contact} key={contactKey} />;
          })}
        </div>
        <div className={styles.copyright}>©2023 Marco Momo</div>
      </div>
    </div>
  );
}

export default Footer;
