import {Theme} from "./types/ThemeTypes";

export const setThemeStyles = (theme: Theme): void => {
    Object.keys(theme.properties).forEach(property => {
        document.documentElement.style.setProperty(
            property,
            theme.properties[property]
        );
    });
    localStorage.setItem('app_theme', theme.name)
}