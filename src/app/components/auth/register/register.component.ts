import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {UsersService} from '../../../services/users/users.service';
import {Router} from '@angular/router';
import {UserInfo} from '../../../utils/user-info';
import {Address} from '../../../models/address';
import {AuthService} from '../../../services/auth/auth.service';
import {PasswordMatcher} from '../../../utils/PasswordMatcher';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router, private authService: AuthService) { }

  editUserForm: FormGroup;

  ngOnInit() {
    this.editUserForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'first_name': new FormControl(null, [Validators.required]),
      'surname': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'password_confirmation': new FormControl(null, [Validators.required]),
      'phone_number': new FormControl(null, [Validators.required]),
      'address': new FormGroup({
        'country': new FormControl(null, [Validators.required]),
        'city': new FormControl(null, [Validators.required]),
        'zip_code': new FormControl(null, [Validators.required]),
        'address': new FormControl(null, [Validators.required])
      })
    }, PasswordMatcher.MatchPassword);
  }

  onSubmit(){

    const data = this.editUserForm.value;
    const signUpFOrm = new UserInfo(
      data['username'],
      data['first_name'],
      data['surname'],
      data['email'],
      data['phone_number'],
      new Address(data['country'], data['city'], data['zip_code'], data['address']),
      data['password'],
    );

    console.log(data);
    this.authService.signUp(signUpFOrm).subscribe(
      data => {
        console.log(data);

      },
      error => {
        console.log(error);

      }
    );
  }




}
