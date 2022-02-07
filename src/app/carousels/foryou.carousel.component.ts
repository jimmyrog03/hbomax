import { Component } from "@angular/core";
import { mock_media_list } from "../cards/mock.media.list";
import { MediaListModel } from "../cards/media.list.model";

@Component({
  selector: 'hbo-foryou',
  templateUrl: 'foryou.carousel.component.html',
  styleUrls: ['foryou.carousel.component.css']
})
export class ForYouComponent {
  foryou: MediaListModel[] = [];
  constructor() {
    for (var item of mock_media_list) {
      this.foryou.push(item);
    }
  }
}