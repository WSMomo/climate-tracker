import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import Sidebar from "../../components/sidebar/Sidebar";
import Loader from "../../components/loader/Loader";
import Slider from "../../components/slider/Slider";
import Chart from "../../components/chart/Chart";
import TemperatureSourceInfo from "./TemperatureSourceInfo";

import styles from "./temperature.module.css";
import { useSlider } from "../../hooks/useSlider";
import { useMinMaxValue } from "../../hooks/useMinMaxValue";

function Temperature() {
  const data = useSelector((state: RootState) => state.data.temperature);

  const { minValue: minYear, maxValue: maxYear } = useMinMaxValue(data, "time");
  const { minValue: minStation, maxValue: maxStation } = useMinMaxValue(
    data,
    "station"
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
          dataKey="station"
          color="#FF5733"
          secondDataKey={"land"}
          secondColor="blue"
          dataProperty="time"
          minValue={minStation}
          maxValue={maxStation}
        />
      )}
      <TemperatureSourceInfo />
    </div>
  );
}

export default Temperature;
