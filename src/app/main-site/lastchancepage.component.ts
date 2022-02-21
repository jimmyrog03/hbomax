import { Component } from "@angular/core";
import { mock_media_list } from "../lists/mock.media.list";
import { MediaListModel } from "../lists/media.list.model";

@Component({
    selector: 'hbo-lastchancepage',
    templateUrl: 'lastchancepage.component.html',
    styleUrls: ['lastchancepage.component.css', 'mainpage.component.css']
})
export class LastChancePageComponent{
    lastchance: MediaListModel[] = [];
    constructor() {
        for (var item of mock_media_list) {
            this.lastchance.push(item);
        }
    }
}