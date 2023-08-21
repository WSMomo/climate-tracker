import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";
import Loader from "../../components/appComponents/loader/Loader";
import HomeDescription from "../../components/appComponents/homeDescription/HomeDescription";
import GridItems from "../../components/appComponents/gridItems/GridItems";

function Home() {
  const allDataLoaded = useSelector(
    (state: RootState) => state.data.allDataLoaded
  );
  const [darkToggle, setDarkToggle] = useState(false);

  if (!allDataLoaded) {
    return <Loader />;
  }

  return (
    <div
      className={`w-full flex flex-col justify-center items-center text-light-text-color dark:text-dark-text-color bg-light-main-color dark:bg-dark-main-color`}
    >
      <button
        className="text-2xl bg-white"
        onClick={() => setDarkToggle(!darkToggle)}
      >
        Dark Mode
      </button>
      <HomeDescription />
      <GridItems />
    </div>
  );
}

export default Home;
