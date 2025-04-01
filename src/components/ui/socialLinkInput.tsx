import Input from "./input";
import InputBlock from "./inputBlock";
import { IconType } from "react-icons/lib";

interface SocialLinkInputProps {
  socialName: string;
  icon: IconType;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SocialLinkInput: React.FC<SocialLinkInputProps> = ({
  socialName,
  icon: Icon,
  label,
  onChange,
}) => {
  return (
    <div>
      <h5 className="body-small-400 text-gray-900 mb-2">{label}</h5>
      <InputBlock className="mb-[18px]">
        <div className="min-w-7 flex gap-2 items-center pl-6">
          {<Icon size={16} color="#0A65CC"/>}
          {socialName}
        </div>
        <span className="ml-12 mr-5 h-8 w-[1px] bg-gray-100"></span>
        <Input placeholder="Profile name/url..." onChange={onChange} />
      </InputBlock>
    </div>
  );
};

export default SocialLinkInput;
