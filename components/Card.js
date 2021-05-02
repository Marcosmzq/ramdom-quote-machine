import CardFooter from "./CardFooter";
import DisplayQuote from "./DisplayQuote";

const Card = ({ currentQuote, getRamdomQuote }) => {
  return (
    <div className="w-11/12 bg-gray-100 md:w-1/2 rounded-xl shadow-lg flex justify-between flex-wrap">
      <DisplayQuote currentQuote={currentQuote} />
      <CardFooter currentQuote={currentQuote} getRamdomQuote={getRamdomQuote} />
    </div>
  );
};

export default Card;
