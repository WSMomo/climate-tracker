import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { useData } from "../../hooks/useData";
import { RootState } from "../../redux/store";
import {
  setAllDataLoaded,
  setArctic,
  setCo2,
  setIsClientApiActived,
  setMethane,
  setNo2,
  setTemperature,
} from "../../redux/dataReducer";
import {
  ARCTIC_URL,
  CO2_URL,
  METHANE_URL,
  NO2_URL,
  TEMPERATURE_URL,
} from "../../global/global";

interface Props {
  children: React.ReactNode;
  className?: string;
}
function ClientApi({ children, className }: Props) {
  const temperature = useSelector((state: RootState) => state.data.temperature);
  const arctic = useSelector((state: RootState) => state.data.arctic);
  const co2 = useSelector((state: RootState) => state.data.co2);
  const methane = useSelector((state: RootState) => state.data.methane);
  const no2 = useSelector((state: RootState) => state.data.no2);

  const temperatureData = useData(
    "https://global-warming.org/api/temperature-api",
    temperature
  );
  const co2Data = useData("https://global-warming.org/api/co2-api", co2);
  const methaneData = useData(
    "https://global-warming.org/api/methane-api",
    methane
  );
  const no2Data = useData(
    "https://global-warming.org/api/nitrous-oxide-api",
    no2
  );
  const arcticData = useData(
    "https://global-warming.org/api/arctic-api",
    arctic
  );

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

  return <div className={className}>{children}</div>;
}

export default ClientApi;
