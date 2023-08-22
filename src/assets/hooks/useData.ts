import { useEffect, useState } from "react";

export function useData(url: string, climateCondition: object[]) {
  const [data, setData] = useState();
  useEffect(() => {
    // CHECK, if climateCondition is not empty not fetch url
    if (climateCondition.length !== 0) return;

    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (err) {
        setData(data);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, climateCondition]);

  return data;
}
