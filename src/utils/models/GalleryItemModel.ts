export class GalleryItemModel{
    index?: number
    title: string;
    shortTitle: string;
    cover: string;

    constructor(title: string, shortTitle: string, cover: string, index?: number){
        this.index = index;
        this.title = title;
        this.shortTitle = shortTitle;
        this.cover = cover;
    }
}