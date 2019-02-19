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
    this._user = this.userService.getUserFromServer();
  }

  onSubmit(form: NgForm) {
      this.router.navigate(['/user']);
  }


  get user(): User {
    return this._user;
  }
}
