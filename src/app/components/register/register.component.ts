import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usernameFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private common: CommonService) { }

  ngOnInit() {
    this.usernameFormGroup = this.formBuilder.group({
      username: ['', Validators.required]
    });
  }

  reload() {
    location.reload();
  }

  saveUserFromForm() {
    this.common.saveUser(this.usernameFormGroup.value.username).subscribe(data => {
      console.log('This data: ' + data);
    });
  }
}
