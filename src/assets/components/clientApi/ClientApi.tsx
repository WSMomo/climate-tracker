import { useDispatch, useSelector } from "react-redux";
import { useData } from "../../hooks/useData";
import {
  ARCTIC_URL,
  CO2_URL,
  METHANE_URL,
  NO2_URL,
  TEMPERATURE_URL,
} from "../../global/global";
import { useEffect } from "react";
import {
  setArctic,
  setCo2,
  setIsClientApiActived,
  setMethane,
  setNo2,
  setTemperature,
} from "../../redux/dataSlice";
import { RootState } from "../../redux/store";

interface Props {
  children: React.ReactNode;
  className?: string;
}
function ClientApi({ children, className }: Props) {
  const temperatureData = useData(TEMPERATURE_URL);
  const co2Data = useData(CO2_URL);
  const methaneData = useData(METHANE_URL);
  const no2Data = useData(NO2_URL);
  const arcticData = useData(ARCTIC_URL);
  const dispatch = useDispatch();
  const isClientApiActived = useSelector(
    (state: RootState) => state.data.isClientApiActived
  );

  useEffect(() => {
    if (temperatureData && co2Data && methaneData && no2Data && arcticData) {
      dispatch(setTemperature(temperatureData["result"]));
      dispatch(setCo2(co2Data["co2"]));
      dispatch(setMethane(methaneData["methane"]));
      dispatch(setNo2(no2Data["nitrous"]));
      dispatch(setArctic(arcticData["arcticData"]));
      if (!isClientApiActived) {
        dispatch(setIsClientApiActived());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temperatureData]);

  //DEBUG
  useEffect(() => {
    console.log(arcticData);
  }, [arcticData]);

  return <div className={className}>{children}</div>;
}

export default ClientApi;
