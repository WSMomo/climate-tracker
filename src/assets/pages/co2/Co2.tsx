import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import { RootState } from "../../redux/store";
import Loader from "../../components/loader/Loader";
import { useSlider } from "../../hooks/useSlider";
import { useMinMaxValue } from "../../hooks/useMinMaxValue";
import { useEffect } from "react";
import Slider from "../../components/slider/Slider";
import Chart from "../../components/chart/Chart";
function Co2() {
  const data = useSelector((state: RootState) => state.data.co2);

  const { minValue: minYear, maxValue: maxYear } = useMinMaxValue(data, "year");
  const { minValue: minArea, maxValue: maxArea } = useMinMaxValue(
    data,
    "trend"
  );
  const {
    minValueSelected: minYearSelected,
    maxValueSelected: maxYearSelected,
    handleChangeSlider,
  } = useSlider(minYear, maxYear);

  useEffect(() => {
    console.log(data);
  }, [data]);

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
          dataProperty="year"
          minValue={minArea}
          maxValue={maxArea}
        />
      )}
    </div>
  );
}

export default Co2;
