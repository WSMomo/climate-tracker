import { useDispatch, useSelector } from "react-redux";
import { useData } from "../../../hooks/useData";
import { TEMPERATURE_URL } from "../../global/global";
import { useEffect } from "react";
import { setIsClientApiActived, setTemperature } from "../../redux/dataSlice";
import { RootState } from "../../redux/store";

interface Props {
  children: React.ReactNode;
  className?: string;
}
function ClientApi({ children, className }: Props) {
  const temperatureData = useData(TEMPERATURE_URL);

  const dispatch = useDispatch();
  const isClientApiActived = useSelector(
    (state: RootState) => state.data.isClientApiActived
  );

  useEffect(() => {
    if (!isClientApiActived && temperatureData) {
      dispatch(setTemperature(temperatureData["result"]));
      dispatch(setIsClientApiActived());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temperatureData]);
  useEffect(() => {
    console.log(temperatureData);
  }, [temperatureData]);

  return <div className={className}>{children}</div>;
}

export default ClientApi;
