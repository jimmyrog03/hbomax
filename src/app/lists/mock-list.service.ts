import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MediaListModel } from "./media.list.model";

@Injectable(
    {providedIn: 'root'}
)
export class MockListService{
    private baseURL: string = "https://hbo-max-2797b-default-rtdb.firebaseio.com/";
    private mockListEndPoint: string = "mock-list.json";

    constructor(private http: HttpClient){

    }

    getMockList(){
        return this.http.get<MediaListModel []>(this.baseURL + this.mockListEndPoint);
    }
    
    getMockListIndex(index:number){
        return this.http.get<MediaListModel>(this.baseURL + 'mock-list' + '/' + index + '.json');
    }
}