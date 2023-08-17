import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Loader from "../../components/loader/Loader";
import Slider from "../../components/slider/Slider";
import Chart from "../../components/chart/Chart";
import TemperatureSourceInfo from "./TemperatureSourceInfo";

import styles from "./temperature.module.css";

function Temperature() {
  const data = useSelector((state: RootState) => state.data.temperature);
  const yearArray: number[] = [];

  const [maxYear, setMaxYear] = useState<number>();
  const [minYear, setMinYear] = useState<number>();

  const [minYearSelected, setMinYearSelected] = useState<number>();
  const [maxYearSelected, setMaxYearSelected] = useState<number>();

  useEffect(() => {
    if (data.length > 0) {
      data.map((data) => yearArray.push(+data.time));
      setMaxYear(Math.floor(Math.max(...yearArray)));
      setMinYear(Math.floor(Math.min(...yearArray)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    setMinYearSelected(minYear);
    setMaxYearSelected(maxYear);
  }, [maxYear, minYear]);

  function handleChangeSlider(value: number[]) {
    setMinYearSelected(value[0]);
    setMaxYearSelected(value[1]);
  }

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
        />
      )}
      <TemperatureSourceInfo />
    </div>
  );
}

export default Temperature;
