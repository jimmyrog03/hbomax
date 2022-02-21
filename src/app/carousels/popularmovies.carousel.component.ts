import { Component } from "@angular/core";
import { mock_media_list } from "../lists/mock.media.list";
import { MediaListModel } from "../lists/media.list.model";

@Component({
  selector: 'hbo-popularmovies',
  templateUrl: 'popularmovies.carousel.component.html',
  styleUrls: ['popularmovies.carousel.component.css', 'foryou.carousel.component.css']
})
export class PopularMoviesComponent {
  popularmovies: MediaListModel[] = [];
  constructor() {
    for (var item of mock_media_list) {
      this.popularmovies.push(item);
    }
  }
}