import { InfoState } from "../redux/dataSlice";
import { InfoComponentsType } from "./types/infoComponentsType";
export interface InfoComponentType {
  [key: string]: {
    title: keyof InfoState;
    dataProperty: keyof InfoComponentsType;
    datakey: keyof InfoComponentsType;
  };
}

export const infoComponents: InfoComponentType = {
  temperature: {
    title: "temperature",
    dataProperty: "time",
    datakey: "land",
  },
  arctic: {
    title: "arctic",
    dataProperty: "year",
    datakey: "area",
  },
  co2: {
    title: "co2",
    dataProperty: "year",
    datakey: "trend",
  },
  methane: {
    title: "methane",
    dataProperty: "date",
    datakey: "trend",
  },
  no2: {
    title: "no2",
    dataProperty: "date",
    datakey: "trend",
  },
};
