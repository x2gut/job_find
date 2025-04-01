import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGetCompanyImage } from "../../hooks/common/useGetCompanyMedia";
import Avatar from "./avatar";

const ProfileNotCompletedBanner = () => {
  const navigate = useNavigate();
  const companyPicture = useGetCompanyImage();
  return (
    <div className="bg-red-500 rounded-md flex items-center justify-between px-8 mb-6">
      <div className="flex gap-6 py-8">
        <Avatar profilePicture={companyPicture.data} />
        <div className="flex flex-col gap-2">
          <p className="text-lg font-medium text-white">
            Your profile editing is not completed.
          </p>
          <p className="body-small-400 text-white">
            Complete your profile editing to post a job
          </p>
        </div>
      </div>
      <button
        onClick={() => navigate("/employee/profile/settings")}
        className="flex items-center gap-3 py-3 px-6 bg-white text-red-500 rounded-md font-semibold hover:bg-red-50 duration-200"
      >
        Edit Profile
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ProfileNotCompletedBanner;
