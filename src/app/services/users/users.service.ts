import { Injectable } from '@angular/core';
import {User} from '../../models/user.model';
import {UserBuilder} from '../../models/builders/user.builder';
import {Subject} from 'rxjs';
import {Todo} from '../../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _user: User = new UserBuilder(1).setCity('Budapest').builder();

  usersChanged = new Subject<User[]>();

  constructor() { }

  getUserById(id: number): User {
    return null;
  }

  deleteUser(id: number) {
    const userToRemove: User = this.getUserById(id);
  }

  getUser() {
    return this._user;
  }
}
