import { Component } from "@angular/core";
import { mock_media_list } from "../cards/mock.media.list";
import { MediaListModel } from "../cards/media.list.model";

@Component({
    selector: 'hbo-series',
    templateUrl: 'series.component.html',
    styleUrls: ['series.component.css', 'mainpage.component.css']
})
export class SeriesPageComponent{
    series: MediaListModel[] = [];
    constructor() {
      for (var item of mock_media_list) {
        this.series.push(item);
      }
    }
}