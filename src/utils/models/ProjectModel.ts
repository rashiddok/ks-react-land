import { GalleryImage } from "./GalleryImage";

export class ProjectModel{
    title: string;
    description: string;
    category: string;
    shortTitle: string;
    cover: string;
    files: GalleryImage[];

    constructor(title: string, description: string, category: string, shortTitle: string, cover: string, files: GalleryImage[]) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.shortTitle = shortTitle;
        this.cover = cover;
        this.files = files
    }
}