import { TooltipProps } from "recharts";
// for recharts v2.1 and above
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

// function filterValue(value: string) {
//   switch (value.toLowerCase()) {
//     case "station":
//       return "";
//     default:
//       return "y";
//   }
// }

function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) {
  if (active) {
    return (
      <div className="bg-main-color flex flex-col text-center justify-center items-center p-2 rounded-md">
        <p className="label">{`Year: ${
          label[0] + label[1] + label[2] + label[3]
        }`}</p>
        <p className="desc">{payload?.[0].value}&deg;C</p>
      </div>
    );
  }
  return null;
}

export default CustomTooltip;
