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

  return (
    <div className="text-white">
      <Sidebar />

      <div>
        <form className="flex flex-col justify-center items-center">
          <label htmlFor="startDate">From</label>
          <input
            name="startDate"
            className="text-black"
            type="number"
            min={minYear && minYear}
            max={maxYearSelected && maxYearSelected - 1}
            value={minYearSelected && minYearSelected}
            onChange={(e) => setMinYearSelected(+e.target.value)}
          />
          <label htmlFor="endDate">To</label>
          <input
            name="endDate"
            className="text-black"
            type="number"
            min={minYearSelected && minYearSelected + 1}
            max={maxYear && maxYear}
            value={maxYearSelected && maxYearSelected}
            onChange={(e) => setMaxYearSelected(+e.target.value)}
          />
        </form>
      </div>

      {/* CHECK EMPTY DATA */}
      {data.length > 0 &&
        minYearSelected &&
        minYearSelected > 0 &&
        maxYearSelected &&
        maxYearSelected > 0 && (
          <ResponsiveContainer width={600} height={300}>
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
