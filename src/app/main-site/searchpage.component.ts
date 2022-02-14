import { Component } from "@angular/core";
import { mock_media_list } from "../cards/mock.media.list";
import { MediaListModel } from "../cards/media.list.model";

@Component({
    selector: 'hbo-searchpage',
    templateUrl: 'searchpage.component.html',
    styleUrls: ['searchpage.component.css', 'mainpage.component.css']
})
export class SearchPageComponent{
    searchpage: MediaListModel[] = [];
    constructor() {
        for (var item of mock_media_list) {
            this.searchpage.push(item);
        }
    }
}