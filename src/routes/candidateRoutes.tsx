import CandidateProfileLayout from "../layout/candidateProfileLayout";
import CandidateProfileOverview from "../pages/candidateProfile/overview";
import AppliedJobs from "../pages/candidateProfile/appliedJobs";
import CandidateProfileSettings from "../pages/candidateProfile/settings";
import CandidateRouter from "../components/routers/candidateRouter";

const candidateRoutes = {
  element: <CandidateRouter />,
  children: [
    {
      path: "candidate/profile",
      element: <CandidateProfileLayout />,
      children: [
        { path: "overview", element: <CandidateProfileOverview /> },
        { path: "applied", element: <AppliedJobs /> },
        { path: "settings", element: <CandidateProfileSettings /> },
      ],
    },
  ],
};

export default candidateRoutes;
