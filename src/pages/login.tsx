import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import Input from "../components/ui/input";
import Logo from "../components/ui/logo";
import Button from "../components/ui/button";
import useLoginForm from "../hooks/forms/useLoginForm";

const LoginPage = () => {
  const { handleSubmit, onSubmit, isSubmitting, register } = useLoginForm();


  return (
    <div className="relative">
      <Container>
        <div className="pb-40">
          <Logo />
        </div>
        <div className="flex justify-between z-50">
          <div className="w-full">
            <h3 className="font-medium text-[32px] text-gray-900">Sign in</h3>
            <div className="flex justify-between items-center pb-8">
              <div className="flex gap-1">
                <p className="text-base text-gray-600">Dont have an acoont?</p>
                <Link className="text-blue-500" to={"/sign-up"}>
                  Create
                </Link>
              </div>
            </div>
            <form
              className="flex flex-col gap-5 w-full h-auto max-w-[536px] max-h-[604px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                className="border"
                placeholder="Email"
                type="email"
                {...register("email", { required: "Can`t be empty!" })}
              />
              <Input
                className="border w-full"
                placeholder="Password"
                type="password"
                {...register("password", { required: "Can`t be empty!" })}
              />
              <div className="flex items-center justify-start gap-3">
                <input
                  type="checkbox"
                  id="link-checkbox"
                  className="w-5 h-5 rounded-lg"
                />
                <label
                  htmlFor="link-checkbox"
                  className="text-gray-500 text-sm"
                >
                  Remember me
                </label>
              </div>
              <Button
                primary={true}
                children={"Sign in"}
                type="submit"
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

export default LoginPage;
