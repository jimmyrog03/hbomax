import { Component, Input } from "@angular/core";
import { mock_media_list } from "../lists/mock.media.list";
import { MediaListModel } from "../lists/media.list.model";

@Component({
  selector: 'hbo-tall-img-carousel',
  templateUrl: 'tall.img.carousel.component.html',
  styleUrls: ['tall.img.carousel.component.css','foryou.carousel.component.css','../cards/showcasecard.component.css']
})
export class TallImgCarouselComponent {
    @Input() id: string;
    @Input() heading: string;
    @Input() subtext: string;

    tall: MediaListModel[] = [];
  constructor() {
      this.id = "Id";
      this.heading = "Heading";
      this.subtext = "Subtext";

    for (var item of mock_media_list) {
      this.tall.push(item);
    }
  }
}