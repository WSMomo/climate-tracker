import { useEffect, useState } from "react";

export function useSlider(minValue: number, maxValue: number) {
  const [minValueSelected, setMinValueSelected] = useState<number>();
  const [maxValueSelected, setMaxValueSelected] = useState<number>();

  useEffect(() => {
    setMinValueSelected(minValue);
    setMaxValueSelected(maxValue);
  }, [maxValue, minValue]);

  function handleChangeSlider(value: number[]) {
    setMinValueSelected(value[0]);
    setMaxValueSelected(value[1]);
  }
  return { minValueSelected, maxValueSelected, handleChangeSlider };
}
