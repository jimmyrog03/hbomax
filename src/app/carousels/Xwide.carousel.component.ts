import { Component, Input } from "@angular/core";
import { mock_media_list } from "../lists/mock.media.list";
import { MediaListModel } from "../lists/media.list.model";

@Component({
  selector: 'hbo-Xwide-carousel',
  templateUrl: 'Xwide.carousel.component.html',
  styleUrls: ['Xwide.carousel.component.css','foryou.carousel.component.css']
})
export class XWideCarouselComponent {
    @Input() id: string;
    Xwide: MediaListModel[] = [];
  constructor() {
      this.id = "sample";

    for (var item of mock_media_list) {
      this.Xwide.push(item);
    }
  }
}