import React, { Suspense, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import Loader from "../components/UI/Loader/Loader";

const Router = () => {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {AppRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Router;
