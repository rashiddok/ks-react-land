import axios from "axios";
import { EmailMessage } from "../utils/models/EmailMessage";

export default class ContactService {
  private static apiUrl: string = "http://localhost:3000";

  static sendEmail(body: EmailMessage): Promise<any> {
    return axios.post(`${this.apiUrl}/mail`, body).then((res) => res.data);
  }
}
