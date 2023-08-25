import { Helmet } from "react-helmet";
import Faq from "../../../components/quizComponents/faq/Faq";
import Hero from "../../../components/quizComponents/hero/Hero";
import Separator from "../../../components/separator/Separator";
import styles from "./quizHome.module.css";
export default function Home() {
  return (
    <div className={styles.home}>
      <Helmet>
        <title>Climate Tracker - Quiz</title>
      </Helmet>
      <Hero />
      <Separator />
      <Faq />
    </div>
  );
}
