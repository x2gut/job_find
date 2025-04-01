import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { updateCandidatePersonalInfo } from "../../../api/candidate";
import useCandidateStore from "../../../stores/candidateStore";

const usePersonalInfoForm = () => {
  const { id } = useCandidateStore();
  const [image, setImage] = useState<File | null>(null);
  const [candidateInfo, setCandidateInfo] = useState<{
    [key: string]: string;
  }>({
    full_name: "",
    title_headline: "",
    experience: "",
    educations: "",
    personal_website: "",
  });

  const mutation = useMutation({
    mutationFn: updateCandidatePersonalInfo,
    onSuccess: () => toast.success("Personal info updated"),
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!id) {
      toast.error("Missing candidate ID... Try to reload the page");
      return;
    }
    const formData = new FormData();

    if (id) {
      formData.append("candidate_id", String(id));
    }

    if (image) {
      formData.append("profile_picture", image);
    }

    //add all data from candidateInfo to formData
    Object.entries(candidateInfo).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    mutation.mutate(formData);
  };

  const handleChangeCandidateInfo = (
    valueToUpdate: string,
    newValue: string
  ) => {
    setCandidateInfo((prev) => ({ ...prev, [valueToUpdate]: newValue }));
  };

  return { handleSubmit, candidateInfo, setImage, image, handleChangeCandidateInfo };
};

export default usePersonalInfoForm;
