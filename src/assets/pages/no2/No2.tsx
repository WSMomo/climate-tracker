import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Loader from "../../components/loader/Loader";

import PageMain from "../../components/pageMain/PageMain";

function No2() {
  const data = useSelector((state: RootState) => state.data.no2);

  if (data.length === 0) return <Loader />;
  return (
    <PageMain data={data} infoTitle="no2" removeFirst={true}>
      sda
    </PageMain>
  );
}

export default No2;
