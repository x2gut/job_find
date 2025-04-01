import { useForm } from "react-hook-form";
import { JobAddData } from "../../../types/types";
import { useMutation } from "@tanstack/react-query";
import { addJob } from "../../../api/job";
import { toast } from "react-toastify";
import useCompanyInfoStore from "../../../stores/companyInfo";
import useUserDataStore from "../../../stores/userDataStore";

const usePostJobForm = () => {
  const { id } = useUserDataStore();
  const { id: companyId } = useCompanyInfoStore();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<JobAddData>();

  const mutation = useMutation({
    mutationFn: addJob,
    onSuccess: () => toast.success("Job successfully added"),
  });

  const onSubmit = (data: JobAddData) => {
    if (id && companyId) {
      mutation.mutate({ ...data, companyId: companyId, employerId: id });
    } else {
      toast.error("Cannot find company ID... Try to reload the page");
    }
  };

  return { register, handleSubmit, setValue, errors, onSubmit, control };
};

export default usePostJobForm;
