import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { updateSocialLinks } from "../../api/company";
import { toast } from "react-toastify";
import useCompanyInfoStore from "../../stores/companyInfo";

interface SocialLinks {
  facebook: string | null;
  twitter: string | null;
  telegram: string | null;
  youtube: string | null;
}

const useSocialLinksForm = () => {
  const { id } = useCompanyInfoStore();

  const [socialLinks, setSocialLinks] = useState<SocialLinks>({
    facebook: null,
    twitter: null,
    telegram: null,
    youtube: null,
  });

  const mutation = useMutation({
    mutationFn: updateSocialLinks,
    onSuccess: () => toast.success("Social links successfully updated"),
    onError: () => toast.error("Failed to update social links"),
  });

  const handleSocialChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    socialType: string
  ) => {
    const value = event.target.value;
    if (value.startsWith("http")) {
      setSocialLinks((prev) => ({ ...prev, [socialType]: value }));
    } else {
      let baseUrl = "";

      switch (socialType) {
        case "twitter":
          baseUrl = "https://twitter.com/";
          break;
        case "telegram":
          baseUrl = "https://t.me/";
          break;
        case "youtube":
          baseUrl = "https://youtube.com/";
          break;
        case "facebook":
          baseUrl = "https://facebook.com/";
          break;
      }
      setSocialLinks((prev) => ({
        ...prev,
        [socialType]: `${baseUrl}${value}`,
      }));
    }
  };

  const handleSubmit = () => {
    if (!id) return;

    mutation.mutate({
      company_id: id,
      facebook: socialLinks.facebook,
      twitter: socialLinks.twitter,
      telegram: socialLinks.telegram,
      youtube: socialLinks.youtube,
    });
  };

  return {
    handleSubmit,
    socialLinks,
    handleFacebookChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      handleSocialChange(event, "facebook"),
    handleTwitterChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      handleSocialChange(event, "twitter"),
    handleTelegramChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      handleSocialChange(event, "telegram"),
    handleYoutubeChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      handleSocialChange(event, "youtube"),
  };
};

export default useSocialLinksForm;
