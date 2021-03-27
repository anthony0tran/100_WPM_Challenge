import {Component, OnDestroy, OnInit} from '@angular/core';
import {TyperacerService} from './typeracer.service';
import {TopBarService} from '../../shared/top-bar/top-bar.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-typeracer',
  templateUrl: './typeracer.component.html',
  styleUrls: ['./typeracer.component.scss']
})
export class TyperacerComponent implements OnInit, OnDestroy {

  constructor(public typeracerService: TyperacerService,
              private topBarService: TopBarService,
              private router: Router) { }

  ngOnInit(): void {
    // Change the icon in the top-bar when the view is initialized
    this.topBarService.setRouteIcon(this.router.url);

    this.typeracerService.userNames.forEach(userName => {
      this.typeracerService.getUserStats(userName).toPromise().then(data => {
          this.typeracerService.AddUser(data);
        }
      );
    });
  }

  ngOnDestroy(): void {
    this.typeracerService.orderedUsers = [];
  }
}
