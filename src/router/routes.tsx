import { lazy } from "react";

const Home = lazy(() => import("../views/Home"));
const Project = lazy(() => import("../views/Project/Project"));
const About = lazy(() => import("../views/About/About"));
const Contact = lazy(() => import("../views/Contact/Contact"));

export const appRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects/:projectname",
    element: <Project />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

// export default AppRoutes
