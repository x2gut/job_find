import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useCompanyInfoStore from "../../../stores/companyInfo";
import { updateCompanyInfo } from "../../../api/company";
import { MAX_PROFILE_IMAGE_SIZE } from "../../../constants/CONSTANTS";

const useCompanyInfoForm = () => {
  const [profilePictureSize, setProfilePictureSize] = useState("0");
  const [profileBannerSize, setProfileBannerSize] = useState("0");
  const [profilePicturePreview, setProfilePicturePreview] = useState<
    string | null
  >(null);
  const [profileBannerPreview, setProfileBannerPreview] = useState<
    string | null
  >(null);
  const { id, aboutUs } = useCompanyInfoStore();
  const [companyName, setCompanyName] = useState<string | null>(null);
  const [profileBanner, setProfileBanner] = useState<File | null>(null);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateCompanyInfo,
    onSuccess: () => {
      toast.success("Company info updated!");
      queryClient.invalidateQueries({ queryKey: ["companyData"] });
    },
  });

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value);
  };

  const onSubmit = () => {
    const formData = new FormData();
    if (!id) {
      toast.error("Missing company ID... Try to reload the page");
      return;
    }
    formData.append("company_id", String(id));
    if (companyName !== null) {
      formData.append("company_name", companyName);
    }
    if (aboutUs !== null) {
      formData.append("about_company", aboutUs);
    }
    if (profilePicture !== null) {
      formData.append("company_picture", profilePicture);
    }
    if (profileBanner !== null) {
      formData.append("company_banner", profileBanner);
    }
    mutation.mutate(formData);
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFile: (file: File | null) => void,
    setPreview: (preview: string | null) => void,
    setSize: (size: string) => void
  ) => {
    if (!event.target.files) return;

    const file = event.target.files[0];

    if (!file.type.startsWith("image/")) {
      toast.error("Invalid file type");
      return;
    }

    if (file.size > MAX_PROFILE_IMAGE_SIZE) {
      toast.error("Max image size is 5MB");
      return;
    }

    setFile(file);
    setSize((file.size / (1024 * 1024)).toFixed(2));

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleImageRemove = (
    event: FormEvent,
    setFile: (file: File | null) => void,
    setPreview: (preview: string | null) => void,
    setSize: (size: string) => void
  ) => {
    event.preventDefault();
    setFile(null);
    setPreview(null);
    setSize("0");
  };

  return {
    handleProfilePictureChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      handleImageChange(
        e,
        setProfilePicture,
        setProfilePicturePreview,
        setProfilePictureSize
      ),

    handleProfileBannerChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      handleImageChange(
        e,
        setProfileBanner,
        setProfileBannerPreview,
        setProfileBannerSize
      ),

    handleProfilePictureRemove: (e: FormEvent) =>
      handleImageRemove(
        e,
        setProfilePicture,
        setProfilePicturePreview,
        setProfilePictureSize
      ),

    handleProfileBannerRemove: (e: FormEvent) =>
      handleImageRemove(
        e,
        setProfileBanner,
        setProfileBannerPreview,
        setProfileBannerSize
      ),

    profilePictureSize,
    profilePicturePreview,
    profileBannerSize,
    profileBannerPreview,
    aboutUs,
    companyName,
    setCompanyName,
    onSubmit,
    handleChangeName,
  };
};

export default useCompanyInfoForm;
