import styles from "./curstomTooltip.module.css";
import { TooltipProps } from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

interface Props extends TooltipProps<ValueType, NameType> {
  infoName: string;
}

function CustomTooltip({ active, payload, label, infoName }: Props) {
  if (active) {
    return (
      <div className={styles.container}>
        {typeof label === "string" ? (
          <p>{`Year: ${label[0] + label[1] + label[2] + label[3]}`}</p>
        ) : (
          <p>{`Year: ${label}`}</p>
        )}
        <p>
          {payload?.[0].value}
          {infoName}
        </p>
      </div>
    );
  }
  return null;
}

export default CustomTooltip;
