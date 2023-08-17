import styles from "./gridItem.module.css";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ClientApi from "../clientApi/ClientApi";
import { DataState } from "../../redux/dataSlice";

interface Props {
  title: keyof DataState;
  dataKey: string;
  color: string;
  children: React.ReactNode;
  secondDataKey?: string;
  secondColor?: string;
}

function GridItem({
  title,
  dataKey,
  color,
  children,
  secondDataKey,
  secondColor,
}: Props) {
  const data = useSelector((state: RootState) => state.data[title]);

  if (!Array.isArray(data)) {
    console.log(data);
    return <div>Error</div>;
  }

  return (
    <ClientApi className={styles.container}>
      <Link to={"/" + title}>
        <h2 className={styles.title}>{children}</h2>
        {data !== undefined && (
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={data} margin={{ top: 10, bottom: 20 }}>
              <Line
                className={styles.line}
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                dot={false}
              />
              {secondDataKey && (
                <Line
                  className={styles.line}
                  type="monotone"
                  dataKey={secondDataKey}
                  stroke={secondColor}
                  dot={false}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        )}
      </Link>
    </ClientApi>
  );
}
export default GridItem;
