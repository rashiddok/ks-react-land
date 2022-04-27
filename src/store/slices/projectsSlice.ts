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

export const selectProjects = (state: RootState) => state.projects.data;
