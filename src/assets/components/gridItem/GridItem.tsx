import styles from "./GridItem.module.css";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
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
}

function GridItem({ title, dataKey, color, children }: Props) {
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
              <Tooltip cursor={false} />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </Link>
    </ClientApi>
  );
}
export default GridItem;
