import { CiBookmark, CiCalendar, CiLocationOn } from "react-icons/ci";
import { FaArrowRight, FaDollarSign } from "react-icons/fa";
import calculateDaysRemaining from "../../helpers/calculateDaysRemain";
import { useGetCompanyImage } from "../../hooks/common/useGetCompanyMedia";

interface JobCardProps {
  companyName?: string;
  location: string;
  isFeatured: boolean;
  isPremium: boolean;
  title: string;
  type: string;
  minSalary: number;
  maxSalary: number;
  daysRemain: string;
  companyId: number;
}

const JobCardList: React.FC<JobCardProps> = ({
  location,
  isFeatured,
  isPremium,
  title,
  type,
  minSalary,
  maxSalary,
  daysRemain,
  companyId,
}) => {
  const image = useGetCompanyImage(companyId);

  const imageUrl = image.isLoading
    ? "/imgs/BaseCompanyImage.png"
    : image.isError
    ? "/imgs/BaseCompanyImage.png"
    : image.data;

  return (
    <div
      className={`w-full border rounded-lg border-[#EDEFF5] ${
        isPremium &&
        "bg-gradient-to-r from-[rgba(255,246,230,1)] to-[rgba(255,255,255,1)]"
      }`}
    >
      <div className="p-8 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img src={imageUrl} alt="" className="w-[68px] h-[68px]" />
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <p className="text-lg font-medium">{title}</p>
              {isFeatured && (
                <span className="py-[3px] px-3 text-[#FF4F4F] bg-[#FFEDED] text-sm rounded-full">
                  Featured
                </span>
              )}
              <span className="py-[3px] px-3 text-blue-500 bg-blue-50 text-sm rounded-full">
                {type}
              </span>
            </div>
            <div className="flex gap-4 text-gray-600">
              <div className="flex items-center gap-[6px]">
                <CiLocationOn />
                <p>{location ?? "Not provided"}</p>
              </div>
              <div className="flex items-center gap-[6px] text-sm">
                <FaDollarSign />
                <p>
                  {minSalary} - {maxSalary}$
                </p>
              </div>
              <div className="flex items-center gap-[6px]">
                <CiCalendar />
                <p>{calculateDaysRemaining(daysRemain)} days remaing</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <button>
            <CiBookmark size={24} />
          </button>
          <button className="flex gap-1 items-center font-semibold text-base py-3 px-6 bg-blue-50 text-blue-500 hover:brightness-95 transition duration-300">
            Apply Now
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCardList;
