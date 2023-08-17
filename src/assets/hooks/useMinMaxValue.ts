import { useEffect, useState } from "react";
export function useMinMaxValue(
  data: object[],
  value: string
): { minValue: number; maxValue: number } {
  const [maxValue, setMaxValue] = useState<number>(0);
  const [minValue, setMinValue] = useState<number>(0);

  useEffect(() => {
    if (data.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const valuesArray = data.map((item) => +(item as any)[value]);
      const min = Math.min(...valuesArray);
      const max = Math.max(...valuesArray);
      setMinValue(isNaN(min) ? 0 : Math.floor(min));
      setMaxValue(isNaN(max) ? 0 : Math.floor(max));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { minValue, maxValue };
}
