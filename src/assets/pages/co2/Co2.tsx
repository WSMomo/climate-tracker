import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Loader from "../../components/loader/Loader";
import PageMain from "../../components/pageMain/PageMain";
function Co2() {
  const data = useSelector((state: RootState) => state.data.co2);

  if (data.length === 0) return <Loader />;

  return (
    <PageMain data={data} infoTitle="co2">
      ds
    </PageMain>
  );
}

export default Co2;
