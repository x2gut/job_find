import { useLocation, useNavigate, useParams } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/ui/button";
import Logo from "../components/ui/logo";
import { useMutation } from "@tanstack/react-query";
import { sendVerificationEmail, verifyUserEmail } from "../api/user";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const EmailVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = useParams();
  const access_token = location.state?.token;
  const [code, setCode] = useState<null | number>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  const sendVerificationCode = useMutation({
    mutationFn: sendVerificationEmail,
    onSuccess: () => {
      toast.success("Code has been sent");
      setTimeLeft(60);
    },
  });

  const verifyEmail = useMutation({
    mutationFn: verifyUserEmail,
    onSuccess: () => {
      toast.success("You have successfully verified your email.");
      navigate("/employee/profile/overview");
      window.location.reload();
    },
    onError: () => toast.error("Incorrect code"),
  });

  useEffect(() => {
    if (!access_token || !email) {
      navigate("/");
      return;
    }

    sendVerificationCode.mutate(email);
  }, [access_token, email, navigate]);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleResendClick = () => {
    if (timeLeft > 0) return;

    if (email) {
      sendVerificationCode.mutate(email);
    }
  };

  if (!access_token) {
    return null;
  }

  return (
    <>
      <header className="w-full flex items-center justify-center pt-10">
        <Logo />
      </header>
      <Container className="flex justify-center items-center">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (code && email) {
              verifyEmail.mutate({ email, code });
            }
          }}
          className="w-full max-w-[536px] flex flex-col gap-6 mt-60"
        >
          <h2 className="text-[32px] text-center text-gray-900 font-medium">
            Email Verification
          </h2>
          <p className="body-small-400 text-center">
            We've sent an verification to{" "}
            <span className="text-gray-900">{email}</span> to verify your email
            address and activate your account.
          </p>
          <input
            className="py-4 pl-8 border"
            type="text"
            placeholder="Verification Code"
            onChange={(event) => setCode(Number(event.target.value))}
          />
          <Button type="submit" primary={true}>
            Verify my Account
          </Button>
          <div className="flex gap-2 items-center justify-center">
            <p className="body-small-400">Didn’t recieve any code?</p>
            <button
              type="button"
              className="text-sm text-blue-500"
              onClick={handleResendClick}
              disabled={timeLeft > 0}
            >
              {timeLeft > 0 ? `Resend in ${timeLeft}s` : "Resend"}
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default EmailVerification;
