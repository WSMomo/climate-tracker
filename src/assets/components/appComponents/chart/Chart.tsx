import styles from "./chart.module.css";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "../customTooltip/CustomTooltip";
import {
  InfoComponentsType,
  infoComponents,
} from "../../../global/infoComponents";
import { getFirstsDigit } from "../../../global/global";

interface Props {
  data: InfoComponentsType[];
  minXSelected: number;
  maxXSelected: number;
  minY: number;
  maxY: number;
  infoTitle: string;
}

function Chart({
  data,
  minXSelected,
  maxXSelected,
  minY,
  maxY,
  infoTitle,
}: Props) {
  // COLOR FOR LINE CHARTS
  const minLineColor = "#4ad1e3";
  const maxLineColor = "#b01602";

  // FILTER THE DATA by SLIDER
  const filteredData = data.filter(
    (obj) =>
      +obj[infoComponents[infoTitle].dataProperty as keyof typeof obj] >
        minXSelected &&
      +obj[infoComponents[infoTitle].dataProperty as keyof typeof obj] <
        maxXSelected
  );
  return (
    <ResponsiveContainer width="100%" height={300} className={styles.container}>
      <LineChart data={filteredData} margin={{ top: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={infoComponents[infoTitle].dataProperty}
          tickFormatter={(value) => getFirstsDigit(value)}
        />
        <YAxis type="number" domain={[minY, maxY]} />
        <Tooltip
          cursor={false}
          wrapperStyle={{ outline: "none" }}
          content={
            <CustomTooltip infoName={infoComponents[infoTitle].infoName} />
          }
        />
        <defs>
          <linearGradient id="colorUv" x1="0%" y1="100%">
            <stop offset="0%" stopColor={minLineColor} />
            <stop offset="100%" stopColor={maxLineColor} />
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
