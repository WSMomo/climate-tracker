// import { useEffect, useState } from "react";
import styles from "./GridItem.module.css";
import {
  // LineChart,
  // Line,
  // CartesianGrid,
  // XAxis,
  // YAxis,
  // Legend,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { useData } from "../../../hooks/useData";

interface Props {
  children: React.ReactNode;
  graphicTitle: string;
  dataKey: string;
  url: string;
}

export default function GridItem({
  children,
  url,
  dataKey,
  graphicTitle,
}: Props) {
  // const data = useData(METHANE_API);
  const data = useData(url);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{children}</h2>
      {data !== undefined && (
        <ResponsiveContainer>
          <AreaChart
            data={data[graphicTitle]}
            // margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            {/* <XAxis dataKey="date" /> */}
            {/* <YAxis /> */}
            <Tooltip cursor={false} />
            {/* <Legend /> */}
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
