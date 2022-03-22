import { Component, OnInit } from "@angular/core";
import { mock_media_list } from "../lists/mock.media.list";
import { MediaListModel } from "../lists/media.list.model";
import { MockListService } from "../lists/mock-list.service";

@Component({
  selector: 'hbo-foryou',
  templateUrl: 'foryou.carousel.component.html',
  styleUrls: ['foryou.carousel.component.css']
})
export class ForYouComponent implements OnInit {
  foryou: MediaListModel[] = [];
  constructor(private mockListService:MockListService) {
    
  }

  ngOnInit(): void {
    this.mockListService.getMockList().subscribe((data: MediaListModel[]) => {
      console.log("Fetching mock list");
      for (var item of data) {
        console.log(item);
        this.foryou.push(item);
      }
    })
  }

}