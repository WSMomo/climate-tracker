import { useEffect, useState } from "react";

export function useData(url: string) {
  const [data, setData] = useState();
  async function fetchData() {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    console.log(data);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
}
