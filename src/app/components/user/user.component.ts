import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  /**
   * Pass the service through the constructor
   */
  constructor(private userService: UserService, private sanitizer: DomSanitizer) { }

  // TODO: Get usernames from database instead of hardcoded.
  userNames: string[] = ['4n2h0ny', 'arenasnow', 'florentine'];
  usersList: User[] = [];

  ngOnInit() {
    for (const userName of this.userNames) {
      this.userService.getUser(userName).subscribe(
        data => {
          this.usersList.push(data);
        }
      );
    }
  }

  // Bypass for the avatar image is needed. The browser will otherwise throw a XSS vulnerability warning .
  getAvatarImage(avatar) {
    const urlString = 'https://data.typeracer.com/public/images/avatars/' + avatar;
    return this.sanitizer.bypassSecurityTrustStyle('url(' + urlString + ')');
  }
}
