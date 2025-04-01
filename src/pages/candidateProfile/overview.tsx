import { CgBriefcase } from "react-icons/cg";
import ProfileInfoCard from "../../components/common/profileInfoCard";
import { BsBookmarkDash } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import ProfileNotCompletedBanner from "../../components/common/profileNotCompletedBanner";
import { Link } from "react-router-dom";
import RecentlyAppliedJobs from "../../components/candidateProfile/overview/recentlyAppliedJobs";
import useCandidateStore from "../../stores/candidateStore";
import { useQuery } from "@tanstack/react-query";
import useUserDataStore from "../../stores/userDataStore";
import { getJobApplicationByUserId } from "../../api/jobApplication";
import Spinner from "../../components/common/spinner";

const CandidateProfileOverview = () => {
  const { fullName } = useCandidateStore();
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
      <h4 className="body-large-500 mb-2">Hello, {fullName}</h4>
      <p className="body-small-400">
        Here is your daily activities and job alerts
      </p>
      <div className="flex gap-6 mb-6">
        <ProfileInfoCard
          name="Applied jobs"
          value={data.applications.length}
          icon={CgBriefcase}
          iconColor="#0A65CC"
          color="#E7F0FA"
        />
        <ProfileInfoCard
          name="Favorite jobs"
          value={238}
          icon={BsBookmarkDash}
          iconColor="#FFA500"
          color="#FFF6E6"
        />
        <ProfileInfoCard
          name="Job Alerts"
          value={574}
          icon={IoNotifications}
          iconColor="#0BA02C"
          color="#E7F6EA"
        />
      </div>
      <ProfileNotCompletedBanner />
      <div className="flex justify-between mb-4">
        <h5 className="font-medium text-gray-900 text-base">
          Recently Applied
        </h5>
        <Link className="text-gray-600 font-medium" to="/">
          View All
        </Link>
      </div>
      {<RecentlyAppliedJobs data={data || []} />}
    </div>
  );
};

export default CandidateProfileOverview;
