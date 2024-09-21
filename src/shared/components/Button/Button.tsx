interface ButtonProps {
  buttonText: string;
}

export const Button = ({ buttonText }: ButtonProps) => {
  return (
    <button className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-lg">
      {buttonText}
    </button>
  );
};

