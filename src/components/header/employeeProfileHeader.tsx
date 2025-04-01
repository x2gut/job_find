import { IoIosNotificationsOutline } from "react-icons/io";
import Container from "../common/Container";
import Logo from "../ui/logo";
import Button from "../ui/button";
import useCompanyInfoStore from "../../stores/companyInfo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Avatar from "../common/avatar";
import HeaderDropdown from "./headerDropdown";

const EmployeeProfileHeader = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { profilePicture } = useCompanyInfoStore();
  const navigate = useNavigate();

  return (
    <div className="border-b">
      <Container>
        <div className="flex justify-between max-h-[90px] py-[21px]">
          <Logo />
          <div className="flex items-center gap-6">
            <IoIosNotificationsOutline size={24} />
            <Button
              onClick={() => navigate("/employee/profile/post-job")}
              primary={false}
              className="rounded-sm border-blue-500 border-2"
            >
              Post a Job
            </Button>
            <div>
              <button
                onClick={() => setIsDropdownVisible((prev) => !prev)}
                className="flex items-center gap-2"
              >
                <Avatar profilePicture={profilePicture} />
              </button>
              <HeaderDropdown
                className="-translate-x-16"
                isVisible={isDropdownVisible}
                setIsVisible={setIsDropdownVisible}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EmployeeProfileHeader;
