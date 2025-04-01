import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import useCompanyInfoStore from "../../stores/companyInfo";
import { getAllJobsByCompanyid } from "../../api/job";
import RecentlyPostedJobsCard from "../../components/employeeProfile/overview/reentlyPostedJobCard";
import calculateDaysRemaining from "../../helpers/calculateDaysRemain";
import { JobData } from "../../types/types";
import { useState } from "react";

const AllJobs = () => {
  const { id: companyId } = useCompanyInfoStore();
  const [jobsFilter, setJobsFilter] = useState<string>("all");

  const options = [
    { label: "All Jobs", value: "all" },
    { label: "Relevant Jobs", value: "relevant" },
  ];

  const jobs = useQuery({
    queryKey: ["allJobsByCompanyId", companyId, jobsFilter],
    queryFn: async () => {
      if (companyId) {
        return await getAllJobsByCompanyid(
          companyId,
          jobsFilter === "all" ? false : true
        );
      }
    },
  });

  const jobsData = jobs.data || { jobs: [], count: 0 };

  return (
    <div className="mt-10 ml-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-gray-900 text-xl font-medium">
          My Jobs{" "}
          <span className="font-normal text-gray-400">({jobsData.count})</span>
        </h2>
        <div className="flex gap-6 items-center">
          <h6 className="body-small-400">Job status</h6>
          <Select
            isSearchable={false}
            options={options}
            classNames={{
              control: () => "w-[164px] h-12",
              indicatorSeparator: () => "hidden",
            }}
            onChange={(option) => {
              if (option?.value) {
                setJobsFilter(option.value);
              }
            }}
            defaultValue={options[0]}
          />
        </div>
      </div>
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] px-5 py-[10px] bg-gray-50">
        <div className="text-gray-700 text-xs">JOBS</div>
        <div className="text-gray-700 text-xs">STATUS</div>
        <div className="text-gray-700 text-xs">APPLICATIONS</div>
        <div className="text-gray-700 text-xs">ACTIONS</div>
      </div>
      {jobsData.jobs.map((job: JobData) => (
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

export default AllJobs;
