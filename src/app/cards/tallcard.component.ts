import { Component, Input } from "@angular/core";

@Component({
    selector: 'hbo-tallcard',
    templateUrl: 'tallcard.component.html',
    styleUrls: ['tallcard.component.css','widecard.component.css']
})
export class TallCardComponent{
    @Input() tall_img: string;
    @Input() subtitle_HBO: string;

    constructor(){
        this.tall_img = "./assets/";
        this.subtitle_HBO = "HBO";
    }
}