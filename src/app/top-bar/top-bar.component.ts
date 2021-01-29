import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {SideMenuService} from "../side-menu/side-menu.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  // declaring fontawesome variable.
  faBars = faBars;

  constructor(private sideMenuService: SideMenuService) { }

  ngOnInit(): void {
  }

  sideMenuClick() {
    this.sideMenuService.collapseSideMenu();
  }

  // rotate the menu icon when the side menu is active.
  rotateMenuIcon() {
    let sideMenuBarsIcon = document.getElementById('sideMenuBarsIconContainer');
    sideMenuBarsIcon.classList.toggle('activeSideMenu');
    sideMenuBarsIcon.classList.toggle('menuBarsCollapsed');
  }
}
