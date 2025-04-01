import Layout from "../layout/mainLayout";
import Main from "../pages/main";
import NotFound404 from "../pages/notFound404";

const mainRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Main /> },
      { path: "*", element: <NotFound404 /> },
    ],
  },
];

export default mainRoutes;
