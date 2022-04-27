import React, { Suspense } from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import { appRoutes } from "./routes";

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {appRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Router;
