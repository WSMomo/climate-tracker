import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
interface Props {
  title: string;
}

function NavTitle({ title }: Props) {
  const { t } = useTranslation("appTranslation");
  return (
    <HelmetProvider>
      {title === "Home" ? (
        <Helmet>
          <title>Climate Tracker</title>
        </Helmet>
      ) : (
        <Helmet>
          <title>CT - {t(`${title}`)}</title>
        </Helmet>
      )}
    </HelmetProvider>
  );
}

export default NavTitle;
