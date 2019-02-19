import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {UsersService} from '../../../services/users/users.service';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';
import {User} from '../../../models/user.model';
import {PasswordMatcher} from '../../../utils/PasswordMatcher';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  private id: number;
  private _user: User;

  editUserForm: FormGroup;

  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userService.getUserFromDB().subscribe(
      (response) => {
        this._user = response;
      },
      (error) => {
        console.log(error);
      }
    );

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

  onSubmit() {

      this.router.navigate(['/user']);
  }


  get user(): User {
    return this._user;
  }
}
