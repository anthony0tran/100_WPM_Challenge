import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  /**
   * Pass the service through the constructor
   */
  constructor(private userService: UserService) { }

  usersList: User[] = [];

  ngOnInit() {
    this.userService.getUser().subscribe(
      data => {
        this.usersList.push(data);
      }
    );
  }
}
