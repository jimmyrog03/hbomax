import { Component } from "@angular/core";
import { mock_media_list } from "../cards/mock.media.list";
import { MediaListModel } from "../cards/media.list.model";

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