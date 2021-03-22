import { Component, OnInit, Input  } from '@angular/core';
import { User } from 'src/app/models/user';
import {TyperacerService} from '../typeracer.service';

@Component({
  selector: 'app-user-stats-card',
  templateUrl: './user-stats-card.component.html',
  styleUrls: ['./user-stats-card.component.scss']
})
export class UserStatsCardComponent implements OnInit {

  constructor(private typeracerService: TyperacerService) { }

  @Input() userName: string;
  user: User;

  ngOnInit(): void {
    this.typeracerService.getUserStats(this.userName).toPromise().then(data => {
        console.log('retrieved from api: ' + data.id);
      }
    );
  }
}
