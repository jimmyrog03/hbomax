import { Component, Input } from "@angular/core";

@Component({
    selector: 'hbo-squarecard',
    templateUrl: 'squarecard.component.html',
    styleUrls: ['squarecard.component.css','widecard.component.css']
})
export class SquareCardComponent{
    @Input() square_img: string;
    @Input() title: string;
    @Input() subtitle_HBO: string;

    constructor(){
        this.square_img = "./assets/";
        this.title = "Title";
        this.subtitle_HBO = "HBO";
    }
}

    