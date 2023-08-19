import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import Loader from "../../components/loader/Loader";

import PageMain from "../../components/pageMain/PageMain";
import styles from "../pages.module.css";
import SourceInfo from "../../components/sourceInfo/SourceInfo";
import PageInfo from "../../components/pageInfo/PageInfo";
import PageTitle from "../../components/pageTitle/PageTitle";

function Temperature() {
  const data = useSelector((state: RootState) => state.data.temperature);

  if (data.length === 0) return <Loader />;

  return (
    <div className={styles.pageContainer}>
      <PageTitle>
        The 10 warmest years in the historical record have all occurred since
        2010.{" "}
      </PageTitle>
      <PageMain data={data} infoTitle={"temperature"}>
        This chart provides on a monthly basis, the global mean surface
        temperature anomaly from 1880.04 to the present (in celsius).
      </PageMain>
      <PageInfo buttonText="Learn More About global temperature">
        <h3>Global temperature warming rate</h3>
        <p>
          The current global warming rate is not natural. From 1880 to 1981 was
          (0.07°C / 0.13°F) per decade. Since 1981 this rate has increased to
          (0.18°C / 0.32°F)
        </p>
        <h3>About surface temperature</h3>
        <p>
          The concept of an average temperature for the entire globe may seem
          odd. After all, at this very moment, the highest and lowest
          temperatures on Earth are likely more than 100°F (55°C) apart.
          Temperatures vary from night to day and between seasonal extremes in
          the Northern and Southern Hemispheres. This means that some parts of
          Earth are quite cold while other parts are downright hot. To speak of
          the "average" temperature, then, may seem like nonsense. However, the
          concept of a global average temperature is convenient for detecting
          and tracking changes in Earth's energy budget—how much sunlight Earth
          absorbs minus how much it radiates to space as heat—over time.
        </p>
        <p>
          To calculate a global average temperature, scientists begin with
          temperature measurements taken at locations around the globe. Because
          their goal is to track changes in temperature, measurements are
          converted from absolute temperature readings to temperature
          anomalies—the difference between the observed temperature and the
          long-term average temperature for each location and date. Multiple
          independent research groups across the world perform their own
          analysis of the surface temperature data, and they all show a similar
          upward trend.
        </p>
        <p>
          Across inaccessible areas that have few measurements, scientists use
          surrounding temperatures and other information to estimate the missing
          values. Each value is then used to calculate a global temperature
          average. This process provides a consistent, reliable method for
          monitoring changes in Earth's surface temperature over time
        </p>
        <SourceInfo>
          <br />
          <a
            href="https://www.climate.gov/news-features/understanding-climate/climate-change-global-temperature"
            target="_blank"
          >
            climate.gov
          </a>
        </SourceInfo>
      </PageInfo>
    </div>
  );
}

export default Temperature;
