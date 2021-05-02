import Button from "./Button";
import DisplayAuthor from "./DisplayAuthor";

const CardFooter = ({ currentQuote, getRamdomQuote }) => {
  return (
    <div className="w-full p-4 flex flex-col items-center sm:flex-row">
      <Button getRamdomQuote={getRamdomQuote} />
      <DisplayAuthor currentQuote={currentQuote} />
    </div>
  );
};

export default CardFooter;
