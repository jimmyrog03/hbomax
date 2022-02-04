import { Component } from "@angular/core";
import { mock_media_list } from "../cards/mock.media.list";
import { MediaListModel } from "../cards/media.list.model";

@Component({
    selector: 'hbo-popularmovies',
    templateUrl: 'popularmovies.carousel.component.html',
    styleUrls: ['popularmovies.carousel.component.css', 'foryou.carousel.component.css']
})
export class PopularMoviesComponent{
    popularmovies: MediaListModel [] = [];
    constructor(){
        for(var item of mock_media_list) {
          this.popularmovies.push(item);
        }
      }
}