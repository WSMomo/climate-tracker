import { infoComponents } from "../../../global/infoComponents";
import PreviewChart from "../gridPreview/previewChart/PreviewChart";
import { PreviewQuiz } from "../gridPreview/previewQuiz/PreviewQuiz";
import styles from "./gridItems.module.css";

function GridItems() {
  return (
    <div className={styles.container} id="grids">
      <PreviewQuiz />
      <PreviewChart infoTitle={infoComponents.temperature.title} />
      <PreviewChart infoTitle={infoComponents.co2.title} />
      <PreviewChart infoTitle={infoComponents.methane.title} />
      <PreviewChart infoTitle={infoComponents.no2.title} />
      <PreviewChart infoTitle={infoComponents.arctic.title} />
    </div>
  );
}

export default GridItems;
