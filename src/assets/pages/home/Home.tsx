import styles from "./home.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Loader from "../../components/appComponents/loader/Loader";
import HomeDescription from "../../components/appComponents/homeDescription/HomeDescription";
import GridItems from "../../components/appComponents/gridItems/GridItems";
import Footer from "../../components/footer/Footer";
import Transition from "../../components/transition/Transition";
import PageNavTitle from "../../components/navTitle/NavTitle";
function Home() {
  const allDataLoaded = useSelector(
    (state: RootState) => state.data.allDataLoaded
  );

  if (!allDataLoaded) {
    return <Loader />;
  }

  return (
    <>
      <PageNavTitle title="Home" />
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
