import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TyperacerService {

  // Array containing typeracer usernames of my friends.
  userList = ['4n2h0ny', 'kutspatiebalk', 'yung_typo', 'moonlightmelody', 'zoeko5', 'min_hd', 'shekster420'];

  constructor(private httpclient: HttpClient) { }

  // Observable<User>
  getUserStats(username: string): Observable<User>  {
    // This is an open-source CORS proxy necessary to prevent the browser from blocking the http request. (CORS policy warning)
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    // const proxy = 'http://localhost:8080/';
    return this.httpclient.get<User>(proxy +  'https://data.typeracer.com/users?id=tr:' + username + '&universe=play');
  }
}
