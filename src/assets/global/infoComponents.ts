import { InfoState } from "../redux/dataReducer";

export interface InfoComponentsType {
  trend: string;
  Column1: string;
  area: string;
  year: string;
  "data-type": string;
  extent: string;
  hemisphere: string;
  month: string;
  rank: string;
  date: string;
  time: string;
  station: string;
  land: string;
}

export interface InfoComponentType {
  [key: string]: {
    title: keyof InfoState;
    dataProperty: keyof InfoComponentsType;
    datakey: keyof InfoComponentsType;
    infoName: string;
  };
}

export const infoComponents: InfoComponentType = {
  temperature: {
    title: "temperature",
    dataProperty: "time",
    datakey: "land",
    infoName: "°C",
  },
  arctic: {
    title: "arctic",
    dataProperty: "year",
    datakey: "area",
    infoName: "M km²",
  },
  co2: {
    title: "co2",
    dataProperty: "year",
    datakey: "trend",
    infoName: "ppm",
  },
  methane: {
    title: "methane",
    dataProperty: "date",
    datakey: "trend",
    infoName: "ppm",
  },
  no2: {
    title: "no2",
    dataProperty: "date",
    datakey: "trend",
    infoName: "ppm",
  },
};
