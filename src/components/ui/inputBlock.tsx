import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

interface InputBlockProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const InputBlock: React.FC<InputBlockProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx(
        "flex items-center w-full border border-gray-200 rounded-lg bg-white max-h-20",
        className
      )}
    >
      <div className="flex items-center">{children}</div>
    </div>
  );
};

export default InputBlock;
