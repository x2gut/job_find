import { FaFacebookF, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";
import SocialLinkInput from "../../../../ui/socialLinkInput";
import Button from "../../../../ui/button";
import useSocialLinksForm from "../../../../../hooks/forms/useSocialLinksForm";

const SocialLinksEmployer = () => {
  const {
    handleFacebookChange,
    handleTelegramChange,
    handleTwitterChange,
    handleYoutubeChange,
    handleSubmit,
  } = useSocialLinksForm();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <SocialLinkInput
        onChange={handleFacebookChange}
        label="Social link 1"
        socialName="Facebook"
        icon={FaFacebookF}
      />
      <SocialLinkInput
        onChange={handleTwitterChange}
        label="Social link 2"
        socialName="Twitter"
        icon={FaTwitter}
      />
      <SocialLinkInput
        onChange={handleTelegramChange}
        label="Social link 3"
        socialName="Telegram"
        icon={FaTelegram}
      />
      <SocialLinkInput
        onChange={handleYoutubeChange}
        label="Social link 4"
        socialName="Youtube"
        icon={FaYoutube}
      />
      <Button primary={true} children="Save changes" type="submit" />
    </form>
  );
};

export default SocialLinksEmployer;
