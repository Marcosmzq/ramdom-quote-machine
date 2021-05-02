const DisplayAuthor = ({ currentQuote }) => {
  return (
    <h3 className="p-4 sm:p-6 text-center font-black font-poppins text-xl text-red-600">
      <span className="text-2xl text-red-800 italic"> — </span>
      {currentQuote && currentQuote.author ? currentQuote.author : ""}
    </h3>
  );
};

export default DisplayAuthor;
