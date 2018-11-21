import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UsersService} from '../../../services/users/users.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Lodging} from '../../../models/lodging.model';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  private id: number;
  private user: User;

  constructor(private userService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.id = +params['id'];
      this.user = this.userService.getUserById(this.id);
    });
  }

  onSubmit(form: NgForm) {

  }

}
