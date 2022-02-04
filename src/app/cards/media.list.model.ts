export class MediaListModel {
    square_img: string;
    wide_img: string;
    tall_img: string;
    Xtall_img: string;
    title: String;
    subtitle_HBO: string;

    constructor(square_img: string, wide_img: string, tall_img: string, Xtall_img: string, title: string, subtitle_HBO: string){
        this.square_img = square_img;
        this.wide_img = wide_img;
        this.tall_img = tall_img;
        this.Xtall_img = Xtall_img;
        this.title = title;
        this.subtitle_HBO = subtitle_HBO;
    }
}