import { useEffect, useState } from "react";

export function useData(url: string) {
  const [data, setData] = useState();

  // console.log(data);

  useEffect(() => {
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
  }, [url]);

  return data;
}
