import Faq from "../../components/quizComponents/Faq";
import Hero from "../../components/quizComponents/Hero";
import Separator from "../../components/separator/Separator";

export default function Home() {
  return (
    <div className="bg-main-color text-secondary-color w-4/5 md:w-3/5 max-w-screen-md min-h-fit p-4 flex flex-col items-center text-center">
      <Hero />
      <Separator />
      <Faq />
    </div>
  );
}
