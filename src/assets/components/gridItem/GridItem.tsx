import styles from "./GridItem.module.css";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import { useData } from "../../../hooks/useData";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCo2 } from "../../redux/dataSlice";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  graphicTitle: string;
  dataKey: string;
  url: string;
  color: string;
  titleLink: string;
}

function GridItem({
  children,
  url,
  dataKey,
  graphicTitle,
  color,
  titleLink,
}: Props) {
  const data = useData(url);

  const dispatch = useDispatch();
  useEffect(() => {
    if (data !== undefined) {
      console.log(children);
      switch (children) {
        case "Temperature":
          console.log(data["result"]);
          dispatch(setCo2(data["result"]));
          break;
        default:
          break;
      }
    }
  }, [children, data, dispatch]);

  return (
    <div className={styles.container}>
      <Link to={titleLink}>
        <h2 className={styles.title}>{children}</h2>
        {data !== undefined && (
          <ResponsiveContainer width="100%" height="80%">
            <LineChart
              data={data[graphicTitle]}
              margin={{ top: 10, bottom: 20 }}
            >
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
    </div>
  );
}
export default GridItem;
