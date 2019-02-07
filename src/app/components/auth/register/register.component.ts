import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Lodging} from '../../../models/lodging.model';
import {LodgingsType} from '../../../utils/lodgingsType.enum';
import {UsersService} from '../../../services/users/users.service';
import {User} from '../../../models/user.model';
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

  }

}
