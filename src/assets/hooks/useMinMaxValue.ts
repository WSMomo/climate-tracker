import { useEffect, useState } from "react";
export function useMinMaxValue(
  data: object[],
  value: string,
  removeFirst: boolean = false
): {
  minValue: number;
  maxValue: number;
  minValueNotRounded: number;
  maxValueNotRounded: number;
} {
  const [maxValue, setMaxValue] = useState<number>(0);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValueNotRounded, setMaxValueNotRounded] = useState<number>(0);
  const [minValueNotRounded, setMinValueNotRounded] = useState<number>(0);
  useEffect(() => {
    if (data.length > 0) {
      const newArray = [...data];
      if (removeFirst) {
        newArray.shift();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const valuesArray = newArray.map((item) => +(item as any)[value]);
      const min = Math.min(...valuesArray);
      const max = Math.max(...valuesArray);
      setMinValueNotRounded(min);
      setMaxValueNotRounded(max);
      setMinValue(Math.floor(min));
      setMaxValue(Math.floor(max));
    }
  }, [data, removeFirst, value]);

  return { minValue, maxValue, minValueNotRounded, maxValueNotRounded };
}
