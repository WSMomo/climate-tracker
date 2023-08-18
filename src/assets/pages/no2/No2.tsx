import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import { RootState } from "../../redux/store";
import Loader from "../../components/loader/Loader";
import { useMinMaxValue } from "../../hooks/useMinMaxValue";
import { useSlider } from "../../hooks/useSlider";
import Slider from "../../components/slider/Slider";
import { useEffect } from "react";
import Chart from "../../components/chart/Chart";

function No2() {
  const data = useSelector((state: RootState) => state.data.no2);

  useEffect(() => {
    console.log(data);
  }, [data]);
  const { minValue: minYear, maxValue: maxYear } = useMinMaxValue(
    data,
    "date",
    true
  );

  const { minValue: minTrend, maxValue: maxTrend } = useMinMaxValue(
    data,
    "trend",
    true
  );

  useEffect(() => {
    console.log(minYear);
    console.log(maxYear);
  }, [maxYear, minYear]);

  const {
    minValueSelected: minYearSelected,
    maxValueSelected: maxYearSelected,
    handleChangeSlider,
  } = useSlider(minYear, maxYear);

  if (data.length === 0) return <Loader />;
  return (
    <div className="text-white flex flex-col justify-center items-center w-11/12 max-w-[900px] h-full mt-4">
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
          dataKey="trend"
          color="#FF5733"
          dataProperty="date"
          minValue={minTrend}
          maxValue={maxTrend}
        />
      )}
    </div>
  );
}

export default No2;
