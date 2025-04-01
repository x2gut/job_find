import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import UpperHeader from "../components/header/upper-header";
import Footer from "../components/footer/footer";
import FooterBottom from "../components/footer/footerBottom";

const Layout: React.FC = () => {
  return (
    <>
      <header>
        <UpperHeader />
        <Header />
      </header>
      <Outlet />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Layout;
