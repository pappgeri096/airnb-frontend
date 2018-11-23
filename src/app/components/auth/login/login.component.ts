import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model';
import {UsersService} from '../../../services/users/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.userService.loginUser(form.value['email'], form.value['password']);
    this.router.navigate(['user']);
  }

}
