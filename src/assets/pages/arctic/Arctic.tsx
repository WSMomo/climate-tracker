import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { RootState } from "../../redux/store";

import PageMain from "../../components/pageMain/PageMain";

function Arctic() {
  const data = useSelector((state: RootState) => state.data.arctic);

  if (data.length === 0) return <Loader />;

  return (
    <PageMain data={data} infoTitle={"arctic"}>
      das
    </PageMain>
  );
}

export default Arctic;
