import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpclient: HttpClient) { }

  getUser(): Observable<any> {
    return this.httpclient.get('https://data.typeracer.com/users?id=tr:4n2h0ny&universe=play');
  }
}
