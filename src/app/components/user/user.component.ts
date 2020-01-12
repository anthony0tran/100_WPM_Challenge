import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {DomSanitizer} from '@angular/platform-browser';
import {Chart} from 'chart.js';
import {CommonService} from '../../services/common.service';
import {Username} from '../../models/Username';
import {RegisterComponent} from '../register/register.component';
import {MatDialog} from '@angular/material/dialog';
import {ShareComponent} from '../share/share.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  /**
   * Pass the service through the constructor
   */
  constructor(private userService: UserService, private sanitizer: DomSanitizer, private common: CommonService,
              private dialog: MatDialog) { }

  // TODO: Get usernames from database instead of hardcoded.
  userNames: string[] = ['4n2h0ny', 'kutspatiebalk', 'yung_typo', 'moonlightmelody', 'zoeko5', 'min_hd', 'shekster420'];
  usersList: User[] = [];
  recentScoresChart: Chart = [];

  ngOnInit() {
    // TODO: getting usernames from database works but the for loop after this one doesn't work...
    // this.userNames = this.getUsernameFromDb();
    // console.log(this.userNames);

    for (const userName of this.userNames) {
      this.userService.getUser(userName).toPromise().then(data => {
        if (typeof data !== 'undefined') {
          this.insertInArray(data);
        }

        const newDataSet = {
          label: data.id.slice(3, data.id.length),
          backgroundColor: this.getChartColor(this.recentScoresChart),
          borderColor: this.getChartColor(this.recentScoresChart),
          data: data.tstats.recentScores,
          fill: false,
        };

        this.recentScoresChart.data.datasets.push(newDataSet);
        this.recentScoresChart.update();
      });
    }

    this.initRecentWpmChart();
  }

  initRecentWpmChart() {
    this.recentScoresChart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Last 10 matches',
          fontColor: 'white',
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Matches',
              fontColor: 'white',
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'WPM',
              fontColor: 'white',
            },
          }]
        }
      }
    });
  }

  focusRecentScoresChart(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  // No longer needed because of firebase
  getUsernameFromDb() {
    const usernameArray: string[] = [];

    this.common.getUser().toPromise().then(data => {
      for (const username of data) {
        usernameArray.push(username.username);
      }
    });

    return usernameArray;
  }

  // Insert on the right index based on the recent Average WPM.
  insertInArray(data: User) {
    // Just push the user in the array if the userList array is empty.
    if (this.usersList.length === 0) {
      this.usersList.push(data);
    } else {
      // Loop till the 'data: User' is faster than the user on index i.
      for (let i = 0; i < this.usersList.length; i++) {
        if (this.usersList[i].tstats.recentAvgWpm < data.tstats.recentAvgWpm) {
          // Insert 'data: User' on index i.
          this.usersList.splice(i, 0, data);
          return;
        }
      }

      // Push 'data: User' at the end of the array if none of the users in the array are slower.
      this.usersList.push(data);
    }
  }

  // Bypass for the avatar image is needed. The browser will otherwise throw a XSS vulnerability warning .
  getAvatarImage(avatar) {
    let urlString = '';
    if (avatar !== null) {
      urlString = 'https://data.typeracer.com/public/images/avatars/' + avatar;
    } else {
      urlString = 'https://vignette.wikia.nocookie.net/typeracer/images/2/27/TypeRacer_game.png/revision/latest?cb=20180923201501';
    }
    return this.sanitizer.bypassSecurityTrustStyle('url(' + urlString + ')');
  }

  getSkillLevel(level: string): string {
    const levels: string[] = ['Beginner', 'Intermediate', 'Average', 'Pro', 'Typemaster', 'MegaRacer'];

    // slice returns the selected string. e.g. "L5" <= sliced is "5".
    // splice returns the removed part "L5" <= spliced is "L".
    const positionNumber: number = +level.slice(1, level.length) - 1;
    return levels[positionNumber];
  }

  // Did this to prevent errors in the #1 banner. (Because function is called before users are loaded in)
  checkIfUserIdExists(user: User) {
    if (typeof user !== 'undefined') {
      return user;
    } else {
      return {
        id: '',
        tstats: {
          recentAvgWpm: 0
        }
      };
    }
  }

  // Returns a string of a random hex color.
  getChartColor(chart: Chart): string {
    const colors = ['#4dc9f6', '#f67019', '#f53794', '#537bc4', '#acc236', '#166a8f', '#00a950', '#58595b', '#8549ba'];
    let datasetCounter = 0;

    for (const dataset of chart.data.datasets) {
      datasetCounter++;
    }

    if (datasetCounter > 9) {
      while (datasetCounter > 9) {
        datasetCounter -= 9;
      }
      return colors[datasetCounter];
    } else if (datasetCounter < 9 && datasetCounter !== 0) {
      return colors[datasetCounter];
    } else {
      return colors[datasetCounter];
    }
  }

  // Pass the username to the shareComponent
  showTyperacerBadge(username: string) {
    username = username.slice(3, username.length);
    this.dialog.open(ShareComponent, {
      data: username
    });
  }
}
