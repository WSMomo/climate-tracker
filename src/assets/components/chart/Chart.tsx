import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TemperatureType } from "../../global/types/temperatureType";

interface Props {
  data: TemperatureType[];
  minYearSelected: number;
  maxYearSelected: number;
  dataKey: string;
  color: string;
  secondDataKey?: string;
  secondColor?: string;
}
function Chart({
  data,
  minYearSelected,
  maxYearSelected,
  dataKey,
  color,
  secondDataKey,
  secondColor,
}: Props) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data.filter(
          (obj) => +obj.time > minYearSelected && +obj.time < maxYearSelected
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
        <Line type="monotone" dataKey={dataKey} stroke={color} dot={false} />
        <Line
          type="monotone"
          dataKey={secondDataKey}
          stroke={secondColor}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
