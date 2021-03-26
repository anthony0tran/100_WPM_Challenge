import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TyperacerService {

  // Array containing typeracer usernames that will be fetched from the api.
  userNames: string[] = ['4n2h0ny', 'kutspatiebalk', 'yung_typo', 'moonlightmelody', 'zoeko5', 'min_hd', 'shekster420'];

  // Fetched users ordered by their recentAvgWpm.
  orderedUsers: User[] = [];

  constructor(private httpclient: HttpClient) { }

  /**
   * Does a HTTP call to the proxy server that gets the data from typeracer.
   *
   * @param username The username of the user that will be fetched from the api.
   * @return an Observable that contains an User object.
   */
  getUserStats(username: string): Observable<User>  {
    return this.httpclient.get<User>(environment.proxyUrl + 'https://data.typeracer.com/users?id=tr:' + username + '&universe=play');
  }

  /**
   * Reorders and adds the usernames based on their recentAvgWpm. The ordered usernames are saved to the orderedUsers variable;
   *
   * @param currentUser The current user that was fetched from the api.
   */
  AddUser(currentUser: User): void {
    // Just add the user if the array is empty.
    if (this.orderedUsers.length === 0) {
      this.orderedUsers.push(currentUser);
      return;
    }

    // Insert the user when the recentAvgWpm is higher than the user in the array.
    // Just push the user into the array if no user in the array has a lower recentAvgWpm.
    for (let i = 0; i < this.orderedUsers.length; i++) {
      if (this.orderedUsers[i].tstats.recentAvgWpm <= currentUser.tstats.recentAvgWpm) {
        this.orderedUsers.splice(i, 0, currentUser);
        break;
      }

      if (this.orderedUsers.length === i + 1) {
        this.orderedUsers.push(currentUser);
        break;
      }
    }
  }
}
