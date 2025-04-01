import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import Input from "../components/ui/input";
import Logo from "../components/ui/logo";
import Select from "react-select";
import Button from "../components/ui/button";
import { useState } from "react";
import useRegisterForm from "../hooks/forms/useRegisterForm";

const RegisterPage = () => {
  const {
    onSubmit,
    handleSubmit,
    register,
    errors,
    watch,
    isSubmitting,
    Controller,
    control,
  } = useRegisterForm();

  const selectOptions = [
    {
      value: "candidate",
      label: "Candidate",
    },
    {
      value: "employee",
      label: "Employee",
    },
  ];

  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  } | null>(selectOptions[0]);

  return (
    <div className="relative">
      <Container>
        <div className="pb-40">
          <Logo />
        </div>
        <div className="flex justify-between z-50">
          <div className="w-full h-auto max-w-[536px] max-h-[604px]">
            <h3 className="font-medium text-[32px] text-gray-900">
              Create Account.
            </h3>
            <div className="flex justify-between items-center pb-8">
              <div className="flex gap-1">
                <p className="text-base text-gray-600">
                  Already have an account?
                </p>
                <Link className="text-blue-500" to={"/sign-in"}>
                  Log in
                </Link>
              </div>
            </div>
            <form
              className="flex flex-col gap-6 w-full h-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                name="acc_type"
                control={control}
                defaultValue="candidate"
                render={({ field }) => (
                  <Select
                    {...field}
                    onChange={(selected) => {
                      setSelectedOption(selected);
                      field.onChange(selected?.value);
                    }}
                    isSearchable={false}
                    classNames={{
                      control: () => "w-[150px] h-12",
                      indicatorSeparator: () => "hidden",
                    }}
                    options={selectOptions}
                    value={selectedOption}
                  />
                )}
              />
              <div className="flex flex-row gap-6">
                {selectedOption?.value === "candidate" && (
                  <div className="relative">
                    <Input
                      className="border w-full"
                      placeholder="Full Name"
                      {...register("full_name", { required: "Can’t be empty!" })}
                    />
                    {errors.full_name && (
                      <p className="text-red-500 text-sm absolute left-0 bottom-[-20px]">
                        {errors.full_name.message}
                      </p>
                    )}
                  </div>
                )}

                <div className="relative w-full">
                  <Input
                    className="border w-full"
                    placeholder="Username"
                    {...register("username", {
                      required: "Can’t be empty!",
                      minLength: { value: 4, message: "Minimum length - 4" },
                    })}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm absolute left-0 bottom-[-20px]">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative">
                <Input
                  className="border w-full"
                  placeholder="Email"
                  type="email"
                  {...register("email", {
                    required: "Can’t be empty!",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm absolute left-0 bottom-[-20px]">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <Input
                  className="border w-full"
                  placeholder="Password"
                  type="password"
                  {...register("password", {
                    required: "Can’t be empty!",
                    minLength: {
                      value: 6,
                      message: "Minimal password length - 6",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm absolute left-0 bottom-[-20px]">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <Input
                  className="border w-full"
                  placeholder="Confirm Password"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Can’t be empty!",
                    validate: (value) =>
                      value === watch("password") || "Password don’t match!",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm absolute left-0 bottom-[-20px]">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-start gap-3">
                <input
                  type="checkbox"
                  id="link-checkbox"
                  className="w-5 h-5 rounded-lg"
                  required
                />
                <label
                  htmlFor="link-checkbox"
                  className="text-gray-500 text-sm"
                >
                  I've read and agree with your{" "}
                  <a href="terms-of-service" className="text-blue-500">
                    Terms of Service
                  </a>
                </label>
              </div>

              <Button
                type="submit"
                primary={true}
                children={"Create Account"}
                disabled={isSubmitting}
              />
            </form>
          </div>
          <div className="absolute right-0 top-0 z-0 max-w-[999px]">
            <img src="imgs/SignUpImg.png" alt="" className="select-none" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegisterPage;
