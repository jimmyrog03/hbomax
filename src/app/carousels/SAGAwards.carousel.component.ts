import { Component, Input } from "@angular/core";
import { SAG_awards_list } from "../lists/SAGawards.list";
import { MediaListModel } from "../lists/media.list.model";

@Component({
  selector: 'hbo-SAGAwards',
  templateUrl: 'Xwide.carousel.component.html',
  styleUrls: ['Xwide.carousel.component.css','foryou.carousel.component.css']
})
export class SAGAwardsComponent {
    @Input() id: string;

  Xwide: MediaListModel[] = [];
  constructor() {
      this.id = "SAGAwards";

    for (var item of SAG_awards_list) {
      this.Xwide.push(item);
    }
  }
}