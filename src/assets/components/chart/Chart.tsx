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
import PageTitle from "../pageTitle/PageTitle";

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
  return (
    <ResponsiveContainer width="100%" height={300}>
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
        {infoComponents[infoTitle].tickFormat ? (
          <XAxis
            dataKey={infoComponents[infoTitle].dataProperty}
            tickFormatter={(value) => value.substring(0, 4)}
          />
        ) : (
          <XAxis dataKey={infoComponents[infoTitle].dataProperty} />
        )}
        <YAxis type="number" domain={[minYSelected, maxYSelected]} />
        <Tooltip
          cursor={false}
          wrapperStyle={{ outline: "none" }}
          content={<PageTitle>dsa</PageTitle>}
        />
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
