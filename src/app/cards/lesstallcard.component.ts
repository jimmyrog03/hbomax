import { Component, Input } from "@angular/core";

@Component({
    selector: 'hbo-less-tallcard',
    templateUrl: 'lesstallcard.component.html',
    styleUrls: ['lesstallcard.component.css','squarecard.component.css']
})
export class LessTallCardComponent{
    @Input() tall_img: string;
    @Input() subtitle_HBO: string;

    constructor(){
        this.tall_img = "./assets/";
        this.subtitle_HBO = "HBO";
    }
}