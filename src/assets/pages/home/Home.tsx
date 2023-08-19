import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Loader from "../../components/loader/Loader";
import GridItems from "../../components/gridItems/GridItems";
import HomeDescription from "../../components/homeDescription/HomeDescription";

function Home() {
  const allDataLoaded = useSelector(
    (state: RootState) => state.data.allDataLoaded
  );

  if (!allDataLoaded) {
    return <Loader />;
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <HomeDescription />
      <GridItems />
    </div>
  );
}

export default Home;
