import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import Loader from "../../components/loader/Loader";
import TemperatureSourceInfo from "./TemperatureSourceInfo";

import PageMain from "../../components/pageMain/PageMain";

function Temperature() {
  const data = useSelector((state: RootState) => state.data.temperature);

  if (data.length === 0) return <Loader />;

  return (
    <>
      <PageMain data={data} infoTitle={"temperature"}>
        <TemperatureSourceInfo />
      </PageMain>
    </>
  );
}

export default Temperature;
