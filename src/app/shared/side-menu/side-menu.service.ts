import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  constructor() { }

  /**
   * Toggles the css class for the sideMenu. The menu is by default 0px and shows content by toggling the active css class.
   */
  collapseSideMenu(): void {
    const appSideMenu = document.getElementById('sideMenu');
    appSideMenu.classList.toggle('active');

    const sideMenuBackground = document.getElementById('sideMenuBackground');
    sideMenuBackground.classList.toggle('active');

    // const globalContainer = document.getElementById('mainContentContainer');
    // globalContainer.classList.toggle('sideMenuActive');
  }
}
