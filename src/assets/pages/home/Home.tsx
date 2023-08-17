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

      {/* <GridItem
        graphicTitle="co2"
        dataKey="trend"
        url={CO2_URL}
        color="#339933"
        titleLink="/co2"
      >
        CO2
      </GridItem>
      <GridItem
        graphicTitle="methane"
        dataKey="average"
        url={METHANE_URL}
        color="#FF9900"
        titleLink="/methane"
      >
        Methane
      </GridItem>
      <GridItem
        graphicTitle="nitrous"
        dataKey="average"
        url={NO2_URL}
        color="#FF0000"
        titleLink="/no2"
      >
        NO2
      </GridItem>
      <GridItem
        graphicTitle="arcticData"
        dataKey="extent"
        url={ARCTIC_URL}
        color="#66CCFF"
        titleLink="/arctic"
      >
        Arctic
      </GridItem> */}
    </div>
  );
}

export default Home;
