import { CiCircleCheck } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "../../ui/button";
import { IoIosCloseCircleOutline } from "react-icons/io";
import RecentlyPostedJobsCardDropdown from "./recentlyPostedJobCardDropwdown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getJobApplicationByJobId } from "../../../api/jobApplication";

interface RecentlyPostedJobsCardProps {
  jobId: number;
  title: string;
  jobType: string;
  expiration: number;
}

// Skeleton component for loading state
const ApplicationsSkeleton = () => {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <HiOutlineUsers size={24} />
      <div className="h-4 w-24 bg-gray-200 animate-pulse rounded"></div>
    </div>
  );
};

const RecentlyPostedJobsCard: React.FC<RecentlyPostedJobsCardProps> = ({
  jobId,
  title,
  jobType,
  expiration,
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["applicationsByJobId", jobId],
    queryFn: () => getJobApplicationByJobId(jobId),
  });

  return (
    <div className="p-5 bg-white">
      <div className="relative grid grid-cols-[2fr_1fr_1fr_1fr] items-center gap-4">
        {/* JOBS */}
        <div className="flex flex-col gap-2">
          <h6 className="text-gray-900 text-lg font-medium">{title}</h6>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <p>{jobType}</p>
            <span>•</span>
            <p>{expiration <= 0 ? "expired" : `${expiration} days`}</p>
          </div>
        </div>

        {/* STATUS */}
        {expiration <= 0 ? (
          <div className="flex items-center gap-1 text-red-500 text-sm">
            <IoIosCloseCircleOutline size={20} />
            Expired
          </div>
        ) : (
          <div className="flex items-center gap-1 text-green-500 text-sm">
            <CiCircleCheck size={20} />
            Active
          </div>
        )}

        {/* APPLICATIONS */}
        {isLoading ? (
          <ApplicationsSkeleton />
        ) : (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <HiOutlineUsers size={24} />
            {`${data.applications.length} Application${
              data.applications.length > 1 ? "s" : ""
            }`}
          </div>
        )}

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <Button
            primary={false}
            className="bg-gray-50 border-none rounded-none whitespace-nowrap hover:bg-blue-500 hover:text-white"
            children="View applications"
            onClick={() =>
              navigate(`/employee/profile/applications/${jobId}`, {
                state: { title: title },
              })
            }
            disabled={isLoading}
          />
          <button
            onClick={() => setIsDropdownVisible((prev) => !prev)}
            className="text-gray-500 hover:bg-gray-50 duration-300 rounded-md"
          >
            <div className="p-3">
              <BsThreeDotsVertical size={24} />
            </div>
          </button>
        </div>
        <RecentlyPostedJobsCardDropdown
          jobId={jobId}
          isOpen={isDropdownVisible}
          onClose={() => setIsDropdownVisible(false)}
        />
      </div>
    </div>
  );
};

export default RecentlyPostedJobsCard;