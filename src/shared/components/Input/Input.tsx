import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

export const Input = ({ value, ...rest }: InputProps) => {
  return (
    <div className="p-2 border-blue-500 border-2 border-solid rounded-lg">
      <input {...rest} value={value} className="outline-none w-full" />
    </div>
  );
};

