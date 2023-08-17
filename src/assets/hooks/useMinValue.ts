import { useEffect, useState } from "react";
export function useMinValue(data: object[], value: string | number) {
  const [minValue, setMinValue] = useState<number>();

  useEffect(() => {
    if (data.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const valuesArray = data.map((item) => +(item as any)[value]);
      setMinValue(Math.floor(Math.min(...valuesArray)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return minValue;
}
