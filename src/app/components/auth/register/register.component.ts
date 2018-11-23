import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Lodging} from '../../../models/lodging.model';
import {LodgingsBuilder} from '../../../models/builders/lodgings.builder';
import {LodgingsType} from '../../../utils/lodgingsType.enum';
import {UsersService} from '../../../services/users/users.service';
import {User} from '../../../models/user.model';
import {UserBuilder} from '../../../models/builders/user.builder';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const user: User = new UserBuilder(1)
      .setFirstName(form.value['first_name'])
      .setSurname(form.value['surname'])
      .setUserType(form.value['user_type'])
      .setEmail(form.value['email'])
      .setPassword(form.value['password'])
      .setPhoneNumber(form.value['phone_number'])
      .setCountry(form.value['country'])
      .setCity(form.value['city'])
      .setZipCode(form.value['zip_code'])
      .setAddress(form.value['address'])
      .builder();

    this.userService.registerUser(user);
    this.router.navigate(['login']);
  }

}
