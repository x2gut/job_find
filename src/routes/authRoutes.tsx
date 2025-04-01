import RegisterPage from "../pages/register";
import LoginPage from "../pages/login";
import EmailVerification from "../pages/emailVerif";

const authRoutes = [
  { path: "/sign-up", element: <RegisterPage /> },
  { path: "/sign-in", element: <LoginPage /> },
  { path: "/email-verification/:email", element: <EmailVerification /> },
];

export default authRoutes;
