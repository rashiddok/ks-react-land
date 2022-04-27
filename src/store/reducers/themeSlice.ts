import {
  AvailableThemes,
  ThemeAction,
  ThemeState,
} from "../../utils/types/ThemeTypes";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  value: localStorage.getItem("app_theme") || AvailableThemes.THEME_LIGHT,
} as ThemeState;

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

export const getTheme = (state: RootState) => state.theme.value;
