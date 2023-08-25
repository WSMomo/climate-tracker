import styles from "./pages.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { InfoState } from "../../../redux/dataReducer";
import { infoComponents } from "../../../global/infoComponents";

import PageTitle from "../pageTitle/PageTitle";
import PageMain from "../pageMain/PageMain";
import Loader from "../loader/Loader";
import SourceInfo from "../sourceInfo/SourceInfo";
import PageInfo from "../pageInfo/PageInfo";
import SourceLink from "../sourceLink/SourceLink";
import ReturnToTheTop from "../returnToTheTop/ReturnToTheTop";
import Transition from "../../transition/Transition";
import PageNavTitle from "../navTitle/NavTitle";

interface Props {
  infoTitle: keyof InfoState;
  removeFirst?: boolean;
}

function PageRender({ infoTitle, removeFirst }: Props) {
  const data = useSelector((state: RootState) => state.data[infoTitle]);
  const { t } = useTranslation(infoComponents[infoTitle].title);
  console.log(infoTitle);
  // CHECK IF KEY EXISTS
  const pageTitleExist = "pageTitle" === t("pageTitle");
  const pageMainExist = "pageMain" === t("pageMain");
  const h3_firstExist = "h3_first" === t("h3_first");
  const p_firstExist = "p_first" === t("p_first");
  const h3_secondExist = "h3_second" === t("h3_second");
  const p_secondExist = "p_second" === t("p_second");
  const p_thirdExist = "p_third" === t("p_third");
  const p_fourthExist = "p_fourth" === t("p_fourth");

  if (data.length === 0) return <Loader />;
  return (
    <>
      <PageNavTitle infoTitle={infoTitle} />
      <Transition>
        <div className={styles.pageContainer}>
          {!pageTitleExist && <PageTitle>{t("pageTitle")}</PageTitle>}
          {!pageMainExist && removeFirst ? (
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
            {!h3_firstExist && <h3>{t("h3_first")}</h3>}
            {!p_firstExist && <p>{t("p_first")}</p>}
            {!h3_secondExist && <h3>{t("h3_second")}</h3>}
            {!p_secondExist && <p>{t("p_second")}</p>}
            {!p_thirdExist && <p>{t("p_third")}</p>}
            {!p_fourthExist && <p>{t("p_fourth")}</p>}
            <SourceInfo>
              <br />
              <SourceLink url={t("sourceInfoLink")}>
                {t("sourceInfoDescription")}
              </SourceLink>
            </SourceInfo>
            <ReturnToTheTop />
          </PageInfo>
        </div>
      </Transition>
    </>
  );
}

export default PageRender;
