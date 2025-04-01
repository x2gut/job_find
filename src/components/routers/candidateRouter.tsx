import { Navigate, Outlet } from "react-router-dom";
import useUserDataStore from "../../stores/userDataStore";
import Spinner from "../common/spinner";

const CandidateRouter = () => {
  const { accType } = useUserDataStore();

  if (accType === null) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (accType !== "candidate") {
    return <Navigate to={"/"} replace={true} />;
  }
  return <Outlet />;
};

export default CandidateRouter;
