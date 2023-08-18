import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { RootState } from "../../redux/store";

import PageMain from "../../components/pageMain/PageMain";
function Methane() {
  const data = useSelector((state: RootState) => state.data.methane);

  if (data.length === 0) return <Loader />;
  return (
    <>
      <PageMain data={data} infoTitle={"methane"} removeFirst={true}>
        das
      </PageMain>
    </>
  );
}

export default Methane;
