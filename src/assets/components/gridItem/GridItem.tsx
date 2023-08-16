// import { useEffect, useState } from "react";
import styles from "./GridItem.module.css";
import {
  LineChart,
  Line,
  // CartesianGrid,
  // XAxis,
  // YAxis,
  // Legend,
  Tooltip,
  ResponsiveContainer,
  // AreaChart,
  // Area,
} from "recharts";
import { useData } from "../../../hooks/useData";

interface Props {
  children: React.ReactNode;
  graphicTitle: string;
  dataKey: string;
  url: string;
  color: string;
}

export default function GridItem({
  children,
  url,
  dataKey,
  graphicTitle,
  color,
}: Props) {
  // const data = useData(METHANE_API);
  const data = useData(url);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{children}</h2>
      {data !== undefined && (
        <ResponsiveContainer width="100%" height="80%">
          <LineChart data={data[graphicTitle]} margin={{ top: 10, bottom: 20 }}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            {/* <XAxis dataKey="date" /> */}
            {/* <YAxis /> */}
            <Tooltip cursor={false} />
            {/* <Legend /> */}
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              // fill={color}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
