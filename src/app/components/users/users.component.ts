import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users/users.service';
import {User} from '../../models/user.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TodosService} from '../../services/todos/todos.service';
import {LodgingsService} from '../../services/lodgings/lodgings.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private _user: User;
  private id: number;

  constructor(private userService: UsersService, private todosService: TodosService, private lodgingsService: LodgingsService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
     this.userService.getUserFromDB().subscribe( (response) => {
       this._user = response['data'];
     },
     (error) => {console.log(error); });
  }


  get user(): User {
    return this._user;
  }

  deleteUser() {
    this.userService.deleteUser(this.id);
    this.router.navigate(['lodgings']);
  }


}
