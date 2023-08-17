import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ReactSlider from "react-slider";

function Temperature() {
  const data = useSelector((state: RootState) => state.data.co2);
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
    console.log("Max:", maxYear);
  }, [maxYear, minYear]);

  // debug
  useEffect(() => {
    console.log("MaxYearSelected:", maxYearSelected);
    console.log("MinYearSelected:", minYearSelected);
  }, [maxYearSelected, minYearSelected]);

  function handleChangeSlider(value: number[]) {
    setMinYearSelected(value[0]);
    setMaxYearSelected(value[1]);
  }

  return (
    <div className="text-white flex flex-col justify-center items-center w-96">
      <Sidebar />

      <div className="w-96 h-12">
        {minYear && maxYear && (
          <ReactSlider
            className="cursor-pointer"
            thumbClassName="bg-red-500 h-12 w-12 flex justify-center items-center"
            thumbActiveClassName="bg-white text-black"
            trackClassName="bg-white h-2 top-5"
            defaultValue={[minYear, maxYear]}
            min={minYear}
            max={maxYear}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
            onChange={(value) => handleChangeSlider(value)}
            pearling
            minDistance={15}
          />
        )}
      </div>

      {/* CHECK EMPTY DATA */}
      {data.length > 0 &&
        minYearSelected &&
        minYearSelected > 0 &&
        maxYearSelected &&
        maxYearSelected > 0 && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data.filter(
                (obj) =>
                  +obj.time > minYearSelected && +obj.time < maxYearSelected
              )}
              margin={{ top: 10, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                tickFormatter={(value) => value.substring(0, 4)}
              />
              <YAxis type="number" domain={[-2, 1]} />
              <Tooltip cursor={false} />
              <Line
                type="monotone"
                dataKey={"station"}
                stroke={"#FF5733"}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey={"land"}
                stroke={"blue"}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
    </div>
  );
}

export default Temperature;
