import { InfoComponentsType } from "./types/infoComponentsType";
export interface InfoComponentType {
  [key: string]: {
    title: string;
    dataProperty: keyof InfoComponentsType;
    datakey: keyof InfoComponentsType;
    color: string;
    secondDataKey?: keyof InfoComponentsType;
    secondColor?: string;
    tickFormat: boolean;
    removeFirst?: boolean;
  };
}

export const infoComponents: InfoComponentType = {
  temperature: {
    title: "temperature",
    dataProperty: "time",
    datakey: "station",
    color: "#FF5733",
    secondDataKey: "land",
    secondColor: "#FFFFFF",
    tickFormat: true,
  },
  arctic: {
    title: "arctic",
    dataProperty: "year",
    datakey: "area",
    color: "#FF5733",
    tickFormat: false,
  },
  co2: {
    title: "co2",
    dataProperty: "year",
    datakey: "trend",
    color: "#FF5733",
    tickFormat: false,
  },
  methane: {
    title: "methane",
    dataProperty: "date",
    datakey: "trend",
    color: "#FF5733",
    tickFormat: false,
  },
  no2: {
    title: "no2",
    dataProperty: "date",
    datakey: "trend",
    color: "#FF5733",
    tickFormat: false,
    removeFirst: true,
  },
};
