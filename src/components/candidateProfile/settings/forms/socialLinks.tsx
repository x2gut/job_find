import { FaFacebookF, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";
import SocialLinkInput from "../../../ui/socialLinkInput";
import Button from "../../../ui/button";
import { useState } from "react";
import useCandidateStore from "../../../../stores/candidateStore";
import { SocialLinks } from "../../../../types/types";
import { useMutation } from "@tanstack/react-query";
import { updateCandidateSocialLinks } from "../../../../api/candidate";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const SocialLinksCandidate = () => {
  const { id } = useCandidateStore();
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({
    candidate_id: id || 0,
    facebook: null,
    youtube: null,
    telegram: null,
    twitter: null,
  });

  const handleSocialChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    socialType: keyof SocialLinks
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
  const mutation = useMutation({
    mutationFn: updateCandidateSocialLinks,
    onSuccess: () => toast.success("Social links updated successfully"),
    onError: (error: AxiosError) => {
      const errorDetails =
        (error.response?.data as { details: string }).details ||
        "Unexpected error";
      toast.error(errorDetails);
    },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        mutation.mutate(socialLinks);
      }}
    >
      <SocialLinkInput
        onChange={(event) => {
          handleSocialChange(event, "facebook");
        }}
        label="Social link 1"
        socialName="Facebook"
        icon={FaFacebookF}
      />
      <SocialLinkInput
        onChange={(event) => {
          handleSocialChange(event, "twitter");
        }}
        label="Social link 2"
        socialName="Twitter"
        icon={FaTwitter}
      />
      <SocialLinkInput
        onChange={(event) => {
          handleSocialChange(event, "telegram");
        }}
        label="Social link 3"
        socialName="Telegram"
        icon={FaTelegram}
      />
      <SocialLinkInput
        onChange={(event) => {
          handleSocialChange(event, "youtube");
        }}
        label="Social link 4"
        socialName="Youtube"
        icon={FaYoutube}
      />
      <Button primary={true} children="Save changes" type="submit" />
    </form>
  );
};

export default SocialLinksCandidate;
