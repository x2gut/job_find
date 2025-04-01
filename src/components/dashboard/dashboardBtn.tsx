import { IconType } from "react-icons/lib";
import { Link } from "react-router-dom";

interface DashboardBtnProps {
  to: string;
  icon: IconType;
  name: string;
}

const DashboardBtn: React.FC<DashboardBtnProps> = ({
  icon: Icon,
  name,
  to,
}) => {
  return (
    <Link
      to={to}
      className="text-gray-500 text-sm font-medium py-3 pl-5 w-full text-start flex items-center gap-4 hover:bg-[#E7F0FA] transition"
    >
      {<Icon size={24} />}
      {name}
    </Link>
  );
};

export default DashboardBtn;
