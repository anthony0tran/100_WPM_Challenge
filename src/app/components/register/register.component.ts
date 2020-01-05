import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommonService} from '../../services/common.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usernameFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private common: CommonService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.usernameFormGroup = this.formBuilder.group({
      username: ['', Validators.required]
    });
  }

  reload() {
    location.reload();
  }

  saveUserFromForm() {
    this.common.saveUser(this.usernameFormGroup.value.username).toPromise().then(data => {
      console.log('This data: ' + data);
    });
  }

  databaseDisabledSnackbar() {
    const username = this.usernameFormGroup.value.username;
    const message = 'Sorry ' + username + '! The database has been disabled. Please send Anthony your username so he can add you.' ;
    this.snackBar.open(message, 'Okay');
  }
}
