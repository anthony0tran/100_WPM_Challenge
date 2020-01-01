import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpclient: HttpClient) { }

  getUser(username: string): Observable<User> {
    // This is an open-source CORS proxy necessary to prevent the browser from blocking the http request. (CORS policy warning)
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    return this.httpclient.get<User>(proxy + 'https://data.typeracer.com/users?id=tr:' + username + '&universe=play');
  }
}
