import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Loader from "../../components/loader/Loader";

import PageMain from "../../components/pageMain/PageMain";
import PageTitle from "../../components/pageTitle/PageTitle";
import styles from "../pages.module.css";
import PageInfo from "../../components/pageInfo/PageInfo";
import SourceInfo from "../../components/sourceInfo/SourceInfo";

function No2() {
  const data = useSelector((state: RootState) => state.data.no2);

  if (data.length === 0) return <Loader />;
  return (
    <div className={styles.pageContainer}>
      <PageTitle>
        Globally, 40% of total N2O emissions come from human activities
      </PageTitle>
      <PageMain data={data} infoTitle="no2" removeFirst={true}>
        This chart provides on a monthly basis, the amount of nitrous oxide in
        the atmosphere from 2001 to the present. Expressed as a mole fraction in
        dry air, parts per million (ppm).
      </PageMain>
      <PageInfo buttonText="Learn More About N2O">
        <h3>Nitrous Oxide Emissions</h3>
        <p>
          Nitrous oxide is a gas that is produced by the combustion of fossil
          fuel and solid waste, nitrogen-base fertilizers, sewage treatment
          plants, natural processes, and other agricultural and industrial
          activities.
        </p>
        <p>
          It is the third largest heat-trapping gas in the atmosphere and the
          biggest ozone-destroying compound emitted by human activities.
        </p>
        <SourceInfo>
          <br />
          <a
            href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases#nitrous-oxide"
            target="_blank"
            className={styles.link}
          >
            epa.gov
          </a>
        </SourceInfo>
      </PageInfo>
    </div>
  );
}

export default No2;
