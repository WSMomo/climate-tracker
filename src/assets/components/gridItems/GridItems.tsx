import GridItem from "../gridItem/GridItem";
import styles from "./gridItems.module.css";
function GridItems() {
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
      <GridItem dataKey="trend" color="#FF9900" title="methane">
        Methane
      </GridItem>
      <GridItem dataKey="trend" color="#FF0000" title="no2">
        NO2
      </GridItem>
      <GridItem dataKey="extent" color="#66CCFF" title="arctic">
        Arctic
      </GridItem>
    </div>
  );
}

export default GridItems;
