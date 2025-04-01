import { FiLayers } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import Dashboard from "./dashboard";
import DashboardBtn from "./dashboardBtn";

const EmployeeDashboard = () => {
  const buttons = () => (
    <>
      <DashboardBtn
        name="Overview"
        to="/employee/profile/overview"
        icon={FiLayers}
      />
      <DashboardBtn
        name="Employers Profile"
        to="/employee/profile/overview"
        icon={CgProfile}
      />
      <DashboardBtn
        name="Post a Job"
        to="/employee/profile/post-job"
        icon={IoIosAddCircleOutline}
      />
      <DashboardBtn
        name="My Jobs"
        to="/employee/profile/jobs"
        icon={LuBriefcaseBusiness}
      />
      <DashboardBtn
        name="Saved candidates"
        to="/employee/profile/saved-candidates"
        icon={FaRegBookmark}
      />
      {/* <button className="text-gray-500 text-sm font-medium py-3 pl-5 w-full text-start flex items-center gap-4 hover:bg-[#E7F0FA] transition">
        <MdOutlineEventNote size={24} />
        Plans & Billing
      </button> */}
      {/* <button className="text-gray-500 text-sm font-medium py-3 pl-5 w-full text-start flex items-center gap-4 hover:bg-[#E7F0FA] transition">
        <FaUsersRectangle size={24} />
        All Companies
      </button> */}
      <DashboardBtn
        name="Settings"
        to="/employee/profile/settings"
        icon={IoSettingsOutline}
      />
    </>
  );

  return <Dashboard name="EMPLOYERS DASHBOARD" buttons={buttons} />;
};

export default EmployeeDashboard;
