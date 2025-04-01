import EmployeeProfileLayout from "../layout/employeeProfileLayout";
import EmployeeProfileOverview from "../pages/employeeProfile/overview";
import EmployeeProfileSettings from "../pages/employeeProfile/settings";
import PostJob from "../pages/employeeProfile/postJob";
import AllJobs from "../pages/employeeProfile/allJobs";
import EmployerRouter from "../components/routers/employerRouter";
import Applications from "../pages/employeeProfile/applications";
import SavedCandidates from "../pages/employeeProfile/savedCandidates";

const employerRoutes = {
  element: <EmployerRouter />,
  children: [
    {
      path: "/employee/profile",
      element: <EmployeeProfileLayout />,
      children: [
        { path: "overview", element: <EmployeeProfileOverview /> },
        { path: "settings", element: <EmployeeProfileSettings /> },
        { path: "post-job", element: <PostJob /> },
        { path: "jobs", element: <AllJobs /> },
        { path: "applications/:id", element: <Applications /> },
        { path: "saved-candidates", element: <SavedCandidates /> },
      ],
    },
  ],
};

export default employerRoutes;
