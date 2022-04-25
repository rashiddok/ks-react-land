import axios from "axios";
import { AboutModel } from "../utils/models/AboutModel";

export default class AboutService {
  private static apiUrl: string = "http://localhost:3000";

  static getAbout(): Promise<AboutModel> {
    return axios
      .get<AboutModel>(`${this.apiUrl}/about`)
      .then((res) => res.data);
  }
}
