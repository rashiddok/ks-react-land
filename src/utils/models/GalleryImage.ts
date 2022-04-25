export class GalleryImage{
    id?: number;
    image: string;
    cover: string;

    constructor(image: string, cover: string, id?: number) {
        this.image = image;
        this.cover = cover
        this.id = id
    }
}