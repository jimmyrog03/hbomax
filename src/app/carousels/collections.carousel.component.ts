import { Component } from "@angular/core";
import { collections_list } from "../lists/collections.list";
import { CollectionsModel } from "../lists/collections.model";

@Component({
  selector: 'hbo-collections',
  templateUrl: 'collections.carousel.component.html',
  styleUrls: ['foryou.carousel.component.css']
})
export class CollectionsComponent {
  collections: CollectionsModel[] = [];
  constructor() {
    for (var item of collections_list) {
      this.collections.push(item);
    }
  }
}