import { Injectable } from "@angular/core";
import { MediaListModel } from "./media.list.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)
export class MockListService{

    constructor(private db:AngularFireDatabase){

    }

    public getMockList(){
        return this.db.list<MediaListModel>("mock-list").valueChanges();
    }
}