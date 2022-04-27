export enum AvailableThemes {
  THEME_LIGHT = "THEME_LIGHT",
  THEME_DARK = "THEME_DARK",
}

export interface Theme {
  name: AvailableThemes;
  properties: any;
}

export const themeLight: Theme = {
  name: AvailableThemes.THEME_LIGHT,
  properties: {
    "--foreground-default": "#000000",
    "--foreground-secondary": "#4d4d4d",
    "--foreground-tertiary": "#f4faff",
    "--foreground-light": "#797979",
    "--background-default": "#ffffff",
    "--background-secondary": "#eee",
    "--background-tertiary": "#c1c1c1",
    "--background-fortiary": "#777",
    "--box-shadow-light": "rgba(0, 0, 0, .15)",
    "--box-shadow-dark": "rgba(0, 0, 0, .5)",
  },
};

export const themeDark: Theme = {
  name: AvailableThemes.THEME_DARK,
  properties: {
    "--foreground-default": "#f2f2f2",
    "--foreground-secondary": "#d4d4d4",
    "--foreground-tertiary": "#f4faff",
    "--foreground-light": "#ebebeb",
    "--background-default": "#121212",
    "--background-secondary": "#1a1a1a",
    "--background-tertiary": "#4d4d4d",
    "--background-fortiary": "#333",
    "--box-shadow-light": "rgba(0, 0, 0, .15)",
    "--box-shadow-dark": "rgba(0, 0, 0, .5)",
  },
};
