import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users/users.service';
import {User} from '../../models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {TodosService} from '../../services/todos/todos.service';
import {LodgingsService} from '../../services/lodgings/lodgings.service';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private _user: User;
  private id: number;

  constructor(private userService: UsersService, private todosService: TodosService,
              private lodgingsService: LodgingsService, private activatedRoute: ActivatedRoute,
              private router: Router, private auth: AuthService) {

  }

  ngOnInit() {
     this.userService.getUserFromDB().subscribe( (response) => {
       this._user = response;
     },
     (error) => {console.log(error); });
  }


  get user(): User {
    return this._user;
  }

  deleteUser() {
    this.userService.deleteUserFromDB().subscribe(
      (response) => {
        this.auth.signOut();
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
      }
    );

  }


}
