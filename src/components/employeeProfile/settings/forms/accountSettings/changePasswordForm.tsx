import { useState } from "react";
import Button from "../../../../ui/button";
import Input from "../../../../ui/input";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import clsx from "clsx";
import PasswordInput from "../../../../ui/passwordInput";
import { useForm } from "react-hook-form";
import { ChangePasswordFormData } from "../../../../../types/types";

interface ChangePasswordFormProps {
  handleChangePassword: (data: ChangePasswordFormData) => void;
}

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  handleChangePassword,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm<ChangePasswordFormData>();

  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  return (
    <div className="w-full border-b pb-11">
      <h5 className="my-8 body-large-500">Change Password</h5>
      <form onSubmit={handleSubmit(handleChangePassword)} className="">
        <div className="w-full flex gap-[18px]">
          {/* Current Password */}
          <div className="relative w-full flex-1">
            <label className="body-small-400" htmlFor="">
              Current Password
            </label>
            <PasswordInput
              {...register("currentPassword", { required: "Can`t be empty!" })}
              className={errors.currentPassword && "border-red-500"}
            />
            {errors.currentPassword && (
              <p className="text-red-500 text-sm absolute left-0 bottom-[-20px]">
                {errors.currentPassword.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div className="relative w-full flex-1">
            <label className="body-small-400" htmlFor="">
              New Password
            </label>
            <PasswordInput
              {...register("newPassword", {
                required: "Can`t be empty!",
                minLength: {
                  value: 6,
                  message: "Minimal password length - 6",
                },
              })}
              className={errors.newPassword && "border-red-500"}
            />
            {errors.newPassword && (
              <p className="text-red-500 text-sm absolute left-0 bottom-[-20px]">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          {/* Repeat Password */}
          <div className="relative w-full flex-1">
            <label className="body-small-400" htmlFor="">
              Repeat Password
            </label>
            <Input
              {...register("newPasswordRepeat", {
                validate: (value) =>
                  value === watch("newPassword") || "Passwords don’t match!",
              })}
              type={showRepeatPassword ? "text" : "password"}
              icon={
                showRepeatPassword ? (
                  <FaRegEyeSlash size={22} color="#18191C" />
                ) : (
                  <FaRegEye size={22} color="#18191C" />
                )
              }
              iconPosition="right"
              className={clsx(
                "border w-full",
                errors.newPasswordRepeat && "border-red-500"
              )}
              onIconClick={() => setShowRepeatPassword(!showRepeatPassword)} // On Icon Click
            />
            {errors.newPasswordRepeat && (
              <p className="text-red-500 text-sm absolute left-0 bottom-[-20px]">
                {errors.newPasswordRepeat.message}
              </p>
            )}
          </div>
        </div>

        <Button type="submit" className="mt-8" primary={true}>
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
