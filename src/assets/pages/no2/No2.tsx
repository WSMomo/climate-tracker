import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import { RootState } from "../../redux/store";
import Loader from "../../components/loader/Loader";

function No2() {
  const data = useSelector((state: RootState) => state.data.no2);

  if (data.length === 0) return <Loader />;
  return (
    <div className="text-white">
      <Sidebar />
      No2
    </div>
  );
}

export default No2;
