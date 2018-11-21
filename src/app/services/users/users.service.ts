import { Injectable } from '@angular/core';
import {User} from '../../models/user.model';
import {UserBuilder} from '../../models/builders/user.builder';
import {Subject} from 'rxjs';
import {Todo} from '../../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users: User[] = [
    new UserBuilder(1).setCity('Budapest').builder()
  ];

  usersChanged = new Subject<User[]>();

  constructor() { }

  getUsers(): User[] {
    return this._users.slice();
  }

  getUserById(id: number): User {
    return this._users.find((user: User) => {
      return user.id === id;
    });
  }

  deleteUser(id: number) {
    const userToRemove: User = this.getUserById(id);
    this._users = this._users.filter((user: User) => {
      return user !== userToRemove;
    });
  }
}
