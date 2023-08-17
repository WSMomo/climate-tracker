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
import { ArcticType } from "../../global/types/arcticType";
type Data = TemperatureType | ArcticType;

interface Props {
  data: Data[];
  dataProperty: keyof TemperatureType | keyof ArcticType;
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
  dataProperty,
}: Props) {
  console.log(dataProperty);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data.filter(
          (obj) =>
            +obj[dataProperty as keyof typeof obj] > minYearSelected &&
            +obj[dataProperty as keyof typeof obj] < maxYearSelected
        )}
        margin={{ top: 10, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={dataKey}
          // tickFormatter={(value) => value.substring(0, 4)}
        />
        <YAxis type="number" domain={[-2, 1]} />
        {/* <YAxis type="number" domain={[-2, 1]} /> */}
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
