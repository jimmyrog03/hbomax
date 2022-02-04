import { Component } from "@angular/core";
import { mock_media_list } from "../cards/mock.media.list";
import { MediaListModel } from "../cards/media.list.model";

@Component({
    selector: 'hbo-mylist',
    templateUrl: 'mylist.carousel.component.html',
    styleUrls: ['mylist.carousel.component.css', 'foryou.carousel.component.css']
})
export class MyListComponent{
    mylist: MediaListModel [] = [];
    constructor(){
        for(var item of mock_media_list) {
          this.mylist.push(item);
        }
      }
}