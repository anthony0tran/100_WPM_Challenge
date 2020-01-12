import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  // Pass the data from the dialog through the constructor.
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
  username = this.data;

  ngOnInit() {
  }
}
