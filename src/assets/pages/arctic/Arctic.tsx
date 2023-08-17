import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import Loader from "../../components/loader/Loader";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import Slider from "../../components/slider/Slider";
import Chart from "../../components/chart/Chart";
import { useSlider } from "../../hooks/useSlider";
import { useMinMaxValue } from "../../hooks/useMinMaxValue";

function Arctic() {
  const data = useSelector((state: RootState) => state.data.arctic);

  const { minValue: minYear, maxValue: maxYear } = useMinMaxValue(data, "year");
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
          dataKey="area"
          color="#FF5733"
          secondDataKey={"land"}
          secondColor="blue"
          dataProperty="year"
        />
      )}
    </div>
  );
}

export default Arctic;
