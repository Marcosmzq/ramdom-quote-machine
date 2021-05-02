const DisplayQuote = ({ currentQuote }) => {
  return (
    <p className="h-4/6 w-full p-4 sm:p-6 font-nunito font-bold text-red-600 text-center">
      <span className="text-2xl text-red-800 italic">" </span>
      {currentQuote && currentQuote.text ? currentQuote.text : ""}
      <span className="text-2xl text-red-800 italic"> "</span>
    </p>
  );
};

export default DisplayQuote;
