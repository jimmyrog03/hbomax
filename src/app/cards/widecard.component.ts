import { Component, Input } from "@angular/core";

@Component({
    selector: 'hbo-widecard',
    templateUrl: 'widecard.component.html',
    styleUrls: ['widecard.component.css','squarecard.component.css']
})
export class WideCardComponent{
    @Input() wide_img: string;
    @Input() subtitle_HBO: string;

    constructor(){
        this.wide_img = "./assets/";
        this.subtitle_HBO = "HBO";
    }
}