const ButtonCustom = ({ text, onClick, type = "button", bgColor = "bg-blue-500" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${bgColor} hover:opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none w-full transition duration-300`}
      >
      {text}
    </button>
  );
};
export default ButtonCustom;