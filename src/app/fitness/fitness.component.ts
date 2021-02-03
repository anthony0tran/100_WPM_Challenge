import { Component, OnInit } from '@angular/core';
import {TopBarService} from "../top-bar/top-bar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.scss']
})
export class FitnessComponent implements OnInit {

  constructor(private topBarService: TopBarService,
              private router: Router) { }

  ngOnInit(): void {
    // Change the icon in the top-bar when the view is initialized
    this.topBarService.setRouteIcon(this.router.url);
  }

}
