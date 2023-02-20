import ButtonType from "../types/components/button";

const Button = ({ children, onClick }: ButtonType) => {
  return (
    <button
      className="w-1/2 flex justify-center bg-dark-bg text-dark-fg outline-0 mt-5 px-5 py-5 rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
