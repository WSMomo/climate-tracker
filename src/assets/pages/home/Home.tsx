import GridItem from "../../components/gridItem/GridItem";
import {
  ARCTIC_API,
  CO2_API,
  METHANE_API,
  NO2_API,
  TEMPERATURE_API,
} from "../../global/global";

export default function Home() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-4/5 max-w-6xl h-4/5 p-2">
      <GridItem graphicTitle="result" dataKey="station" url={TEMPERATURE_API}>
        Temperature
      </GridItem>
      <GridItem graphicTitle="co2" dataKey="trend" url={CO2_API}>
        CO2
      </GridItem>
      <GridItem graphicTitle="methane" dataKey="average" url={METHANE_API}>
        Methane
      </GridItem>
      <GridItem graphicTitle="nitrous" dataKey="average" url={NO2_API}>
        NO2
      </GridItem>
      <GridItem graphicTitle="arcticData" dataKey="extent" url={ARCTIC_API}>
        Arctic
      </GridItem>

      {/* <GridItem>CO2</GridItem>
      <GridItem>Metano</GridItem>
      <GridItem>NO2</GridItem>
      <GridItem>Ghiaccio Polare</GridItem>
      <GridItem>a</GridItem> */}
    </div>
  );
}
