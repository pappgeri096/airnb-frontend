import { Component } from '@angular/core';
import {UsersService} from './services/users/users.service';
import {AuthService} from './services/auth/auth.service';
import {TokenStorageService} from './services/auth/token-storage/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  username: string;

  constructor(private userService: UsersService, private auth: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.username = this.tokenStorage.getUsername();
  }

  logedIn(){
    return this.auth.isLogedIn();
  }

}
