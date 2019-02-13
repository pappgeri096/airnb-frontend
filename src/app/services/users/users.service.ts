import { Injectable } from '@angular/core';
import {User} from '../../models/user.model';
import {Subject} from 'rxjs';
import {Todo} from '../../models/todo.model';
import {Lodging} from '../../models/lodging.model';
import {LodgingsService} from '../lodgings/lodgings.service';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../auth/token-storage/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _user: User;

  usersChanged = new Subject<User[]>();

  constructor(private lodgingsService: LodgingsService, private http: HttpClient, private tokenStorage: TokenStorageService) {

  }

  getUserById(id: number): User {
    return null;
  }

  deleteUser(id: number) {
    const userToRemove: User = this.getUserById(id);
  }

  getUser() {
    return this._user;
  }

  registerUser(user: User) {

  }

  loginUser(emaill: string, password: string) {
    return true;
  }

  getUserFromDB() {
     return this.http.get<User>('http://localhost:8080/api/user/' + this.tokenStorage.getUsername());
  }

}
