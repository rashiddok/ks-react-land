import Home from "../views/Home";
import Project from "../views/Project/Project";
import About from "../views/About/About";
import Contact from "../views/Contact/Contact";

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
