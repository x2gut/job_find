import { LuBriefcaseBusiness } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="flex items-center gap-2 py-6 min-w-[150px]"
    >
      <LuBriefcaseBusiness color="#0A65CC" size={40} />
      <span className="text-2xl font-semibold">My Job</span>
    </button>
  );
};

export default Logo;
