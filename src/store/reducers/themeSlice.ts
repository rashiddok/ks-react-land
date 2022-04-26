import {
  AvailableThemes,
  ThemeAction,
  ThemeActionTypes,
  ThemeState,
} from "../../utils/types/ThemeTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ThemeState = {
  value:
    (localStorage.getItem("app_theme") as AvailableThemes) ||
    AvailableThemes.THEME_LIGHT,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: ThemeAction) => {
      state.value = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
