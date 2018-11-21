import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users/users.service';
import {User} from '../../models/user.model';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private _user: User;
  private id: number;

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   this._user = this.userService.getUser();
  }


  get user(): User {
    return this._user;
  }

  deleteUser() {
    this.userService.deleteUser(this.id);
    this.router.navigate(['lodgings']);
  }
}
