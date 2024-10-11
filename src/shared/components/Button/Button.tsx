interface ButtonProps {
  buttonText: string;
  buttonHandler: () => void;
  className?: string;
}

export const Button = ({
  buttonText,
  buttonHandler,
  className,
}: ButtonProps) => {
  return (
    <button
      onClick={buttonHandler}
      className={`px-8 py-3 bg-blue-500 text-white rounded-lg ${className}`}
    >
      {buttonText}
    </button>
  );
};

