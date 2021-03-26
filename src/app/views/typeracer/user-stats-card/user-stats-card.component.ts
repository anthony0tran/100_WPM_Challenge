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

  @Input() user: User;
  skillLevel = ['Beginner', 'Intermediate', 'Average', 'Pro', 'TypeMaster', 'MegaRacer'];
  avatar: string;

  ngOnInit(): void {
    // The avatar will be null if the user has not chosen a specific car. A random car will be chosen on init.
    if (this.user.avatar == null) {
      this.avatar = this.randomizeAvatar();
    }
  }

  /**
   * Rounds a number to one number after the decimal.
   *
   * @param value The number that needs to be rounded
   * @return The rounded number
   */
  roundToOneDecimal(value: number): number {
    return Math.round(value * 10) / 10;
  }

  /**
   * Calculates the win ratio of this user.
   *
   * @return the winrate as a percentage.
   */
  calculateWinRatio(): number {
    return Math.ceil((this.user.tstats.gamesWon / this.user.tstats.cg) * 100);
  }

  /**
   * Converts the level of the user to the skill level as shown on typeracer.
   *
   * @return the skill level
   */
  getSkillLevel(): string {
    let skillLevel: string;

    switch (this.user.tstats.level) {
      case 'L1':
        skillLevel = this.skillLevel[0];
        break;
      case 'L2':
        skillLevel = this.skillLevel[1];
        break;
      case 'L3':
        skillLevel = this.skillLevel[2];
        break;
      case 'L4':
        skillLevel = this.skillLevel[3];
        break;
      case 'L5':
        skillLevel = this.skillLevel[4];
        break;
      case 'L6':
        skillLevel = this.skillLevel[5];
        break;
    }

    return skillLevel;
  }

  /**
   * Choose a random car if the user has not specified a specific car.
   *
   * @return a random gif that corresponds with the typeracer server.
   */
  randomizeAvatar(): string {
    const randomNumber: number = Math.random() * (12 - 1) + 1;
    return 'beetle' + Math.floor(randomNumber) + '.gif';
  }
}
