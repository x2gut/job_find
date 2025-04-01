import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import Container from "../common/Container";
import JobCardGrid from "./jobCardGrid";
import JobCardList from "./jobCardList";
import { getFilteredJobs } from "../../api/job";
import { JobData, JobFilters } from "../../types/types";
import JobCardGridSkeleton from "./skeletons/jobCardGridSkeleton";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useEffect } from "react";


interface FindJobContentProps {
  limit: number;
  viewMode: string;
  filters: JobFilters;
}

const FindJobContent: React.FC<FindJobContentProps> = ({
  viewMode,
  filters,
  limit,
}) => {
  const { ref, inView, entry } = useInView();
  
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["filteredJobs", filters, limit],
    queryFn: ({ pageParam = 0 }) =>
      getFilteredJobs({ ...filters, offset: pageParam, limit: limit }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.count >= pages.length * limit
        ? pages.length * limit
        : undefined;
    },
    initialPageParam: 0,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (entry && inView) {
      fetchNextPage();
    }
  }, [entry]);

  if (isFetchingNextPage || !data) {
    return (
      <Container>
        <div className="flex gap-6 flex-wrap mb-12">
          {[...Array(12)].map((_, index) => (
            <JobCardGridSkeleton key={index} />
          ))}
        </div>
      </Container>
    );
  }

  const jobs = data.pages.flatMap((page) => page.jobs);
  const JobComponent = viewMode === "grid" ? JobCardGrid : JobCardList;

  return (
    <Container>
      <div className="flex gap-6 flex-wrap mb-12">
        {jobs.map((item: JobData) => {
          return (
            <Link
              className={clsx("w-full", viewMode === "grid" && "max-w-[424px]")}
              to={`job-details/${item.id}`}
              state={{ job: item }}
              key={item.id}
            >
              <JobComponent
                title={item.title}
                minSalary={item.min_salary}
                maxSalary={item.max_salary}
                location={item.location}
                isPremium={item.is_promoted}
                isFeatured={false}
                type={item.job_type}
                companyName={item.company_name}
                daysRemain={item.expiration_date}
                companyId={item.company_id}
              />
            </Link>
          );
        })}
      </div>

      {/* load trigger */}
      <div className="h-10" ref={ref}></div>
    </Container>
  );
};

export default FindJobContent;
