import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { infoComponents } from "../../global/infoComponents";
import { InfoComponentsType } from "../../global/types/infoComponentsType";
import CustomTooltip from "../customTooltip/CustomTooltip";

interface Props {
  data: InfoComponentsType[];
  minXSelected: number;
  maxXSelected: number;
  minYSelected: number;
  maxYSelected: number;
  infoTitle: string;
}

function Chart({
  data,
  minXSelected,
  maxXSelected,
  minYSelected,
  maxYSelected,
  infoTitle,
}: Props) {
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height={300} className="min-h-fit">
      <LineChart
        data={data.filter(
          (obj) =>
            +obj[infoComponents[infoTitle].dataProperty as keyof typeof obj] >
              minXSelected &&
            +obj[infoComponents[infoTitle].dataProperty as keyof typeof obj] <
              maxXSelected
        )}
        margin={{ top: 10, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={infoComponents[infoTitle].dataProperty}
          tickFormatter={(value) => {
            const valueToString = String(value);
            return (
              valueToString[0] +
              valueToString[1] +
              valueToString[2] +
              valueToString[3]
            );
          }}
        />
        <YAxis type="number" domain={[minYSelected, maxYSelected]} />
        <Tooltip
          cursor={false}
          wrapperStyle={{ outline: "none" }}
          content={<CustomTooltip />}
        />
        <defs>
          <linearGradient id="colorUv" x1="0%" y1="100%">
            <stop offset="0%" stopColor="#3c9dd0" />
            <stop offset="100%" stopColor="#ED714D" />
          </linearGradient>
        </defs>
        <Line
          type="monotone"
          stroke="url(#colorUv)"
          dataKey={infoComponents[infoTitle].datakey}
          dot={false}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
