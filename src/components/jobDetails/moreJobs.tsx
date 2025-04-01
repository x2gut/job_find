import { useQuery } from "@tanstack/react-query";
import { getAllJobsByCompanyid } from "../../api/job";
import JobCardGridSkeleton from "../find-job/skeletons/jobCardGridSkeleton";
import JobCardGrid from "../find-job/jobCardGrid";
import { JobData } from "../../types/types";
import { Link } from "react-router-dom";

interface MoreJobsProps {
  currentJobId: number;
  companyId: number;
}

const MoreJobs: React.FC<MoreJobsProps> = ({ companyId, currentJobId }) => {
  const moreJobsQuery = useQuery({
    queryKey: ["allJobsByCompanyid", companyId],
    queryFn: async () => {
      return await getAllJobsByCompanyid(companyId, true);
    },
  });

  const moreJobsQueryData = moreJobsQuery.data || { jobs: [], count: 0 };

  return (
    <div className="my-24">
      <h4 className="text-[40px] text-[#191F33] font-medium">
        More Jobs from the Company
      </h4>
      <div className="flex flex-wrap gap-6 mt-[50px]">
        {moreJobsQueryData.isLoading ? (
          <JobCardGridSkeleton />
        ) : (
          moreJobsQueryData.jobs.map((item: JobData) => {
            if (currentJobId === item.id) {
              return null;
            }
            return (
              <Link
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="w-full max-w-[422px]"
                to={`/find-job/job-details/${item.id}`}
              >
                <JobCardGrid
                  companyId={item.company_id}
                  companyName={item.company_name}
                  location={item.location}
                  isPremium={item.is_promoted}
                  isFeatured={false}
                  minSalary={item.min_salary}
                  maxSalary={item.max_salary}
                  title={item.title}
                  type={item.job_type}
                  key={item.id}
                />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MoreJobs;
