import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import Loader from "../../components/loader/Loader";
import { RootState } from "../../redux/store";

function Arctic() {
  const data = useSelector((state: RootState) => state.data.arctic);

  if (data.length === 0) return <Loader />;

  return (
    <div className="text-white">
      <Sidebar />
      Arctic
    </div>
  );
}

export default Arctic;
