import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { RootState } from "../../redux/store";
import styles from "../pages.module.css";
import PageMain from "../../components/pageMain/PageMain";
import PageTitle from "../../components/pageTitle/PageTitle";
import SourceInfo from "../../components/sourceInfo/SourceInfo";
import PageInfo from "../../components/pageInfo/PageInfo";
import { useTranslation } from "react-i18next";
function Arctic() {
  const data = useSelector((state: RootState) => state.data.arctic);
  const { t } = useTranslation("arctic");
  if (data.length === 0) return <Loader />;

  return (
    <div className={styles.pageContainer}>
      <PageTitle>{t("pageTitle")}</PageTitle>
      <PageMain data={data} infoTitle={"arctic"}>
        {t("pageMain")}
      </PageMain>
      ;
      <PageInfo buttonText={t("learnMoreButton")}>
        <h3>{t("h3_first")}</h3>
        <p>{t("p_first")}</p>
        <h3>{t("h3_second")}</h3>
        <p>{t("p_second")}</p>
        <p>{t("p_third")}</p>
        <SourceInfo>
          <br />
          <a href={t("sourceInfoLink")} target="_blank" className={styles.link}>
            {t("sourceInfoDescription")}
          </a>
        </SourceInfo>
      </PageInfo>
    </div>
  );
}

export default Arctic;
