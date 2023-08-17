import SourceInfo from "../../components/sourceInfo/SourceInfo";
import SourceLink from "../../components/sourceLink/SourceLink";
function TemperatureSourceInfo() {
  return (
    <SourceInfo>
      Source: GISTEMP Team, 2020: GISS Surface Temperature Analysis (GISTEMP),
      version 4. NASA Goddard Institute for Space Studies. Dataset accessed
      20YY-MM-DD at
      <SourceLink url="https://data.giss.nasa.gov/gistemp/" />
      .
      <br />
      Source data 1880 - present: Lenssen, N., G. Schmidt, J. Hansen, M. Menne,
      A. Persin, R. Ruedy, and D. Zyss, 2019: Improvements in the GISTEMP
      uncertainty model. J. Geophys. Res. Atmos., 124, no. 12, 6307-6326,
      doi:10.1029/2018JD029522. Source data year 1 – 1979:{" "}
      <SourceLink url="https://earthdata.nasa.gov/" />
    </SourceInfo>
  );
}

export default TemperatureSourceInfo;
