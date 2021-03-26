import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TyperacerService {

  // Array containing typeracer usernames of my friends.
  userList = ['4n2h0ny', 'kutspatiebalk', 'yung_typo', 'moonlightmelody', 'zoeko5', 'min_hd', 'shekster420'];

  constructor(private httpclient: HttpClient) { }

  // Observable<User>
  getUserStats(username: string): Observable<User>  {
    return this.httpclient.get<User>(environment.proxyUrl + 'https://data.typeracer.com/users?id=tr:' + username + '&universe=play');
  }
}
