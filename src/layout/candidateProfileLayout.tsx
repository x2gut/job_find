import { Outlet } from "react-router-dom";
import UpperHeader from "../components/header/upper-header";
import Container from "../components/common/Container";
import AppFooter from "../components/footer/appFooter";
import CandidateDashboad from "../components/dashboard/candidateDashboard";
import CandidateProfileHeader from "../components/header/candidateProfileHeader";

const CandidateProfileLayout = () => {
  return (
    <>
      <UpperHeader />
      <CandidateProfileHeader />
      <Container className="flex">
        <div className="w-full max-w-[288px]">
          <CandidateDashboad />
        </div>
        <div className="flex-grow">
          <Outlet />
        </div>
      </Container>
      <AppFooter />
    </>
  );
};

export default CandidateProfileLayout;
