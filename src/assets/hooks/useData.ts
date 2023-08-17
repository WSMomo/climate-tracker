import { useEffect, useState } from "react";

export function useData(url: string) {
  const [data, setData] = useState();
  async function fetchData() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (err) {
      setData(data);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
}
