import { Component } from '@angular/core';
import {UsersService} from './services/users/users.service';
import {AuthService} from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private userService: UsersService, private auth: AuthService) { }

  ngOnInit() {
  }

  logedIn(){
    return this.auth.isLogedIn();
  }

}
