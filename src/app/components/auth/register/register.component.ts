import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {UsersService} from '../../../services/users/users.service';
import {Router} from '@angular/router';
import {SignUpInfo} from '../../../utils/signup-info';
import {Address} from '../../../models/address';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router, private authService: AuthService) { }

  registrationForm: FormGroup;

  ngOnInit() {
    this.registrationForm = new FormGroup({
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
    });
  }

  onSubmit(){

    const data = this.registrationForm.value;
    const signUpFOrm = new SignUpInfo(
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

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value; // to get value in input tag
    let confirmPassword = AC.get('password_confirmation').value; // to get value in input tag
    if(password != confirmPassword) {
      console.log('false');
      return {MatchPassword: true};
    } else {
      console.log('true');
      return null;
    }
  }


}
