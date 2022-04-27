import React, { useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {
  AvailableThemes,
  themeDark,
  themeLight,
} from "../utils/types/ThemeTypes";
import { setThemeStyles } from "../utils/themeUtils";
import { useTypedSelector } from "../hooks/useTypedState";
import { getTheme } from "../store/reducers/themeSlice";

const Layout = ({ children }: any) => {
  const themePreference = useTypedSelector(getTheme);

  function getThemeClass() {
    if (themePreference === AvailableThemes.THEME_DARK) {
      setThemeStyles(themeDark);
      return "theme_dark";
    } else {
      setThemeStyles(themeLight);
      return "theme_light";
    }
  }

  return (
    <div className={getThemeClass()}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
