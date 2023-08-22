export const TEMPERATURE_URL: string =
  "https://global-warming.org/api/temperature-api";

export const CO2_URL: string = "https://global-warming.org/api/co2-api";
export const METHANE_URL: string = "https://global-warming.org/api/methane-api";
export const NO2_URL: string =
  "https://global-warming.org/api/nitrous-oxide-api";
export const ARCTIC_URL: string = "https://global-warming.org/api/arctic-api";

export function getFirstsDigit(input: number | string): string {
  const label = String(input);
  return label[0] + label[1] + label[2] + label[3];
}
