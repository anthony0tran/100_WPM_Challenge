import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Username} from '../models/Username';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  // TODO: change DB URL.
  dataBaseURL = 'http://localhost:8080';

  saveUser(usernameData: string) {
    const postData = {username: usernameData};
    return this.httpClient.post(this.dataBaseURL + '/api/saveUser/', postData);
  }

  getUser() {
    return this.httpClient.get<Username[]>(this.dataBaseURL + '/api/getUser/');
  }
}
