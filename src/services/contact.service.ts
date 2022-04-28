import axios from "axios";
import { EmailMessage } from "../utils/models/EmailMessage";
import env from "../environment";

export default class ContactService {
  private static apiUrl: string = env.API_URL;

  static sendEmail(body: EmailMessage): Promise<any> {
    return axios.post(`${this.apiUrl}/mail`, body).then((res) => res.data);
  }
}
