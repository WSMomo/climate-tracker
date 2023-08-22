import styles from "./curstomTooltip.module.css";
import { TooltipProps } from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";
import { useTranslation } from "react-i18next";
import { getFirstsDigit } from "../../../global/global";
interface Props extends TooltipProps<ValueType, NameType> {
  infoName: string;
}

function CustomTooltip({ active, payload, label, infoName }: Props) {
  const { t } = useTranslation("appTranslation");

  if (active) {
    return (
      <div className={styles.container}>
        <p>{`${t("date")}: ${getFirstsDigit(label)}`}</p>

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
