import { useState } from "react";
import Switcher from "../../components/employeeProfile/settings/switcher";
import { ActiveStep } from "../../types/types";
import Profile from "../../components/candidateProfile/settings/forms/profile/profile";
import PersonalForm from "../../components/candidateProfile/settings/forms/personal/personal";
import SocialLinksCandidate from "../../components/candidateProfile/settings/forms/socialLinks";
import AccountSettingsCandidate from "../../components/candidateProfile/settings/forms/accountSettings/accountSettings";

const CandidateProfileSettings = () => {
  const [activeStep, setActiveStep] = useState<ActiveStep>("Personal");

  return (
    <div className="pt-12 pl-12">
      <h3 className="text-2xl font-medium text-gray-900 mb-4">Settings</h3>
      <Switcher activeStep={activeStep} setActiveStep={setActiveStep} />
      {activeStep === "Personal" && <PersonalForm />}
      {activeStep === "Profile" && <Profile />}
      {activeStep === "Socials" && <SocialLinksCandidate />}
      {activeStep === "Settings" && <AccountSettingsCandidate />}
    </div>
  );
};

export default CandidateProfileSettings;
