import { useState, useEffect } from "react";

const useQuotesData = () => {
  const [quotesData, setQuotesData] = useState(undefined);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => setQuotesData(data));
  }, []);

  return { quotesData };
};

export default useQuotesData;
