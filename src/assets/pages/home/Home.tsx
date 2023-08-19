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
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full h-screen text-text-color flex flex-col justify-center items-center">
        <h1 className="text-6xl p-4">Welcome to Climate Tracker</h1>
        <h2 className="text-2xl pb-8">Your Window into Changing Earth</h2>
        <p className="w-1/2 text-center text-xl">
          Explore Earth's changes through graphs on temperature, polar ice,
          methane, NO2, and CO2 over the years. Gain awareness and advocate for
          a sustainable future.
          <p className="mt-4">
            Scroll down and begin your journey with us today!
          </p>
        </p>
      </div>
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
    </div>
  );
}

export default Home;
