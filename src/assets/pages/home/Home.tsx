import GridItem from "../../components/gridItem/GridItem";
import {
  ARCTIC_URL,
  CO2_URL,
  METHANE_URL,
  NO2_URL,
  TEMPERATURE_URL,
} from "../../global/global";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-4/5 max-w-6xl h-4/5 p-2">
      <GridItem
        graphicTitle="result"
        dataKey="station"
        url={TEMPERATURE_URL}
        color="#FF5733"
      >
        Temperature
      </GridItem>
      <GridItem
        graphicTitle="co2"
        dataKey="trend"
        url={CO2_URL}
        color="#339933"
      >
        CO2
      </GridItem>
      <GridItem
        graphicTitle="methane"
        dataKey="average"
        url={METHANE_URL}
        color="#FF9900"
      >
        Methane
      </GridItem>
      <GridItem
        graphicTitle="nitrous"
        dataKey="average"
        url={NO2_URL}
        color="#FF0000"
      >
        NO2
      </GridItem>
      <GridItem
        graphicTitle="arcticData"
        dataKey="extent"
        url={ARCTIC_URL}
        color="#66CCFF"
      >
        Arctic
      </GridItem>
    </div>
  );
}
