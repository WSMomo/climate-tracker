import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
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
  useEffect(() => {
    console.log("Temperature:", data);
  }, [data]);

  return (
    <div className="text-white">
      <Sidebar />
      {data && (
        <ResponsiveContainer width={600} height={300}>
          <LineChart data={data} margin={{ top: 10, bottom: 20 }}>
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
