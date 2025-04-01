import useAccountSettingsForm from "../../../../../hooks/forms/employer/useAccountSettingsForm";
import AccountClose from "./accountDelete";
import ChangePasswordForm from "./changePasswordForm";
import MainForm from "./mainForm";

const AccountSettings = () => {
  const { handleChangePassword } = useAccountSettingsForm();
  return (
    <div className="pb-[102px]">
      <h5 className="body-large-500 mb-[18px]">Contact Information</h5>
      <div>
        <MainForm />
      </div>
      <div>
        <ChangePasswordForm handleChangePassword={handleChangePassword} />
      </div>
      <div>
        <AccountClose />
      </div>
    </div>
  );
};

export default AccountSettings;
