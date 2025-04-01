import { FaRegCalendar } from "react-icons/fa";
import { PiSuitcaseSimple, PiTimer } from "react-icons/pi";
import { IoLocationOutline, IoWalletOutline } from "react-icons/io5";
import JobOverviewCard from "./jobOverviewCard";

interface JobOverviewProps {
  jobPosted: string;
  jobExpire: string;
  education: string;
  minSalary: number;
  maxSalary: number;
  location: string;
  jobType: string;
  experience: string;
}

const JobOverview: React.FC<JobOverviewProps> = ({
  jobPosted,
  jobExpire,
  education,
  minSalary,
  maxSalary,
  location,
  jobType,
  experience,
}) => {
  const jobPostedDate = new Date(jobPosted);
  const jobExpireDate = new Date(jobExpire);

  return (
    <div className="border rounded-lg p-8 max-h-[438px] max-w-[536px]">
      <h5 className="body-large-500">Job Overview</h5>
      <div className="flex gap-5 flex-wrap mt-6">
        <JobOverviewCard
          icon={FaRegCalendar}
          name="Job Posted:"
          value={
            jobPostedDate instanceof Date && !isNaN(jobPostedDate.getTime())
              ? jobPostedDate.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              : "Invalid date"
          }
        />
        <JobOverviewCard
          icon={PiTimer}
          name="Job expire in:"
          value={
            jobExpireDate instanceof Date && !isNaN(jobExpireDate.getTime())
              ? jobExpireDate.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              : "Invalid date"
          }
        />
        <JobOverviewCard
          icon={IoWalletOutline}
          name="Education"
          value={education}
        />
        <JobOverviewCard
          icon={IoWalletOutline}
          name="Salary:"
          value={`${minSalary} - ${maxSalary}$`}
        />
        <JobOverviewCard
          icon={IoLocationOutline}
          name="Location:"
          value={location}
        />
        <JobOverviewCard
          icon={PiSuitcaseSimple}
          name="Job Type:"
          value={jobType}
        />
        <JobOverviewCard
          icon={PiSuitcaseSimple}
          name="Experience"
          value={experience}
        />
      </div>
    </div>
  );
};

export default JobOverview;
