import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./slices/themeSlice";
import ProjectsReducer from "./slices/projectsSlice";

const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    projects: ProjectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
