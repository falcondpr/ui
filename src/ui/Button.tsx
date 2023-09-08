import { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="text-lg w-max py-2 bg-white text-[#0a84ff] rounded-xl"
      {...rest}
    >
      {children}
    </button>
  );
}
