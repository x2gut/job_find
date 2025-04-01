import { FiLayers } from "react-icons/fi";
import useUserDataStore from "../../stores/userDataStore";
import Dropdown from "../ui/dropdown/dropdown";
import DropdownButton from "../ui/dropdown/dropdownButton";
import { IoSettingsOutline } from "react-icons/io5";
import { logoutUser } from "../../api/user";
import { IoIosLogOut } from "react-icons/io";
import useAuthStore from "../../stores/authStore";

interface HeaderDropdownProps {
  isVisible: boolean;
  setIsVisible: (state: boolean) => void;
  className?: string;
}

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({
  isVisible,
  setIsVisible,
  className,
}) => {
  if (!isVisible) return null;

  const { username, email, accType } = useUserDataStore();
  const { setIsAuthenticated } = useAuthStore();

  return (
    <Dropdown
      className={className}
      onClose={() => setIsVisible(false)}
      header={
        (username || email) && (
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            {username && <div>{username}</div>}
            {email && <div className="font-medium truncate">{email}</div>}
          </div>
        )
      }
    >
      <>
        <DropdownButton
          className="flex items-center justify-start gap-2"
          to={`/${accType}/profile/overview`}
        >
          <FiLayers size={18} /> Overview
        </DropdownButton>
        <div className="border-b pb-2">
          <DropdownButton
            className="flex items-center justify-start gap-2 min-w-20"
            to={`/${accType}/profile/settings`}
          >
            <IoSettingsOutline size={18} />
            Settings
          </DropdownButton>
        </div>
        <DropdownButton
          to="/"
          className="flex items-center justify-start gap-2"
          onClick={() => {
            logoutUser();
            setIsAuthenticated(false);
          }}
        >
          <IoIosLogOut size={18} />
          Logout
        </DropdownButton>
      </>
    </Dropdown>
  );
};

export default HeaderDropdown;
