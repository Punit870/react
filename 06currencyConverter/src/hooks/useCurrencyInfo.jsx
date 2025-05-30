import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    if (!currency) return;
    fetch(`https://api.frankfurter.app/latest?from=${currency}`)
      .then((res) => res.json())
      .then((res) => setData({ [currency]: 1, ...res.rates }))
      .catch(() => setData({ [currency]: 1 }));
  }, [currency]);
  return data;
}

export default useCurrencyInfo;