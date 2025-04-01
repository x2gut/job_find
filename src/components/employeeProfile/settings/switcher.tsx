import clsx from "clsx";
import { SetStateAction } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { RiGlobalLine } from "react-icons/ri";
import useCompanyInfoStore from "../../../stores/companyInfo";
import { ActiveStep } from "../../../types/types";
import useUserDataStore from "../../../stores/userDataStore";
import { PiUserLight } from "react-icons/pi";

interface SwitcherProps {
  activeStep: ActiveStep;
  setActiveStep: React.Dispatch<SetStateAction<ActiveStep>>;
}

const steps = [
  {
    name: "Personal",
    label: "Personal Info",
    icon: PiUserLight,
    account: "candidate",
  },
  {
    name: "Profile",
    label: "Profile",
    icon: FaRegCircleUser,
    account: "candidate",
  },
  {
    name: "Company",
    label: "Company Info",
    icon: AiOutlineUser,
    account: "employee",
  },
  {
    name: "Founding",
    label: "Founding Info",
    icon: FaRegCircleUser,
    account: "employee",
  },
  {
    name: "Socials",
    label: "Social Media Profile",
    icon: RiGlobalLine,
    account: "",
  },
  {
    name: "Settings",
    label: "Account Setting",
    icon: IoSettingsOutline,
    account: "",
  },
];

const Switcher: React.FC<SwitcherProps> = ({ activeStep, setActiveStep }) => {
  const { accType } = useUserDataStore();
  const { companyName, location, aboutUs } = useCompanyInfoStore();

  const stepWarnings: Record<string, boolean> = {
    Company: !companyName || !aboutUs,
    Settings: !location,
  };

  return (
    <div className="flex w-full gap-3 mb-8 border-b">
      {steps
        .filter(({ account }) => !account || account === accType)
        .map(({ name, label, icon: Icon }) => {
          return (
            <button
              key={name}
              onClick={() => setActiveStep(name as any)}
              className={clsx(
                "text-sm font-medium flex items-center gap-2 py-3 px-5 hover:text-blue-500 duration-300",
                activeStep === name
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : stepWarnings[name]
                  ? "text-red-500"
                  : "text-gray-500"
              )}
            >
              {stepWarnings[name] && (
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
              )}
              <Icon size={24} />
              {label}
            </button>
          );
        })}
    </div>
  );
};

export default Switcher;
