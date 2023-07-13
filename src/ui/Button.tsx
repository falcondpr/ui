import { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="text-lg w-full h-14 bg-gray-900 rounded-md text-white"
      {...rest}
    >
      {children}
    </button>
  );
}
