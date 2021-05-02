import { useEffect, useState } from "react";
import Head from "next/head";
import useQuotesData from "hooks/useQuotesData";
import Card from "components/Card";
import Loading from "components/Loading";

export default function Home() {
  const { quotesData } = useQuotesData();
  const [currentQuote, setCurrentQuote] = useState(undefined);

  const getRamdomQuote = () => {
    const ramdomNum = Math.floor(Math.random() * quotesData.length);
    const ramdomQuote = quotesData[ramdomNum];
    setCurrentQuote({
      text: ramdomQuote.text,
      author: ramdomQuote.author,
    });
  };

  useEffect(() => {
    quotesData ? getRamdomQuote() : "";
  }, [quotesData]);

  return (
    <div>
      <Head>
        <title>Ramdom Quote Machine</title>
      </Head>

      <div className="w-screen min-h-screen bg-red-600 flex justify-center items-center">
        {quotesData ? (
          <Card currentQuote={currentQuote} getRamdomQuote={getRamdomQuote} />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
