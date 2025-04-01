import { IoIosLogOut } from "react-icons/io";
import { logoutUser } from "../../api/user";
import useAuthStore from "../../stores/authStore";
import Container from "../common/Container";

interface DashboardProps {
  name: string;
  buttons: () => JSX.Element;
}

const Dashboard: React.FC<DashboardProps> = ({ name, buttons }) => {
  const { setIsAuthenticated } = useAuthStore();

  return (
    <div>
      <Container>
        <div className="h-screen max-h-[944px] flex flex-col justify-between max-w-[288px] border-r">
          <div className="flex flex-col">
            <h5 className="pt-6 text-gray-400 text-xs py-3 pl-5">{name}</h5>
            <div className="flex flex-col max-h-[880px] h-screen justify-between">
              <div className="">{buttons()}</div>
              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  logoutUser();
                }}
                className="text-gray-500 text-sm font-medium py-3 pl-5 w-full text-start flex items-center gap-4 hover:bg-[#E7F0FA] transition"
              >
                <IoIosLogOut size={24} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
