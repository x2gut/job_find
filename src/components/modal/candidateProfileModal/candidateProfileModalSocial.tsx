import { BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

interface CandidateProfileModalSocialProps {
  twitter?: string | null;
  telegram?: string | null;
  youtube?: string | null;
  facebook?: string | null;
}

const CandidateProfileModalSocial: React.FC<CandidateProfileModalSocialProps> = ({
  twitter,
  telegram,
  youtube,
  facebook,
}) => {
  return (
    <div>
      <p className="font-medium text-gray-900 text-sm">Follow me on Social Media</p>
      <div className="flex gap-3 mt-5">
        <a
          href={twitter || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-md transition-all duration-200 ${
            twitter ? "bg-gray-50 hover:bg-blue-100" : "bg-gray-200 cursor-not-allowed"
          }`}
        >
          <BsTwitter size={20} color="#0A65CC" />
        </a>

        <a
          href={telegram || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-md transition-all duration-200 ${
            telegram ? "bg-gray-50 hover:bg-blue-100" : "bg-gray-200 cursor-not-allowed"
          }`}
        >
          <BsTelegram size={20} color="#0A65CC" />
        </a>

        <a
          href={youtube || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-md transition-all duration-200 ${
            youtube ? "bg-gray-50 hover:bg-red-100" : "bg-gray-200 cursor-not-allowed"
          }`}
        >
          <BsYoutube size={20} color="#0A65CC" />
        </a>

        <a
          href={facebook || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-md transition-all duration-200 ${
            facebook ? "bg-gray-50 hover:bg-blue-100" : "bg-gray-200 cursor-not-allowed"
          }`}
        >
          <FaFacebook size={20} color="#0A65CC" />
        </a>
      </div>
    </div>
  );
};

export default CandidateProfileModalSocial;
