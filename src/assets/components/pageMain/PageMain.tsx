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
  children: React.ReactNode;
  removeFirst?: boolean;
}

function PageMain({ data, infoTitle, removeFirst, children }: Props) {
  const removeFirstString = removeFirst ? true : false;

  const { minValue: minYear, maxValue: maxYear } = useMinMaxValue(
    data,
    infoComponents[infoTitle].dataProperty,
    removeFirstString
  );
  const { minValue: minDataKey, maxValue: maxDataKey } = useMinMaxValue(
    data,
    infoComponents[infoTitle].datakey,
    removeFirstString
  );

  const {
    minValueSelected: minYearSelected,
    maxValueSelected: maxYearSelected,
    handleChangeSlider,
  } = useSlider(minYear, maxYear);

  if (data.length === 0) return <Loader />;

  return (
    <div className={styles.container}>
      <Sidebar />
      {minYear && maxYear && (
        <Slider
          minYear={minYear}
          maxYear={maxYear}
          handleChangeSlider={handleChangeSlider}
        />
      )}

      {/* CHECK EMPTY DATA */}

      {data.length > 0 && minYearSelected && maxYearSelected && (
        <Chart
          data={data}
          minYearSelected={minYearSelected}
          maxYearSelected={maxYearSelected}
          minValue={minDataKey}
          maxValue={maxDataKey}
          infoTitle={infoTitle}
        />
      )}
      {children}
    </div>
  );
}

export default PageMain;
