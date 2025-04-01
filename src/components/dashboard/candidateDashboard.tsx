import { FiLayers, FiSettings } from "react-icons/fi";
import DashboardBtn from "./dashboardBtn";
import Dashboard from "./dashboard";
import { BsBriefcase } from "react-icons/bs";

const CandidateDashboad = () => {
  const buttons = () => (
    <>
      <DashboardBtn
        name="Overview"
        to="/candidate/profile/overview"
        icon={FiLayers}
      />
      <DashboardBtn
        name="Applied Jobs"
        to="/candidate/profile/applied"
        icon={BsBriefcase}
      />
      <DashboardBtn
        name="Settings"
        to="/candidate/profile/settings"
        icon={FiSettings}
      />
    </>
  );

  return <Dashboard name="EMPLOYERS DASHBOARD" buttons={buttons} />;
};

export default CandidateDashboad;
