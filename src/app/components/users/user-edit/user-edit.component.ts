import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UsersService} from '../../../services/users/users.service';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  private id: number;
  private _user: User;

  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this._user = this.userService.getUser();
  }

  onSubmit(form: NgForm) {
      this._user.setFirstName(form.value['first_name']);
      this._user.setSurname(form.value['surname']);
      this._user.setPasswordHash(form.value['password']);
      this._user.setPhoneNumber(form.value['phone_number']);
      this._user.setCountry(form.value['country']);
      this._user.setCity(form.value['city']);
      this._user.setZipCode(form.value['zip_code']);
      this._user.setAddress(form.value['address']);
      this.router.navigate(['/user']);
  }


  get user(): User {
    return this._user;
  }
}
