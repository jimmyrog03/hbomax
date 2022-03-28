import { Component, OnInit } from '@angular/core';
import { PopularSearchModel } from '../lists/popularsearch.model';
import { SearchListService } from '../lists/popularsearch.service';

@Component({
  selector: 'hbo-add-to-search',
  templateUrl: './add-to-search.component.html',
  styleUrls: ['./add-to-search.component.css','../main-site/mainpage.component.css']
})
export class AddToSearchComponent implements OnInit {

  constructor(private searchServ: SearchListService) { }

  ngOnInit(): void {
  }

  addToSearch(media: PopularSearchModel){
    console.log("Add to search was clicked");
    console.log(media);
    this.searchServ.addToSearchList(media);
  }
}
