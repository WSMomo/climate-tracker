import Faq from "../../../components/quizComponents/faq/Faq";
import Hero from "../../../components/quizComponents/hero/Hero";
import Separator from "../../../components/separator/Separator";
import styles from "./quizHome.module.css";
export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Separator />
      <Faq />
    </div>
  );
}
