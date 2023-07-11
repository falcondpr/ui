interface TextProps {
  children: React.ReactNode;
  // className: string;
}

export default function Text({ children, ...rest }: TextProps) {
  return (
    <p className="font-sans text-gray-400 text-center" {...rest}>
      {children}
    </p>
  );
}
