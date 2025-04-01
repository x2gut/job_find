import { CiLocationOn } from "react-icons/ci";
import { LuDot } from "react-icons/lu";
import { useGetCompanyImage } from "../../hooks/common/useGetCompanyMedia";

interface JobCardProps {
  companyName: string;
  location: string;
  isFeatured: boolean;
  isPremium: boolean;
  title: string;
  type: string;
  minSalary: number;
  maxSalary: number;
  companyId: number;
}

const JobCardGrid: React.FC<JobCardProps> = ({
  companyName,
  location,
  isFeatured,
  isPremium,
  title,
  type,
  minSalary,
  maxSalary,
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
      className={`w-full cursor-pointer h-auto  max-w-[424px] max-h-[204px] border border-[#EDEFF5] rounded-lg hover:border-blue-500 duration-300 ${
        isPremium &&
        "bg-gradient-to-r from-[rgba(255,246,230,1)] to-[rgba(255,255,255,1)]"
      }`}
    >
      <div className="p-8">
        <div className="flex items-center gap-4 pb-6">
          <img src={imageUrl} alt="CompanyLogo" className="w-12 h-12" />
          <div className="flex flex-col gap-[6px]">
            <div className="flex gap-2">
              <p className="text-base text-gray-900">{companyName}</p>
              {isFeatured && (
                <span className="py-[3px] px-3 text-[#FF4F4F] bg-[#FFEDED] text-sm rounded-full">
                  Featured
                </span>
              )}
            </div>
            <div className="flex items-center text-sm text-[#939AAD]">
              <CiLocationOn size={18} />
              <p>{location ?? "Not provided"}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-blue-500 font-medium text-xl pb-2">{title}</p>
          <div className="flex gap-2 items-center text-sm text-[#636A80]">
            <p>{type}</p>
            <LuDot />
            <p>
              {minSalary} - {maxSalary}$
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCardGrid;
