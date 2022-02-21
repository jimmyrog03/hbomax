import { Component, Input } from "@angular/core";

@Component({
    selector: 'hbo-Xwidecard',
    templateUrl: 'Xwidecard.component.html',
    styleUrls: ['Xwidecard.component.css','squarecard.component.css']
})
export class XWideCardComponent{
    @Input() Xwide_img: string;
    @Input() subtitle_HBO: string;

    constructor(){
        this.Xwide_img = "./assets/";
        this.subtitle_HBO = "HBO";
    }
}