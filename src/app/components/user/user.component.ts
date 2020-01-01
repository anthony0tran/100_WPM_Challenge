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

  getSkillLevel(level: string): string {
    const levels: string[] = ['Beginner', 'Intermediate', 'Average', 'Pro', 'Typemaster', 'MegaRacer'];

    // slice returns the selected string. e.g. "L5" <= sliced is "5".
    // splice returns the removed part "L5" <= spliced is "L".
    const positionNumber: number = +level.slice(1, level.length) - 1;
    return levels[positionNumber];
  }
}
