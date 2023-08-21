import { TooltipProps } from "recharts";
import styles from "./curstomTooltip.module.css";

import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) {
  if (active) {
    return (
      <div className={styles.container}>
        <p className="">{`Year: ${
          label[0] + label[1] + label[2] + label[3]
        }`}</p>
        <p className="desc">{payload?.[0].value}&deg;C</p>
      </div>
    );
  }
  return null;
}

export default CustomTooltip;
