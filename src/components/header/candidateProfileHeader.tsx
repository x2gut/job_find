import { IoIosNotificationsOutline } from "react-icons/io";
import Container from "../common/Container";
import Logo from "../ui/logo";
import { useState } from "react";
import Avatar from "../common/avatar";
import HeaderDropdown from "./headerDropdown";
import useCandidateStore from "../../stores/candidateStore";

const CandidateProfileHeader = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { profilePicture } = useCandidateStore();

  return (
    <div className="border-b">
      <Container>
        <div className="flex justify-between max-h-[90px] py-[21px]">
          <Logo />
          <div className="flex items-center gap-6">
            <IoIosNotificationsOutline size={24} />
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

export default CandidateProfileHeader;
