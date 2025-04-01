import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/user";
import { RegisterData } from "../../types/types";

type RegisterFormData = {
  username: string;
  email: string;
  full_name?: string;
  password: string;
  confirmPassword: string;
  acc_type: string;
};

const useRegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("Account created successfully!");
      navigate("/sign-in");
    },
    onError: (error: AxiosError) => {
      if (error.response?.data) {
        const errorData = error.response.data as { detail: string | undefined };
        const errorMessage = errorData.detail || "Unexpected error occured";
        toast.error(errorMessage);
      }
    },
  });

  const onSubmit = (data: RegisterData) => {
    mutation.mutate(data);
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    onSubmit,
    isSubmitting: mutation.isPending,
    Controller,
    control
  };
};

export default useRegisterForm;
