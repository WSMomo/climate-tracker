import styles from "./home.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Loader from "../../components/appComponents/loader/Loader";
import HomeDescription from "../../components/appComponents/homeDescription/HomeDescription";
import GridItems from "../../components/appComponents/gridItems/GridItems";
import Footer from "../../components/footer/Footer";
import Transition from "../../components/transition/Transition";
import { Helmet } from "react-helmet";
function Home() {
  const allDataLoaded = useSelector(
    (state: RootState) => state.data.allDataLoaded
  );

  if (!allDataLoaded) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Climate Tracker</title>
      </Helmet>
      <Transition>
        <div className={styles.container}>
          <HomeDescription />
          <GridItems />
          <Footer />
        </div>
      </Transition>
    </>
  );
}

export default Home;
