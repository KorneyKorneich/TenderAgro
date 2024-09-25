interface ButtonProps {
  buttonText: string;
  buttonHandler: () => void;
}

export const Button = ({ buttonText, buttonHandler }: ButtonProps) => {
  return (
    <button
      onClick={buttonHandler}
      className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-lg"
    >
      {buttonText}
    </button>
  );
};

