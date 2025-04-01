import clsx from "clsx";
import { forwardRef, ReactNode, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  onIconClick?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, className, iconPosition, onIconClick, ...props }, ref) => {
    return (
      <div
        className={clsx(
          "flex items-center bg-white rounded-lg p-2 h-12",
          iconPosition === "right" && "flex-row-reverse",
          className
        )}
      >
        {icon && <div onClick={onIconClick} className="mx-3">{icon}</div>}
        <input
          ref={ref}
          {...props}
          className="flex-1 outline-none border-none bg-transparent pl-3"
        />
      </div>
    );
  }
);

export default Input;
