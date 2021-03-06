import { Component, Input } from "@angular/core";

@Component({
    selector: 'hbo-showcasecard',
    templateUrl: 'showcasecard.component.html',
    styleUrls: ['showcasecard.component.css','squarecard.component.css']
})
export class ShowCaseCardComponent{
    @Input() title: string;
    @Input() heading: string;
    @Input() subtext: string;
    @Input() img: string;

    constructor(){
        this.title = "Title";
        this.heading = "Heading";
        this.subtext = "Subtext";
        this.img = "./assets/"
    }
}