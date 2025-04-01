import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary: boolean;
}

const Button: React.FC<ButtonProps> = ({
  primary,
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        primary
          ? "bg-[#0A65CC] text-white"
          : "border border-gray-200 text-[#0A65CC]",
        "px-6 py-3 text-base rounded-sm font-semibold duration-200",
        className
      )}
    >
      {children || "Default"}
    </button>
  );
};

export default Button;
