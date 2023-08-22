import styles from "../preview.module.css";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, YAxis } from "recharts";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "../../../../redux/store";
import { infoComponents } from "../../../../global/infoComponents";
import { useMinMaxValue } from "../../../../hooks/useMinMaxValue";
import { InfoState } from "../../../../redux/dataReducer";
import ClientApi from "../../../clientApi/ClientApi";
interface Props {
  infoTitle: keyof InfoState;
}

function PreviewChart({ infoTitle }: Props) {
  const data = useSelector((state: RootState) => state.data[infoTitle]);

  // COLOR FOR LINE CHARTS
  const minLineColor = "#4ad1e3";
  const maxLineColor = "#b01602";

  // VALUES FOR THE AXIS
  const { minValue: minXAxis, maxValue: maxXAxis } = useMinMaxValue(
    data,
    infoComponents[infoTitle].dataProperty,
    true
  );

  // FILTER THE DATA by SLIDER
  const filteredData = data.filter(
    (obj) =>
      +obj[infoComponents[infoTitle].dataProperty as keyof typeof obj] >
        minXAxis &&
      +obj[infoComponents[infoTitle].dataProperty as keyof typeof obj] <
        maxXAxis
  );

  const { minValue: minYAxis, maxValue: maxYAxis } = useMinMaxValue(
    data,
    infoComponents[infoTitle].datakey,
    true
  );

  const { t } = useTranslation("appTranslation");
  const chartName = t(infoTitle);
  const translatedName = chartName[0].toUpperCase() + chartName.slice(1);

  return (
    <ClientApi className={styles.container}>
      <Link to={"/" + infoTitle}>
        <h2 className={styles.title}>{translatedName}</h2>
        {data !== undefined && (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={filteredData} margin={{ top: 10, bottom: 20 }}>
              <YAxis hide domain={[minYAxis, maxYAxis]} />
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
        )}
      </Link>
    </ClientApi>
  );
}
export default PreviewChart;
