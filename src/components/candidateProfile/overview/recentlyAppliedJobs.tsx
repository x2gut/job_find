import { AppliedJobList, JobDetails } from "../../../types/types";
import RecentlyAppliedJobCard from "./recentlyAppliedJobCard";

const RecentlyAppliedJobs = ({ data }: { data: AppliedJobList<JobDetails> }) => {
  return (
    <>
      <div className="grid grid-cols-[3fr_1fr_1fr_1fr] px-5 py-[10px] bg-gray-50">
        <div className="text-gray-700 text-xs">Job</div>
        <div className="text-gray-700 text-xs">Date Applied</div>
        <div className="text-gray-700 text-xs">Status</div>
        <div className="text-gray-700 text-xs">Action</div>
      </div>
      {data.applications.map((application) => (
        <RecentlyAppliedJobCard data={application} />
      ))}
    </>
  );
};

export default RecentlyAppliedJobs;
