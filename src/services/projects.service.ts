import axios, { AxiosResponse } from "axios";
import { GalleryItemModel } from "../utils/models/GalleryItemModel";
import { ProjectModel } from "../utils/models/ProjectModel";
import { GalleryImage } from "../utils/models/GalleryImage";
import env from "../environment";

export default class ProjectsService {
  private static apiUrl: string = env.API_URL;

  static getProjects(): Promise<GalleryItemModel[]> {
    return axios
      .get<GalleryItemModel[]>(`${this.apiUrl}/projects`)
      .then((res) => res.data);
  }

  static getProjectByName(shortName: string): Promise<ProjectModel> {
    return axios
      .get<ProjectModel>(`${this.apiUrl}/projects/${shortName}`)
      .then((res) => res.data)
      .then((project) => {
        const files: string[] = JSON.parse(`${project.files}`);
        project.files = files.map(
          (image) => new GalleryImage(image.replace("_cover", ""), image)
        );
        return project;
      });
  }
}
