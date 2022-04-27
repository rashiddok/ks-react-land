import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { AvailableThemes } from "../../utils/types/ThemeTypes";
import { getTheme, setTheme } from "../../store/reducers/themeSlice";
import { useTypedSelector } from "../../hooks/useTypedState";

const buttonClasses = {
  border: "unset",
  background: "unset",
  cursor: "pointer",
};

const ThemeSwitchButton = () => {
  const themePreference = useTypedSelector(getTheme);
  const dispatch = useDispatch();
  const [themeIcon, setThemeIcon] = useState(faMoon);

  function changeTheme(icon: IconDefinition, theme: AvailableThemes) {
    setThemeIcon(icon);
    dispatch(setTheme(theme));
  }

  function switchTheme() {
    if (themePreference === AvailableThemes.THEME_DARK) {
      changeTheme(faSun, AvailableThemes.THEME_LIGHT);
      return;
    }
    changeTheme(faMoon, AvailableThemes.THEME_DARK);
  }

  return (
    <button style={buttonClasses} onClick={() => switchTheme()}>
      <FontAwesomeIcon
        icon={themeIcon}
        size="lg"
        style={{ background: "var(--foreground-default)" }}
      />
    </button>
  );
};

export default ThemeSwitchButton;
