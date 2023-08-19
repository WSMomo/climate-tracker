import styles from "./previewChart.module.css";
import { Link } from "react-router-dom";
import ClientApi from "../clientApi/ClientApi";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import { infoComponents } from "../../global/infoComponents";
import { useMinMaxValue } from "../../hooks/useMinMaxValue";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { InfoState } from "../../redux/dataSlice";

interface Props {
  infoTitle: keyof InfoState;
}

function PreviewChart({ infoTitle }: Props) {
  const data = useSelector((state: RootState) => state.data[infoTitle]);

  const { minValue: minXAxis, maxValue: maxXAxis } = useMinMaxValue(
    data,
    infoComponents[infoTitle].dataProperty,
    true
  );

  const chartName = infoTitle[0].toUpperCase() + infoTitle.slice(1);

  if (!Array.isArray(data)) {
    console.log(data);
    return <div>Error</div>;
  }

  return (
    <ClientApi className={styles.container}>
      <Link to={"/" + infoTitle}>
        <h2 className={styles.title}>{chartName}</h2>
        {data !== undefined && (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data.filter(
                (obj) =>
                  +obj[
                    infoComponents[infoTitle].dataProperty as keyof typeof obj
                  ] > minXAxis &&
                  +obj[
                    infoComponents[infoTitle].dataProperty as keyof typeof obj
                  ] < maxXAxis
              )}
              margin={{ top: 10, bottom: 20 }}
            >
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
        )}
      </Link>
    </ClientApi>
  );
}
export default PreviewChart;
