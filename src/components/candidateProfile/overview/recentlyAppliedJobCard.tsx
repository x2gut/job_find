import { CgDollar } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { IoCheckmark } from "react-icons/io5";
import Button from "../../ui/button";
import { AppliedJob, JobDetails } from "../../../types/types";
import convertDate from "../../../helpers/convertDate";
import formatNumber from "../../../helpers/formatNumber";
import clsx from "clsx";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useGetCompanyImage } from "../../../hooks/common/useGetCompanyMedia";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import RecentlyAppliedJobCardDropdown from "./recentlyAppliedJobCardDropdown";

const RecentlyAppliedJobCard = ({ data }: { data: AppliedJob<JobDetails> }) => {
  const navigate = useNavigate();
  const companyImage = useGetCompanyImage(data.details.company_id);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <div className="p-5 grid grid-cols-[3fr_1fr_1fr_1fr] center items-center">
      <div className="flex gap-4">
        <img
          src={
            companyImage.isError
              ? "/imgs/BaseCompanyImage.png"
              : companyImage.data
          }
          className="w-14 h-14 rounded-md"
          alt="Company Logo"
        />
        <div className="flex flex-col gap-[11px] max-w-60">
          <div className="flex gap-2 items-center">
            <h6 className="truncate">{data.details.title}</h6>
            <span className="py-[3px] px-3 body-small-400 text-blue-500 bg-blue-50 rounded-2xl whitespace-nowrap">
              {data.details.job_type}
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-1">
              <GoLocation size={20} color="#C8CCD1" />
              <span className="body-small-400 text-ellipsis text-nowrap overflow-hidden truncate max-w-28">
                {data.details.location}
              </span>
            </div>
            <div className="flex items-center gap-1 text-nowrap">
              <CgDollar size={20} color="#C8CCD1" />
              <span className="body-small-400">{`$${formatNumber(
                data.details.min_salary
              )}-${formatNumber(data.details.max_salary)}/month`}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="body-small-400 text-gray-600">
        {convertDate(data.applied_at)}
      </p>
      <div
        className={clsx(
          "flex gap-[6px] items-center",
          data.status === "pending"
            ? "text-yellow-500"
            : data.status === "rejected"
            ? "text-red-500"
            : "text-green-500"
        )}
      >
        {data.status === "pending" ? (
          <MdOutlinePendingActions size={16} />
        ) : data.status === "rejected" ? (
          <IoMdClose size={16} />
        ) : (
          <IoCheckmark size={16} />
        )}
        <span className="">{data.status}</span>
      </div>
      <div className="flex gap-3 relative">
        <Button
          onClick={() => navigate(`/find-job/job-details/${data.job_id}`)}
          className="bg-gray-50 border-none hover:bg-blue-500 hover:text-white whitespace-nowrap"
          primary={false}
        >
          View Details
        </Button>
        <button
          onClick={() => setIsDropdownVisible(true)}
          className="w-12 h-12 hover:bg-blue-50 flex items-center justify-center rounded-md duration-200"
        >
          <BsThreeDotsVertical color="#18191C" size={18} />
        </button>
        <RecentlyAppliedJobCardDropdown
          jobId={data.job_id}
          applicationId={data.id}
          isVisible={isDropdownVisible}
          onClose={() => setIsDropdownVisible(false)}
        />
      </div>
    </div>
  );
};

export default RecentlyAppliedJobCard;
