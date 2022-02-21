import { Component } from "@angular/core";
import { mock_media_list } from "../lists/mock.media.list";
import { MediaListModel } from "../lists/media.list.model";

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