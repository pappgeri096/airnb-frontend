import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Lodging} from '../../../models/lodging.model';
import {LodgingsType} from '../../../utils/lodgingsType.enum';
import {UsersService} from '../../../services/users/users.service';
import {User} from '../../../models/user.model';
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

  ngOnInit() {
  }

  onSubmit(form: NgForm){

    const data = form.value;
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

}
