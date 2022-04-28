import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProjectModel } from "../../utils/models/ProjectModel";
import ProjectsService from "../../services/projects.service";
import { GalleryItemModel } from "../../utils/models/GalleryItemModel";
import { Theme } from "../../utils/types/ThemeTypes";
import { RootState } from "../store";

interface ProjectState {
  data: GalleryItemModel[];
  status: "idle" | "loading" | "succeed" | "error";
  error: string | null;
}

const initialState: ProjectState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const res = await ProjectsService.getProjects();
    return res;
  }
);

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeed";
        state.data = action.payload;
      });
  },
});

export default projectsSlice.reducer;

export const selectProjectNeighboursName = (
  state: RootState,
  projectName: string
) => {
  const projects = state.projects.data;
  const projectIndex = projects.findIndex((p) => p.shortTitle === projectName);
  return {
    next: projects[projectIndex + 1]?.shortTitle,
    prev: projects[projectIndex - 1]?.shortTitle,
  };
};

export const selectProjects = (state: RootState) => state.projects.data;

export const selectRandomProjects = (state: RootState) =>
  [...state.projects.data].sort(() => 0.5 - Math.random()).slice(0, 3);
