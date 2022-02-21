import { Component } from "@angular/core";
import { popular_search_list } from "../lists/popularsearch.list";
import { PopularSearchModel } from "../lists/popularsearch.model";

@Component({
    selector: 'hbo-searchpage',
    templateUrl: 'searchpage.component.html',
    styleUrls: ['searchpage.component.css', 'mainpage.component.css']
})
export class SearchPageComponent{
    searchpage: PopularSearchModel[] = [];
    constructor() {
        for (var item of popular_search_list) {
            this.searchpage.push(item);
        }
    }
}