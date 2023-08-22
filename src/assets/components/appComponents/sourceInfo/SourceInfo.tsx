import styles from "./sourceInfo.module.css";

import { useTranslation } from "react-i18next";
import Separator from "../../separator/Separator";
import SourceLink from "../sourceLink/SourceLink";

interface Props {
  children?: React.ReactNode;
}

function SourceInfo({ children }: Props) {
  const { t } = useTranslation("appTranslation");
  return (
    <>
      <Separator />

      <div className={styles.container}>
        {t("sources")}:
        <br />
        <SourceLink url="https://global-warming.org/">
          global-warming.org
        </SourceLink>
        {children}
      </div>
    </>
  );
}

export default SourceInfo;
