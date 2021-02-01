import { Component, OnInit } from '@angular/core';
import {SideMenuService} from "../side-menu/side-menu.service";
import {TyperacerService} from "./typeracer.service";

@Component({
  selector: 'app-typeracer',
  templateUrl: './typeracer.component.html',
  styleUrls: ['./typeracer.component.scss']
})
export class TyperacerComponent implements OnInit {

  constructor(private typeracerService: TyperacerService) { }

  ngOnInit(): void {
    this.typeracerService.getUserStats('4n2h0ny').toPromise().then(data =>{
        console.log('retrieved from api: ' + data.id);
      }
    );
  }
}
