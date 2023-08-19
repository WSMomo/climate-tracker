import Sidebar from "../sidebar/Sidebar";
import { useSlider } from "../../hooks/useSlider";
import Slider from "../slider/Slider";
import Loader from "../loader/Loader";

import styles from "./pageMain.module.css";
import { useMinMaxValue } from "../../hooks/useMinMaxValue";
import { infoComponents } from "../../global/infoComponents";
import Chart from "../chart/Chart";
import { InfoComponentsType } from "../../global/types/infoComponentsType";

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

  if (data.length === 0) return <Loader />;

  return (
    <div className={styles.container}>
      <Sidebar />
      {minXAxis && maxXAxis && (
        <Slider
          minYear={minXAxis}
          maxYear={maxXAxis}
          handleChangeSlider={handleChangeSliderX}
        />
      )}

      {/* CHECK EMPTY DATA */}

      {data.length > 0 && minXSelected && maxXSelected && (
        <Chart
          data={data}
          minXSelected={minXSelected}
          maxXSelected={maxXSelected}
          minYSelected={minYAxis}
          maxYSelected={maxYAxis}
          infoTitle={infoTitle}
        />
      )}
      <div className={styles.chartInfo}>{children}</div>
    </div>
  );
}

export default PageMain;
