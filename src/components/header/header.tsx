import { SlMagnifier } from "react-icons/sl";
import Container from "../common/Container";
import Select from "react-select";
import SwedenFlag from "../../assets/icons/sweden.svg";
import UkraineFlag from "../../assets/icons/ukraine.svg";
import UsFlag from "../../assets/icons/usa.svg";
import Button from "../ui/button";
import { selectCustomStyles } from "../../constants/react-select-styles";
import Logo from "../ui/logo";
import useAuthStore from "../../stores/authStore";
import useCompanyInfoStore from "../../stores/companyInfo";
import { useNavigate } from "react-router-dom";
import Avatar from "../common/avatar";
import { useState } from "react";
import HeaderDropdown from "./headerDropdown";
import useCandidateStore from "../../stores/candidateStore";

function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const { isAuthenticated, isLoading: isAuthLoading } = useAuthStore();
  const { profilePicture: companyPicture } = useCompanyInfoStore();
  const { profilePicture: candidatePicture } = useCandidateStore();
  const navigate = useNavigate();

  const profilePicture = companyPicture || candidatePicture;

  const options = [
    {
      value: "sweden",
      label: (
        <div className="flex items-center gap-2">
          <img src={SwedenFlag} alt="Sweden" className="w-6 h-4" />
          Sweden
        </div>
      ),
    },
    {
      value: "ukraine",
      label: (
        <div className="flex items-center gap-2">
          <img src={UkraineFlag} alt="Ukraine" className="w-6 h-4" />
          Ukraine
        </div>
      ),
    },
    {
      value: "usa",
      label: (
        <div className="flex items-center gap-2">
          <img src={UsFlag} alt="USA" className="w-6 h-4" />
          USA
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Container>
        <div className="flex items-center gap-8">
          <Logo />
          <div className="w-full">
            <div className="w-full border border-gray-200 rounded-xl p-1 flex items-center max-w-[660px]">
              <Select
                classNames={{
                  control: () => "w-[170px]",
                }}
                options={options}
                styles={selectCustomStyles}
                placeholder="Country"
              />
              <span className="w-[1px] h-8 bg-[#E4E5E8]"></span>
              <SlMagnifier color="#0066FF" className="mx-4 w-5 h-5" />
              <input
                type="text"
                className="border-none outline-none shadow-none w-full"
                placeholder="Job title, keyword, company"
              />
            </div>
          </div>
          {isAuthLoading ? (
            <div className="w-12 h-12 bg-gray-300 animate-pulse rounded-full flex-shrink-0"></div>
          ) : !isAuthenticated ? (
            <div className="flex items-center gap-3 min-w-[260px] flex-row-reverse">
              <Button
                onClick={() => navigate("/employee/profile/post-job")}
                primary={true}
              >
                Post a Job
              </Button>
              <Button onClick={() => navigate("/sign-up")} primary={false}>
                Sign In
              </Button>
            </div>
          ) : (
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
          )}
        </div>
      </Container>
    </div>
  );
}

export default Header;
