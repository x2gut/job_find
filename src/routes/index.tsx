import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/appLayout";
import FindJobPage from "../pages/findJob";
import JobDetails from "../pages/jobDetails";
import PrivateRoute from "./privateRoute";
import mainRoutes from "./mainRoutes";
import authRoutes from "./authRoutes";
import candidateRoutes from "./candidateRoutes";
import employerRoutes from "./employerRoutes";

const mainRouter = createBrowserRouter([
  ...mainRoutes,
  ...authRoutes,
  {
    path: "/find-job",
    element: <AppLayout />,
    children: [
      { path: "/find-job", element: <FindJobPage /> },
      { path: "job-details/:jobId", element: <JobDetails /> },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [candidateRoutes, employerRoutes],
  },
]);

export default mainRouter;
