import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

interface CompanyCardProps {
  companyName: string;
  foundedIn: string;
  orgType: string;
  employers: string;
  phone: string;
  email: string;
  website: string;
  industryType: string;
  logoImg: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  companyName,
  foundedIn,
  orgType,
  employers,
  phone,
  email,
  website,
  industryType,
  logoImg,
}) => {
  return (
    <div className="max-w-[536px] p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={logoImg}
          alt="Instagram Logo"
          className="w-16 h-16 rounded-lg"
        />
        <div>
          <h2 className="text-xl font-medium mb-2">{companyName}</h2>
          <p className="body-small-400">{industryType}</p>
        </div>
      </div>

      {/* Details */}
      <div className="text-gray-700 text-sm space-y-2">
        <p className="flex justify-between text-gray-900 text-base">
          <span className="text-gray-600">Founded in:</span> {foundedIn}
        </p>
        <p className="flex justify-between text-gray-900 text-base">
          <span className="text-gray-600">Organization type:</span> {orgType}
        </p>
        <p className="flex justify-between text-gray-900 text-base">
          <span className="text-gray-600">Company size:</span> {employers}
        </p>
        <p className="flex justify-between text-gray-900 text-base">
          <span className="text-gray-600">Phone:</span> {phone}
        </p>
        <p className="flex justify-between text-gray-900 text-base">
          <span className="text-gray-600">Email:</span> {email}
        </p>
        <p className="flex justify-between text-gray-900 text-base">
          <span className="text-gray-600">Website:</span>
          <a href={`https://${website}`} className="text-blue-500 ml-1">
            {website}
          </a>
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 mt-4">
        <button className="p-2 bg-blue-600 text-white rounded-md">
          <FaFacebookF />
        </button>
        <button className="p-2 bg-blue-400 text-white rounded-md">
          <FaTwitter />
        </button>
        <button className="p-2 bg-pink-500 text-white rounded-md">
          <FaInstagram />
        </button>
        <button className="p-2 bg-red-600 text-white rounded-md">
          <FaYoutube />
        </button>
      </div>
    </div>
  );
};

export default CompanyCard;
