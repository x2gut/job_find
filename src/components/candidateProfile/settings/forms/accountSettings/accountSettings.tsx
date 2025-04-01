import ChangePasswordForm from "../../../../employeeProfile/settings/forms/accountSettings/changePasswordForm";
import NotificationSettings from "./notificationSettings";
import JobAlertsSettings from "./jobAlertsSettings";
import ProfilePrivacy from "./profilePrivacy";
import CandidateContactInfo from "./contactInfo";

const AccountSettingsCandidate = () => {
  return (
    <div>
      <div className="w-full border-b pb-8">
        <CandidateContactInfo />
      </div>
      <div className="w-full border-b pb-8">
        <NotificationSettings />
      </div>
      <div className="w-full border-b pb-8">
        <JobAlertsSettings />
      </div>
      <div className="w-full border-b pb-8 mt-8">
        <ProfilePrivacy />
      </div>
      <ChangePasswordForm handleChangePassword={() => {}} />
    </div>
  );
};

export default AccountSettingsCandidate;
