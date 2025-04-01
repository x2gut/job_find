import { useQuery } from "@tanstack/react-query";
import RecentlyAppliedJobs from "../../components/candidateProfile/overview/recentlyAppliedJobs";
import useUserDataStore from "../../stores/userDataStore";
import { getJobApplicationByUserId } from "../../api/jobApplication";
import Spinner from "../../components/common/spinner";

const AppliedJobs = () => {
  const { id } = useUserDataStore();

  const { data, isLoading } = useQuery({
    queryKey: ["jobApplications", id],
    queryFn: () => {
      if (id) {
        return getJobApplicationByUserId(id);
      }
    },
  });

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="pl-12 pt-14">
      <h4 className="body-large-500 mb-5">
        Applied Jobs <span className="text-gray-400">({data["applications"].length})</span>
      </h4>
      <RecentlyAppliedJobs data={data} />
    </div>
  );
};

export default AppliedJobs;
