import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { PopularSearchModel } from "./popularsearch.model";

@Injectable(
    {providedIn: 'root'}
)
export class SearchListService{

    constructor(private db:AngularFireDatabase){
    }

    public getSearchList(){
        return this.db.list<PopularSearchModel>("search-list").valueChanges();
    }

    addToSearchList(media: PopularSearchModel){
        this.db.list<PopularSearchModel>("search-list").push(media);
    }
}