import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import Loader from "../../components/loader/Loader";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
// import { useMinValue } from "../../hooks/useMinValue";
// import { useMaxValue } from "../../hooks/useMaxValue";

function Arctic() {
  const data = useSelector((state: RootState) => state.data.arctic);

  // const minYear = useMinValue(data, "year");
  // const maxYear = useMaxValue(data, "year");

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (data.length === 0) return <Loader />;

  return (
    <div className="text-white">
      <Sidebar />
    </div>
  );
}

export default Arctic;
