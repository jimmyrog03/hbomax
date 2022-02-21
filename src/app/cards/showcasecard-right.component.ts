import { Component, Input } from "@angular/core";

@Component({
    selector: 'hbo-showcasecard-right',
    templateUrl: 'showcasecard-right.component.html',
    styleUrls: ['showcasecard.component.css','showcasecard-right.component.css','squarecard.component.css']
})
export class ShowCaseCardRightComponent{
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