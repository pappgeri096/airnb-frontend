import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users/users.service';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UsersService, private auth: AuthService) { }

  ngOnInit() {
  }

  logedIn(){
    return this.auth.isLogedIn();
  }

}
