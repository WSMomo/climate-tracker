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
import { No2Type } from "../../global/types/no2Type";
import { Co2Type } from "../../global/types/co2Type";
import { MethaneType } from "../../global/types/methaneType";
type Data = TemperatureType | ArcticType | No2Type | Co2Type | MethaneType;

interface Props {
  data: Data[];
  dataProperty:
    | keyof TemperatureType
    | keyof ArcticType
    | keyof No2Type
    | keyof Co2Type
    | keyof MethaneType;
  minYearSelected: number;
  maxYearSelected: number;
  dataKey: string;
  color: string;
  secondDataKey?: string;
  secondColor?: string;
  minValue: number;
  maxValue: number;
  tickFormat?: boolean;
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
  minValue,
  maxValue,
  tickFormat,
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
        {tickFormat ? (
          <XAxis
            dataKey={dataProperty}
            tickFormatter={(value) => value.substring(0, 4)}
          />
        ) : (
          <XAxis dataKey={dataProperty} />
        )}
        <YAxis type="number" domain={[minValue, maxValue]} />
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
