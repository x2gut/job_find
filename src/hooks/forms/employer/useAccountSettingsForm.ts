import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateContactInfo } from "../../../api/company";
import { toast } from "react-toastify";
import useCompanyInfoStore from "../../../stores/companyInfo";
import { changePassword } from "../../../api/user";
import { useForm } from "react-hook-form";
import useUserDataStore from "../../../stores/userDataStore";
import { AxiosError } from "axios";
import { ChangePasswordFormData } from "../../../types/types";


const useAccountSettingsForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChangePasswordFormData>();
  const { id } = useCompanyInfoStore();
  const { id: userId } = useUserDataStore();
  const [contactInfo, setContactInfo] = useState<{
    location: string | null;
    email: string | null;
    phoneNumber: string | null;
  }>({
    location: null,
    email: null,
    phoneNumber: null,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateContactInfo,
    onSuccess: () => {
      toast.success("Contact info successfully updated"),
        queryClient.invalidateQueries({ queryKey: ["companyData"] });
    },
  });

  const passwordChangeMutation = useMutation({
    mutationFn: changePassword,
    onSuccess: () => toast.success("Password updated successfully"),
    onError: (error: AxiosError) => {
      const errorMessage =
        (error.response?.data as { detail?: string })?.detail ||
        "Unexpected error";
      toast.error(errorMessage);
    },
  });

  const handleChangePassword = (data: ChangePasswordFormData) => {
    if (userId) {
      passwordChangeMutation.mutate({
        user_id: userId,
        new_password: data.newPassword,
        current_password: data.currentPassword,
      });
    }
  };

  const onSubmit = () => {
    if (id) {
      mutation.mutate({
        company_id: id,
        location: contactInfo.location,
        email: contactInfo.email,
        phone_number: contactInfo.phoneNumber,
      });
    }
  };

  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
    watch,
    setContactInfo,
    handleChangePassword,
  };
};

export default useAccountSettingsForm;
