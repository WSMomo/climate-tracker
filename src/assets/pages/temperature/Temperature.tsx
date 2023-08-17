// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";

// import Sidebar from "../../components/sidebar/Sidebar";
// import Loader from "../../components/loader/Loader";
// import Slider from "../../components/slider/Slider";
// import Chart from "../../components/chart/Chart";
// import TemperatureSourceInfo from "./TemperatureSourceInfo";

// import styles from "./temperature.module.css";
// import { useSlider } from "../../hooks/useSlider";
// import { useMinMaxValue } from "../../hooks/useMinMaxValue";
// import { TemperatureType } from "../../global/types/temperatureType";

function Temperature() {
  return <></>;
  // const data = useSelector((state: RootState) => state.data.temperature);
  // const getDataProperty = (dataPoint: TemperatureType) => {
  //   if (dataPoint.time) {
  //     return dataPoint.time;
  //   } else {
  //     return undefined;
  //   }
  // };
  // const { minValue: minYear, maxValue: maxYear } = useMinMaxValue(data, "time");

  // const {
  //   minValueSelected: minYearSelected,
  //   maxValueSelected: maxYearSelected,
  //   handleChangeSlider,
  // } = useSlider(minYear, maxYear);

  // if (data.length === 0) return <Loader />;

  // return (
  //   <div className={styles.container}>
  //     <Sidebar />
  //     {minYear && maxYear && (
  //       <Slider
  //         minYear={minYear}
  //         maxYear={maxYear}
  //         handleChangeSlider={handleChangeSlider}
  //       />
  //     )}

  //     {/* CHECK EMPTY DATA */}
  //     {data.length > 0 && minYearSelected && maxYearSelected && (
  //       <Chart
  //         data={data}
  //         minYearSelected={minYearSelected}
  //         maxYearSelected={maxYearSelected}
  //         dataKey="station"
  //         color="#FF5733"
  //         secondDataKey={"land"}
  //         secondColor="blue"
  //         dataProprierty={getDataProperty}
  //       />
  //     )}
  //     <TemperatureSourceInfo />
  //   </div>
  // );
}

export default Temperature;
