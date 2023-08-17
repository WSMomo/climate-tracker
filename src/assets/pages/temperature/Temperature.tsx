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
    <div className="text-white flex flex-col justify-center items-center w-3/4 max-w-[900px] h-full">
      <Sidebar />

      <div className="w-[600px] h-12">
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
          <ResponsiveContainer width={900} height={300}>
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
      <div className="w-full">
        Source: GISTEMP Team, 2020: GISS Surface Temperature Analysis (GISTEMP),
        version 4. NASA Goddard Institute for Space Studies. Dataset accessed
        20YY-MM-DD at{" "}
        <a href="https://data.giss.nasa.gov/gistemp/">
          https://data.giss.nasa.gov/gistemp/
        </a>
        .<br /> Source data 1880 - present: Lenssen, N., G. Schmidt, J. Hansen,
        M. Menne, A. Persin, R. Ruedy, and D. Zyss, 2019: Improvements in the
        GISTEMP uncertainty model. J. Geophys. Res. Atmos., 124, no. 12,
        6307-6326, doi:10.1029/2018JD029522. Source data year 1 – 1979:
        <a href="https://earthdata.nasa.gov/">https://earthdata.nasa.gov/</a>
      </div>
    </div>
  );
}

export default Temperature;
