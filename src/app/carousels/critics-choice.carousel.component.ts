import { Component, Input } from "@angular/core";
import { MediaListModel } from "../lists/media.list.model";
import { critics_awards_list } from "../lists/critics-choice.list";

@Component({
  selector: 'hbo-critics-choice',
  templateUrl: 'tall.img.carousel.component.html',
  styleUrls: ['tall.img.carousel.component.css','foryou.carousel.component.css','../cards/showcasecard.component.css']
})
export class CriticsChoiceComponent {
    @Input() id: string;
    @Input() heading: string;
    @Input() subtext: string;
  tall: MediaListModel[] = [];

  constructor() {
      this.id = "CriticsChoice";
      this.heading = "2022 Critics Choice Award Nominees";
      this.subtext = "Tastemaker-approved films and series";

    for (var item of critics_awards_list) {
      this.tall.push(item);
    }
  }
}