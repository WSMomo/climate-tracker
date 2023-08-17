import GridItem from "../../components/gridItem/GridItem";
import styles from "./Home.module.css";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
function Home() {
  const dati = useSelector((state: RootState) => state.data.temperature);
  useEffect(() => {
    console.log(dati);
  }, [dati]);
  return (
    <div className={styles.container}>
      <GridItem dataKey="land" color="#FF5733" title="temperature">
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
