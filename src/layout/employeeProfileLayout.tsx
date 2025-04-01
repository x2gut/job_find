import { Outlet } from "react-router-dom";
import UpperHeader from "../components/header/upper-header";
import EmployeeDashboard from "../components/dashboard/employerDashboard";
import EmployeeProfileHeader from "../components/header/employeeProfileHeader";
import Container from "../components/common/Container";
import AppFooter from "../components/footer/appFooter";

const EmployeeProfileLayout = () => {
  return (
    <>
      <UpperHeader />
      <EmployeeProfileHeader />
      <Container className="flex">
        <div className="w-full max-w-[288px]">
          <EmployeeDashboard />
        </div>
        <div className="flex-grow">
          <Outlet />
        </div>
      </Container>
      <AppFooter />
    </>
  );
};

export default EmployeeProfileLayout;
