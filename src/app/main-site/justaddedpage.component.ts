import { Component } from "@angular/core";
import { mock_media_list } from "../lists/mock.media.list";
import { MediaListModel } from "../lists/media.list.model";

@Component({
    selector: 'hbo-justaddedpage',
    templateUrl: 'justaddedpage.component.html',
    styleUrls: ['justaddedpage.component.css', 'mainpage.component.css']
})
export class JustAddedPageComponent {
    justadded: MediaListModel[] = [];
    constructor() {
        for (var item of mock_media_list) {
            this.justadded.push(item);
        }
    }
}