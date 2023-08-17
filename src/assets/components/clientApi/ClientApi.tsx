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
  setAllDataLoaded,
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
    if (temperatureData) {
      dispatch(setTemperature(temperatureData["result"]));
    }

    if (co2Data) {
      dispatch(setCo2(co2Data["co2"]));
    }

    if (methaneData) {
      dispatch(setMethane(methaneData["methane"]));
    }

    if (no2Data) {
      dispatch(setNo2(no2Data["nitrous"]));
    }

    if (arcticData) {
      dispatch(setArctic(arcticData["arcticData"]));
    }

    if (
      !isClientApiActived &&
      temperatureData &&
      co2Data &&
      methaneData &&
      no2Data &&
      arcticData
    ) {
      dispatch(setIsClientApiActived());
    }
    if (temperatureData && co2Data && methaneData && no2Data && arcticData) {
      dispatch(setAllDataLoaded());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    arcticData,
    co2Data,
    isClientApiActived,
    methaneData,
    no2Data,
    temperatureData,
  ]);

  //DEBUG
  useEffect(() => {
    console.log(arcticData);
  }, [arcticData]);

  return <div className={className}>{children}</div>;
}

export default ClientApi;
