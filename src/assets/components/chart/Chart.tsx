// import {
//   CartesianGrid,
//   Line,
//   LineChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
// import { TemperatureType } from "../../global/types/temperatureType";
// import { ArcticType } from "../../global/types/arcticType";

// type Data = TemperatureType | ArcticType;

// interface Props {
//   data: Data[];
//   dataProprierty: keyof Data;
//   minYearSelected: number;
//   maxYearSelected: number;
//   dataKey: string;
//   color: string;
//   secondDataKey?: string;
//   secondColor?: string;
// }

// function Chart({
//   data,
//   minYearSelected,
//   maxYearSelected,
//   dataKey,
//   color,
//   secondDataKey,
//   secondColor,
//   dataProprierty,
// }: Props) {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <LineChart
//         data={data.filter(
//           (obj) =>
//             +obj.time > minYearSelected &&
//             +obj[dataProprierty] < maxYearSelected
//         )}
//         margin={{ top: 10, bottom: 20 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis
//           dataKey="time"
//           tickFormatter={(value) => value.substring(0, 4)}
//         />
//         <YAxis type="number" domain={[-2, 1]} />
//         <Tooltip cursor={false} />
//         <Line type="monotone" dataKey={dataKey} stroke={color} dot={false} />
//         <Line
//           type="monotone"
//           dataKey={secondDataKey}
//           stroke={secondColor}
//           dot={false}
//         />
//       </LineChart>
//     </ResponsiveContainer>
//   );
// }

// export default Chart;
