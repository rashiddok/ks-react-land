import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Router from "./router/Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useTypedSelector } from "./hooks/useTypedState";
import { getTheme } from "./store/slices/themeSlice";
import {
  AvailableThemes,
  themeDark,
  themeLight,
} from "./utils/types/ThemeTypes";
import { setThemeStyles } from "./utils/themeUtils";

function App() {
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
    <BrowserRouter>
      <div className={"theme " + getThemeClass()}>
        <Header />
        <Router></Router>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
