import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Loader from "../../components/appComponents/loader/Loader";
import HomeDescription from "../../components/appComponents/homeDescription/HomeDescription";
import GridItems from "../../components/appComponents/gridItems/GridItems";
import styles from "./home.module.css";
import Footer from "../../components/footer/Footer";
function Home() {
  const allDataLoaded = useSelector(
    (state: RootState) => state.data.allDataLoaded
  );

  if (!allDataLoaded) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <HomeDescription />
      <GridItems />
      <Footer />
    </div>
  );
}

export default Home;
