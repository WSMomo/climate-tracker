import styles from "./pageMain.module.css";
import {
  InfoComponentsType,
  infoComponents,
} from "../../../global/infoComponents";
import { useMinMaxValue } from "../../../hooks/useMinMaxValue";
import { useSlider } from "../../../hooks/useSlider";
import Chart from "../chart/Chart";
import Loader from "../loader/Loader";
import Sidebar from "../sidebar/Sidebar";
import Slider from "../slider/Slider";

interface Props {
  data: InfoComponentsType[];
  infoTitle: string;
  children?: React.ReactNode;
  removeFirst?: boolean;
}

function PageMain({ data, infoTitle, removeFirst, children }: Props) {
  const removeFirstString = removeFirst ? true : false;

  const { minValue: minXAxis, maxValue: maxXAxis } = useMinMaxValue(
    data,
    infoComponents[infoTitle].dataProperty,
    removeFirstString
  );
  const { minValue: minYAxis, maxValue: maxYAxis } = useMinMaxValue(
    data,
    infoComponents[infoTitle].datakey,
    removeFirstString
  );

  const {
    minValueSelected: minXSelected,
    maxValueSelected: maxXSelected,
    handleChangeSlider: handleChangeSliderX,
  } = useSlider(minXAxis, maxXAxis);

  // CONDITIONAL
  const minAndMaxXAxis = minXAxis && maxXAxis;
  const emptyData = data.length > 0 && minXSelected && maxXSelected;

  if (data.length === 0) return <Loader />;

  return (
    <div className={styles.container}>
      <Sidebar />

      {/* SLIDER */}
      {minAndMaxXAxis && (
        <Slider
          minYear={minXAxis}
          maxYear={maxXAxis}
          handleChangeSlider={handleChangeSliderX}
        />
      )}

      {/* CHECK EMPTY DATA */}
      {emptyData && (
        <Chart
          data={data}
          minXSelected={minXSelected}
          maxXSelected={maxXSelected}
          minY={minYAxis}
          maxY={maxYAxis}
          infoTitle={infoTitle}
        />
      )}
      <div className={styles.chartInfo}>{children}</div>
    </div>
  );
}

export default PageMain;
