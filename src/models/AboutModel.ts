export class AboutModel {
  id: number;
  photo: string;
  text: string;

  constructor(id: number, photo: string, text: string) {
    this.id = id;
    this.photo = photo;
    this.text = text;
  }
}
