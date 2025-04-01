import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../stores/authStore";
import Spinner from "../components/common/spinner";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthStore();
  const location = useLocation();

  if (isAuthenticated === null) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (isAuthenticated === false) {
    return <Navigate to={`/sign-in?redirect=${location.pathname}`} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
