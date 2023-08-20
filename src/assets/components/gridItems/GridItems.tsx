import { Link } from "react-router-dom";
import { infoComponents } from "../../global/infoComponents";
import PreviewChart from "../previewChart/PreviewChart";
import styles from "./gridItems.module.css";
import HomePageImage from "../quizComponents/HomePageImage";
function GridItems() {
  return (
    <div className={styles.container} id="grids">
      <Link
        to="/quiz"
        className="bg-secondary-color rounded-xl p-2 hover:opacity-75 min-h-fit"
      >
        <h2 className="text-text-color text-2xl text-left p-6">Quiz</h2>
        <div className="w-full h-max  flex flex-col justify-center items-center">
          <HomePageImage />
          <div className="text-text-color text-xl text-center p-4">
            Take the quiz to test you knowledge about climate change
          </div>
        </div>
      </Link>

      <PreviewChart infoTitle={infoComponents.temperature.title} />
      <PreviewChart infoTitle={infoComponents.co2.title} />
      <PreviewChart infoTitle={infoComponents.methane.title} />
      <PreviewChart infoTitle={infoComponents.no2.title} />
      <PreviewChart infoTitle={infoComponents.arctic.title} />
    </div>
  );
}

export default GridItems;
