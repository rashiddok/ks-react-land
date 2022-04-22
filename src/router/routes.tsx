import Home from "../views/Home";
import Project from "../views/Project";
import {useRoutes} from "react-router-dom";

export const appRoutes = [
    {
        path: '/', element: <Home/>
    },
    {
        path: '/projects/:projectname', element: <Project/>
    }
]

// export default AppRoutes