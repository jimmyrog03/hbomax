import { Component, OnInit } from "@angular/core";
import { PopularSearchModel } from "../lists/popularsearch.model";
import { SearchListService } from "../lists/popularsearch.service";

@Component({
    selector: 'hbo-searchpage',
    templateUrl: 'searchpage.component.html',
    styleUrls: ['searchpage.component.css', 'mainpage.component.css']
})
export class SearchPageComponent implements OnInit{
    searchpage: PopularSearchModel[] = [];
    constructor(private searchServ:SearchListService) {

    }
    ngOnInit(): void {
        this.searchServ.getSearchList().subscribe((data: PopularSearchModel[]) => {
            console.log("Fetching Popular Search List");
            for (var item of data) {
                this.searchpage.push(item);
            }
        });
    }

}