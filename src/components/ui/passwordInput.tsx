import { forwardRef, useState } from "react";
import Input from "./input";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import clsx from "clsx";

interface PassowrdInputProps {
  className?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, PassowrdInputProps>(
  ({ className, ...props }, ref) => {
    {
      const [showPassword, setShowPassword] = useState(false);

      return (
        <Input
          {...props}
          ref={ref}
          type={showPassword ? "text" : "password"}
          icon={
            showPassword ? (
              <FaRegEyeSlash size={22} color="#18191C" />
            ) : (
              <FaRegEye size={22} color="#18191C" />
            )
          }
          iconPosition="right"
          className={clsx("border w-full", className)}
          onIconClick={() => setShowPassword(!showPassword)} // On Icon Click
        />
      );
    }
  }
);

export default PasswordInput;
