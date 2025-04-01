import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";

interface CandidateProfileModalContactInfoProps {
  website: string;
  location: string;
  phone: string;
  email: string;
}

const CandidateProfileModalContactInfo: React.FC<
  CandidateProfileModalContactInfoProps
> = ({ website, location, phone, email }) => {
  return (
    <div className="p-6 border rounded-md">
      <h6 className="font-medium text-gray-900">Contact Information</h6>
      <div className="flex gap-4 items-center mt-6 border-b pb-5">
        <TbWorld size={32} color="#0A65CC" />
        <div>
          <p className="body-small-400">WEBSITE</p>
          <p className="font-medium text-sm text-gray-900">{website}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center mt-6 border-b pb-5">
        <CiLocationOn size={32} color="#0A65CC" />
        <div>
          <p className="body-small-400">LOCATION</p>
          <p className="font-medium text-sm text-gray-900">{location}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center mt-6 border-b pb-5">
        <FiPhoneCall size={32} color="#0A65CC" />
        <div>
          <p className="body-small-400">PHONE</p>
          <p className="font-medium text-sm text-gray-900">{phone}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center mt-6 pb-5">
        <TfiEmail size={32} color="#0A65CC" />
        <div>
          <p className="body-small-400">EMAIL</p>
          <p className="font-medium text-sm text-gray-900">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfileModalContactInfo;
