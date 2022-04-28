import axios from "axios";
import { AboutModel } from "../utils/models/AboutModel";
import env from "../environment";

class AboutService {
  private static apiUrl: string = env.API_URL;

  static getAbout(): Promise<AboutModel> {
    return axios
      .get<AboutModel>(`${this.apiUrl}/about`)
      .then((res) => res.data);
  }
}

export const getAbout = () => AboutService.getAbout();
