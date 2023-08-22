export const TEMPERATURE_URL: string = import.meta.env.VITE_TEMPERATURE_URL;

export const CO2_URL: string = import.meta.env.VITE_CO2_URL;
export const METHANE_URL: string = import.meta.env.VITE_METHANE_URL;
export const NO2_URL: string = import.meta.env.VITE_NO2_URL;
export const ARCTIC_URL: string = import.meta.env.VITE_ARCTIC_URL;

export function getFirstsDigit(input: number | string): string {
  const label = String(input);
  return label[0] + label[1] + label[2] + label[3];
}
