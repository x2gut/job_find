import { useState } from "react";
import Switcher from "../../components/employeeProfile/settings/switcher";
import CompanyInfo from "../../components/employeeProfile/settings/forms/copmanyInfo/companyInfo";
import FoundingInfo from "../../components/employeeProfile/settings/forms/foundingInfo/foundingInfo";
import AccountSettings from "../../components/employeeProfile/settings/forms/accountSettings/accountSettings";
import { ActiveStep } from "../../types/types";
import SocialLinksEmployer from "../../components/employeeProfile/settings/forms/socialLinks/socialLinks";

const EmployeeProfileSettings = () => {
  const [activeStep, setActiveStep] = useState<ActiveStep>("Company");

  return (
    <div className="pt-12 pl-12">
      <h3 className="text-2xl font-medium text-gray-900 mb-4">Settings</h3>
      <Switcher activeStep={activeStep} setActiveStep={setActiveStep} />
      {activeStep === "Company" && <CompanyInfo />}
      {activeStep === "Founding" && <FoundingInfo />}
      {activeStep === "Socials" && <SocialLinksEmployer />}
      {activeStep === "Settings" && <AccountSettings />}
    </div>
  );
};

export default EmployeeProfileSettings;
