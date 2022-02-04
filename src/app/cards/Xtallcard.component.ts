import { Component, Input } from "@angular/core";

@Component({
    selector: 'hbo-Xtallcard',
    templateUrl: 'Xtallcard.component.html',
    styleUrls: ['Xtallcard.component.css','widecard.component.css']
})
export class XTallCardComponent{
    @Input() Xtall_img: string;
    @Input() subtitle_HBO: string;

    constructor(){
        this.Xtall_img = "./assets/";
        this.subtitle_HBO = "HBO";
    }
}