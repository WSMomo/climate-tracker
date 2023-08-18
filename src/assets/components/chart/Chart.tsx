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
import { infoComponents } from "../../global/infoComponents";
type Data = TemperatureType | ArcticType | No2Type | Co2Type | MethaneType;

interface Props {
  data: Data[];
  minYearSelected: number;
  maxYearSelected: number;
  minValue: number;
  maxValue: number;
  infoTitle: string;
}

function Chart({
  data,
  minYearSelected,
  maxYearSelected,
  infoTitle,
  minValue,
  maxValue,
}: Props) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data.filter(
          (obj) =>
            +obj[infoComponents[infoTitle].dataProperty as keyof typeof obj] >
              minYearSelected &&
            +obj[infoComponents[infoTitle].dataProperty as keyof typeof obj] <
              maxYearSelected
        )}
        margin={{ top: 10, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {infoComponents[infoTitle].tickFormat ? (
          <XAxis
            dataKey={infoComponents[infoTitle].dataProperty}
            tickFormatter={(value) => value.substring(0, 4)}
          />
        ) : (
          <XAxis dataKey={infoComponents[infoTitle].dataProperty} />
        )}
        <YAxis type="number" domain={[minValue, maxValue]} />
        <Tooltip cursor={false} />
        <Line
          type="monotone"
          dataKey={infoComponents[infoTitle].datakey}
          stroke={infoComponents[infoTitle].color}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey={infoComponents[infoTitle].secondDataKey}
          stroke={infoComponents[infoTitle].secondColor}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
