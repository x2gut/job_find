import { CgBriefcase } from "react-icons/cg";
import { LuSquareUser } from "react-icons/lu";
import RecentlyPostedJobs from "../../components/employeeProfile/overview/recentlyPostedJobs";
import useUserDataStore from "../../stores/userDataStore";
import { useQuery } from "@tanstack/react-query";
import useCompanyInfoStore from "../../stores/companyInfo";
import { getAllJobsByCompanyid } from "../../api/job";
import ProfileNotCompletedBanner from "../../components/common/profileNotCompletedBanner";
import { getJobApplicationByUserId } from "../../api/jobApplication";

const EmployeeProfileOverview = () => {
  const { id } = useUserDataStore();
  const {
    id: companyId,
    isCompanyCompleted,
    savedCandidates,
  } = useCompanyInfoStore();
  const { username } = useUserDataStore();

  const jobs = useQuery({
    queryKey: ["allJobsByCompanyId", companyId],
    queryFn: async () => {
      if (companyId) {
        return await getAllJobsByCompanyid(companyId, false);
      }
    },
  });

  const jobsData = jobs.data || { jobs: [], count: 0 };

  return (
    <div className="w-full pt-[54px] pl-12">
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        Hello, {username}!
      </h3>
      <p className="text-sm text-gray-500">
        Here is your daily activities and applications
      </p>
      <div className="flex gap-6 mb-6">
        <div className="p-6 bg-[#E7F0FA] rounded-md mt-6 flex justify-between items-center w-[312px]">
          <div className="">
            <p className="text-2xl font-semibold text-gray-900">
              {jobsData.count}
            </p>
            <p className="text-gray-900 text-sm">Open Jobs</p>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <CgBriefcase size={32} color="#0A65CC" />
          </div>
        </div>
        <div className="p-6 bg-[#FFF6E6] rounded-md mt-6 flex justify-between items-center w-[312px]">
          <div className="">
            <p className="text-2xl font-semibold text-gray-900">
              {savedCandidates.length}
            </p>
            <p className="text-gray-900 text-sm">Saved Candidates</p>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <LuSquareUser size={32} color="#FFA500" />
          </div>
        </div>
      </div>
      {!isCompanyCompleted && <ProfileNotCompletedBanner />}
      <RecentlyPostedJobs jobs={jobsData} />
    </div>
  );
};

export default EmployeeProfileOverview;
