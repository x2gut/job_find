import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import useAuthStore from "../../stores/authStore";
import { loginUser } from "../../api/user";
import { useState } from "react";

type LoginFormData = {
  email: string;
  password: string;
};

const useLoginForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<LoginFormData>();
  const { setIsAuthenticated } = useAuthStore();
  const [email, setEmail] = useState<string | null>(null);
  const { setAccessToken } = useAuthStore();


  const [searchParams] = useSearchParams();

  const redirect = searchParams.get("redirect") || "/";

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (response) => {
      setAccessToken(response.access_token);

      if (!response.is_active) {
        navigate(`/email-verification/${email}`, {
          state: { token: response.access_token },
        });
        return;
      }

      navigate(redirect);
      setIsAuthenticated(true);
    },
    onError: (error: AxiosError) => {
      const errorData = error.response?.data as { detail?: string };

      const errorMessage = errorData?.detail || "Unexpected error occurred";
      toast.error(errorMessage);
    },
    onMutate: (data) => setEmail(data.email),
  });

  const onSubmit = (data: LoginFormData) => {
    mutation.mutate(data);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    isSubmitting: mutation.isPending,
  };
};

export default useLoginForm;
