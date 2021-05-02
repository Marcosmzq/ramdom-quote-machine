const Button = ({ getRamdomQuote }) => {
  return (
    <button
      onClick={getRamdomQuote}
      className="w-full sm:w-1/2 h-14 border border-red-400 focus:outline-none text-red-600 font-extrabold font-poppins hover:bg-red-500 hover:text-gray-100"
    >
      New Quote
    </button>
  );
};

export default Button;
