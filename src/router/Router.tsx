import React from 'react';
import {Route, Routes, useRoutes} from "react-router-dom";
import {appRoutes} from "./routes";

const Router = () => {
    return (
        <Routes>
            {appRoutes.map(route=>
                <Route path={route.path} element={route.element} key={route.path} />
            )}
        </Routes>
    );
};

export default Router;