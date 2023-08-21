import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import PageTitle from "../pageTitle/PageTitle";
import PageMain from "../pageMain/PageMain";

import styles from "./pages.module.css";

import i18next from "i18next";
import { RootState } from "../../../redux/store";
import { InfoState } from "../../../redux/dataSlice";
import { infoComponents } from "../../../global/infoComponents";
import Loader from "../loader/Loader";
import SourceLink from "../source/sourceLink/SourceLink";
import SourceInfo from "../source/sourceInfo/SourceInfo";
import PageInfo from "../pageInfo/PageInfo";

interface Props {
  infoTitle: keyof InfoState;
  removeFirst?: boolean;
}

function PageRender({ infoTitle, removeFirst }: Props) {
  const data = useSelector((state: RootState) => state.data[infoTitle]);
  const { t, i18n } = useTranslation(infoComponents[infoTitle].title);
  console.log(t("pageTitle"));
  console.log(i18n.exists("pageTitle"));
  console.log(i18next.exists("pageTitle"));
  console.log(i18n.exists("pageTitle"));

  if (data.length === 0) return <Loader />;
  return (
    <div className={styles.pageContainer}>
      <PageTitle>{t("pageTitle")}</PageTitle>
      {removeFirst ? (
        <PageMain data={data} infoTitle={infoComponents[infoTitle].title}>
          {t("pageMain")}
        </PageMain>
      ) : (
        <PageMain
          data={data}
          infoTitle={infoComponents[infoTitle].title}
          removeFirst={true}
        >
          {t("pageMain")}
        </PageMain>
      )}
      <PageInfo buttonText={t("learnMoreButton")}>
        <h3>{t("h3_first")}</h3>
        <p>{t("p_first")}</p>
        <h3>{t("h3_second")}</h3>
        <p>{t("p_second")}</p>
        <p>{t("p_third")}</p>
        <SourceInfo>
          <br />
          <SourceLink url={t("sourceInfoLink")}>
            {t("sourceInfoDescription")}
          </SourceLink>
        </SourceInfo>
      </PageInfo>
    </div>
  );
}

export default PageRender;
