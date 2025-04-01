import { FaArrowRight } from "react-icons/fa";
import RecentlyPostedJobsCard from "./reentlyPostedJobCard";
import { JobData } from "../../../types/types";
import calculateDaysRemaining from "../../../helpers/calculateDaysRemain";
import { Link } from "react-router-dom";

const RecentlyPostedJobs = ({
  jobs,
}: {
  jobs: { jobs: JobData[]; count: number };
}) => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <h4 className="text-gray-900 text-base font-medium">
          Recently Posted Jobs
        </h4>
        <Link
          to="/employee/profile/jobs"
          className="flex items-center gap-2 text-base font-medium text-gray-500 transition-all duration-200 hover:text-blue-500"
        >
          View all
          <FaArrowRight />
        </Link>
      </div>
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] px-5 py-[10px] bg-gray-50">
        <div className="text-gray-700 text-xs">JOBS</div>
        <div className="text-gray-700 text-xs">STATUS</div>
        <div className="text-gray-700 text-xs">APPLICATIONS</div>
        <div className="text-gray-700 text-xs">ACTIONS</div>
      </div>
      {jobs.jobs.map((job) => (
        <RecentlyPostedJobsCard
          jobId={job.id}
          title={job.title}
          jobType={job.job_type}
          expiration={calculateDaysRemaining(job.expiration_date)}
        />
      ))}
    </div>
  );
};

export default RecentlyPostedJobs;
