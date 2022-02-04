import { Component } from "@angular/core";
import { mock_media_list } from "../cards/mock.media.list";
import { MediaListModel } from "../cards/media.list.model";

@Component({
    selector: 'hbo-justadded',
    templateUrl: 'justadded.carousel.component.html',
    styleUrls: ['justadded.carousel.component.css', 'foryou.carousel.component.css']
})
export class JustAddedComponent{
    justadded: MediaListModel [] = [];
    constructor(){
        for(var item of mock_media_list) {
          this.justadded.push(item);
        }
      }
}