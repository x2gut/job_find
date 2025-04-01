import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import UpperHeader from "../components/header/upper-header";
import AppFooter from "../components/footer/appFooter";

const AppLayout: React.FC = () => {
  return (
    <>
      <UpperHeader />
      <Header />
      <Outlet />
      <AppFooter />
    </>
  );
};

export default AppLayout;
