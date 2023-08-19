import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { RootState } from "../../redux/store";
import styles from "../pages.module.css";

import PageMain from "../../components/pageMain/PageMain";
import PageTitle from "../../components/pageTitle/PageTitle";
import SourceInfo from "../../components/sourceInfo/SourceInfo";
import PageInfo from "../../components/pageInfo/PageInfo";
function Methane() {
  const data = useSelector((state: RootState) => state.data.methane);

  if (data.length === 0) return <Loader />;
  return (
    <div className={styles.pageContainer}>
      <PageTitle>Methane Emissions Continue to Rise</PageTitle>
      <PageMain data={data} infoTitle={"methane"} removeFirst={true}>
        This chart provides on a monthly basis, the amount of methane in the
        atmosphere from 1983 to the present. Expressed as a mole fraction in dry
        air, parts per million (ppm).
      </PageMain>
      <PageInfo buttonText="Learn More About Methane">
        <h3>Methane Emissions</h3>
        <br />
        <p>
          Methane is a flammable gas formed by geological and biological
          processes. Some of the natural ones are leaks from natural gas systems
          and wetlands.
        </p>
        <p>
          50-65% of total global methane emissions come from human activities.
          These include livestock, agriculture, oil and gas systems, waste from
          homes and businesses, landfills, and so on.
        </p>
        <p>
          Methane is a gas with a global warming potential several times
          stronger than of CO2. For more than 650,000 years, methane
          concentration in the atmosphere was between 350 – 800 ppb. From the
          beginning of the industrial revolution, human activities have
          increased this amount by around 150%.
        </p>
        <SourceInfo>
          <br />
          <a
            href="https://earthobservatory.nasa.gov/images/146978/methane-emissions-continue-to-rise"
            target="_blank"
          >
            earthobservatory.nasa.gov
          </a>
          <br />
          <a
            href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases#methane"
            target="_blank"
          >
            epa.gov
          </a>
        </SourceInfo>
      </PageInfo>
    </div>
  );
}

export default Methane;
