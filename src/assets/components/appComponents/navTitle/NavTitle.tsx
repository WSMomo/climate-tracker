import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
interface Props {
  infoTitle: string;
}

function PageNavTitle({ infoTitle }: Props) {
  const { t } = useTranslation("appTranslation");
  return (
    <Helmet>
      <title>Climate Tracker - {t(`${infoTitle}`)}</title>
    </Helmet>
  );
}

export default PageNavTitle;
