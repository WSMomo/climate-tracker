import { useEffect, useState } from "react";
export function useMaxValue(data: object[], value: string | number) {
  const [maxValue, setMaxValue] = useState<number>();
  useEffect(() => {
    if (data.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const valuesArray = data.map((item) => +(item as any)[value]);
      setMaxValue(Math.floor(Math.max(...valuesArray)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return maxValue;
}
