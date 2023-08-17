import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import Sidebar from "../../components/sidebar/Sidebar";
import { RootState } from "../../redux/store";

function Methane() {
  const data = useSelector((state: RootState) => state.data.methane);

  if (data.length === 0) return <Loader />;
  return (
    <div className="text-white">
      <Sidebar />
      Methane
    </div>
  );
}

export default Methane;
