import { useSelector } from "react-redux";
import GridItem from "../../components/gridItem/GridItem";
import styles from "./home.module.css";
import { RootState } from "../../redux/store";
import Loader from "../../components/loader/Loader";

function Home() {
  const allDataLoaded = useSelector(
    (state: RootState) => state.data.allDataLoaded
  );

  if (!allDataLoaded) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <GridItem
        dataKey="land"
        color="#FF5733"
        title="temperature"
        secondDataKey="station"
        secondColor="#0057FF"
      >
        Temperature
      </GridItem>
      <GridItem dataKey="trend" color="#339933" title="co2">
        Co2
      </GridItem>
      <GridItem dataKey="average" color="#FF9900" title="methane">
        Methane
      </GridItem>
      <GridItem dataKey="average" color="#FF0000" title="no2">
        NO2
      </GridItem>
      <GridItem dataKey="extent" color="#66CCFF" title="arctic">
        Arctic
      </GridItem>
    </div>
  );
}

export default Home;
